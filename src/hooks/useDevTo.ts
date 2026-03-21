"use client";

import { useState, useEffect } from "react";
import { DevToPost } from "@/types";

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

interface UseDevToReturn {
  posts: DevToPost[];
  loading: boolean;
  error: string | null;
}

export function useDevTo(): UseDevToReturn {
  const [posts, setPosts]   = useState<DevToPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState<string | null>(null);

  useEffect(() => {
    const username = process.env.NEXT_PUBLIC_DEVTO_USERNAME;

    if (!username) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
      return;
    }

    // Chama nossa API route server-side — sem CORS, com cache
    fetch(`/api/devto?username=${username}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`DEV.to fetch failed: ${res.status}`);
        return res.json() as Promise<DevToApiPost[]>;
      })
      .then((data) => {
        const mapped: DevToPost[] = data.map((p) => ({
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
        setPosts(mapped);
      })
      .catch((err) => {
        console.error("useDevTo error:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}