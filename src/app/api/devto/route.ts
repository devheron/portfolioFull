import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "username required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${username}&per_page=10`,
      {
        headers: {
          "Accept": "application/vnd.forem.api-v1+json",
          "User-Agent": "portfolio-app",
        },
        next: { revalidate: 1800 }, // cache 30min — funciona aqui no server
      }
    );

    if (!res.ok) {
      console.error(`DEV.to API error: ${res.status}`);
      return NextResponse.json({ error: `DEV.to error ${res.status}` }, { status: res.status });
    }

    const posts = await res.json();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("DEV.to route error:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}