import { NextRequest, NextResponse } from "next/server";

interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

interface RequestBody {
  messages: GeminiMessage[];
  systemPrompt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { messages, systemPrompt } = body;

    const key = process.env.NEXT_PUBLIC_GEMINI_KEY ?? process.env.GEMINI_KEY;
    if (!key) {
      return NextResponse.json({ error: "Gemini API key não configurada" }, { status: 500 });
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: messages,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Gemini error:", res.status, err);
      return NextResponse.json({ error: `Gemini error ${res.status}` }, { status: res.status });
    }

    const data = await res.json();
    const text: string = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sem resposta.";
    return NextResponse.json({ text });

  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
