"use client";

import { useState, useEffect } from "react";
import { DevToPost } from "@/types";
import { getDevToPosts } from "@/lib/devto";

interface UseDevToReturn {
  posts: DevToPost[];
  loading: boolean;
  error: string | null;
}

export function useDevTo(): UseDevToReturn {
  const [posts, setPosts] = useState<DevToPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const username = process.env.NEXT_PUBLIC_DEVTO_USERNAME;
    if (!username) {
      // Sem username, apenas não exibe posts (sem erro crítico)
      setLoading(false);
      return;
    }

    getDevToPosts(username)
      .then(setPosts)
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}
