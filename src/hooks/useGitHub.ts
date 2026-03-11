"use client";

import { useState, useEffect } from "react";
import { GitHubProfile, GitHubRepo } from "@/types";
import { getGitHubProfile, getGitHubRepos, getRecentCommits } from "@/lib/github";

interface UseGitHubReturn {
  profile: GitHubProfile | null;
  repos: GitHubRepo[];
  recentCommits: number;
  loading: boolean;
  error: string | null;
}

export function useGitHub(): UseGitHubReturn {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [recentCommits, setRecentCommits] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
    if (!username) {
      setError("NEXT_PUBLIC_GITHUB_USERNAME não definido no .env.local");
      setLoading(false);
      return;
    }

    Promise.all([
      getGitHubProfile(username),
      getGitHubRepos(username),
      getRecentCommits(username),
    ])
      .then(([prof, rps, commits]) => {
        setProfile(prof);
        setRepos(rps);
        setRecentCommits(commits);
      })
      .catch((err) => {
        setError(err.message);
        console.error("GitHub hook error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { profile, repos, recentCommits, loading, error };
}
