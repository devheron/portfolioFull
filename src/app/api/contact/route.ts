import { NextRequest, NextResponse } from "next/server";

// Rota para envio de email via EmailJS
// Chamada pelo componente Contact.tsx

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Chama a API do EmailJS
    const emailjsRes = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id:  process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id:     process.env.EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name:  name,
            from_email: email,
            message:    message,
            to_name:    "Seu Nome", // troque pelo seu nome
          },
        }),
      }
    );

    if (!emailjsRes.ok) {
      throw new Error("EmailJS request failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
