import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidField(value, maxLength, trim = false) {
  if (typeof value !== "string") return false;
  const v = value.trim();
  return v.length > 0 && (trim ? v.length <= maxLength : value.length <= maxLength);
}

// --- Rate limit simple en memoria (por instancia/serverless) ---
// Suficiente para frenar spam masivo a /api/send sin dependencias externas.
const rateLimitStore =
  globalThis._contactRateLimit || (globalThis._contactRateLimit = new Map());

const WINDOW_MS = 60 * 60 * 1000; // 1 hora
const MAX_REQUESTS = 5; // máx 5 mensajes por IP por hora
const MIN_INTERVAL_MS = 30 * 1000; // mín 30s entre envíos
const MIN_FORM_TIME_MS = 3000; // el form debe tardar al menos 3s en llenarse (anti-bot)

function getClientIp(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn("TURNSTILE_SECRET_KEY no configurada: se omite verificación (solo dev).");
    return true;
  }
  if (!token) return false;
  try {
    const form = new URLSearchParams();
    form.append("secret", secret);
    form.append("response", token);
    if (ip && ip !== "unknown") form.append("remoteip", ip);

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: form }
    );
    const data = await res.json();
    return data.success === true;
  } catch (e) {
    console.error("Error verificando Turnstile:", e);
    return false;
  }
}

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // Limpieza ocasional para no crecer sin límite
  if (rateLimitStore.size > 1000) {
    for (const [key, val] of rateLimitStore) {
      if (now - val.windowStart > WINDOW_MS) rateLimitStore.delete(key);
    }
  }

  if (!entry) {
    rateLimitStore.set(ip, {
      count: 1,
      windowStart: now,
      lastRequest: now,
    });
    return { limited: false };
  }

  // Ventana expirada -> reset
  if (now - entry.windowStart > WINDOW_MS) {
    entry.count = 1;
    entry.windowStart = now;
    entry.lastRequest = now;
    return { limited: false };
  }

  // Muy seguido (aunque esté dentro del cupo)
  const sinceLast = now - entry.lastRequest;
  if (sinceLast < MIN_INTERVAL_MS) {
    return {
      limited: true,
      retryAfter: Math.ceil((MIN_INTERVAL_MS - sinceLast) / 1000),
      reason: "too-fast",
    };
  }

  // Cupo agotado
  if (entry.count >= MAX_REQUESTS) {
    return {
      limited: true,
      retryAfter: Math.ceil((WINDOW_MS - (now - entry.windowStart)) / 1000),
      reason: "quota",
    };
  }

  entry.count += 1;
  entry.lastRequest = now;
  return { limited: false };
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message, language, website, startedAt, turnstileToken } = body;

  // Honeypot: field name "website" must be empty. Bots fill it, humans ignore it.
  if (website) {
    return NextResponse.json({ success: true });
  }

  // Turnstile: verificación anti-bot (si hay secret configurada, es obligatoria)
  if (process.env.TURNSTILE_SECRET_KEY) {
    const ipForCaptcha = getClientIp(req);
    const ok = await verifyTurnstile(turnstileToken, ipForCaptcha);
    if (!ok) {
      return NextResponse.json({ error: "Invalid captcha" }, { status: 400 });
    }
  }

  // Trampa de tiempo: bot llena en <3s, humano tarda más.
  // Respuesta falsa de éxito para no avisar al bot.
  if (typeof startedAt === "number") {
    if (Date.now() - startedAt < MIN_FORM_TIME_MS) {
      return NextResponse.json({ success: true });
    }
  }

  // Rate limit por IP (después del honeypot para no gastar cupo en bots obvios)
  const ip = getClientIp(req);
  const rl = checkRateLimit(ip);
  if (rl.limited) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfter || 60) },
      }
    );
  }

  if (!isValidField(name, 100, true)) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }
  if (
    typeof email !== "string" ||
    email.trim().length > 254 ||
    !EMAIL_REGEX.test(email.trim())
  ) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (!isValidField(message, 5000, false)) {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const isSpanish = language !== "en";
  const subject = isSpanish
    ? "Nuevo mensaje desde el portfolio"
    : "New message from the portfolio";

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      react: (
        <>
          <h1>{isSpanish ? "Nuevo mensaje recibido" : "New message received"}</h1>
          <p>
            <strong>{isSpanish ? "Nombre" : "Name"}:</strong> {name.trim()}
          </p>
          <p>
            <strong>{isSpanish ? "Correo" : "Email"}:</strong> {email.trim()}
          </p>
          <p>
            <strong>{isSpanish ? "Mensaje" : "Message"}:</strong>
          </p>
          <p>{message}</p>
        </>
      ),
    });

    console.log("Respuesta Resend:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error Resend:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
