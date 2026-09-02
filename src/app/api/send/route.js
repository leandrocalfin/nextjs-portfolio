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

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message, language, website } = body;

  // Honeypot: field name "website" must be empty. Bots fill it, humans ignore it.
  if (website) {
    return NextResponse.json({ success: true });
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
