import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: "Nuevo mensaje desde el portfolio",
      react: (
        <>
          <h1>Nuevo mensaje recibido</h1>
          <p><strong>Nombre:</strong> {name}</p>
          <p><strong>Correo:</strong> {email}</p>
          <p><strong>Mensaje:</strong></p>
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