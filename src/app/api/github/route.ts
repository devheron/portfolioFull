import { NextRequest, NextResponse } from "next/server";

// Proxy server-side para a GitHub API
// Isso esconde o token do usuário final (não aparece no browser)

const BASE = "https://api.github.com";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get("endpoint");

  if (!endpoint) {
    return NextResponse.json({ error: "endpoint param required" }, { status: 400 });
  }

  const token = process.env.GITHUB_TOKEN; // sem NEXT_PUBLIC_ = só server

  try {
    const res = await fetch(`${BASE}${endpoint}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 3600 },
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch from GitHub" },
      { status: 500 }
    );
  }
}
