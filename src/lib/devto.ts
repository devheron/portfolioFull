import { DevToPost } from "@/types";

const DEVTO = "https://dev.to/api";

interface DevToApiPost {
  id: number;
  title: string;
  description: string;
  url: string;
  tag_list: string[];
  published_at: string;
  positive_reactions_count: number;
  cover_image: string | null;
  reading_time_minutes: number;
}

export async function getDevToPosts(username: string): Promise<DevToPost[]> {
  const res = await fetch(
    `${DEVTO}/articles?username=${username}&per_page=10`,
    { next: { revalidate: 1800 } }
  );
  if (!res.ok) {
    console.warn(`DEV.to fetch failed: ${res.status}`);
    return [];
  }
  const posts: DevToApiPost[] = await res.json();
  return posts.map((p): DevToPost => ({
    id:                   p.id,
    title:                p.title,
    description:          p.description || "",
    url:                  p.url,
    tags:                 p.tag_list || [],
    date:                 p.published_at,
    reactions:            p.positive_reactions_count,
    cover:                p.cover_image || null,
    reading_time_minutes: p.reading_time_minutes || 1,
  }));
}

export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("pt-BR", { month: "short", year: "numeric" })
    .toUpperCase()
    .replace(".", "");
}
