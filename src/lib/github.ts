import { GitHubProfile, GitHubRepo } from "@/types";

const BASE = "https://api.github.com";

function getHeaders() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  return {
    Accept: "application/vnd.github.v3+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

// ─── Perfil ───────────────────────────────────────────────────────────────────

export async function getGitHubProfile(
  username: string
): Promise<GitHubProfile> {
  const res = await fetch(`${BASE}/users/${username}`, {
    headers: getHeaders(),
    next: { revalidate: 3600 }, // cache 1h (Next.js)
  });
  if (!res.ok) throw new Error(`GitHub profile fetch failed: ${res.status}`);
  return res.json();
}

// ─── Repos ────────────────────────────────────────────────────────────────────

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${BASE}/users/${username}/repos?sort=updated&per_page=20&type=public`,
    {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) throw new Error(`GitHub repos fetch failed: ${res.status}`);
  const repos: GitHubRepo[] = await res.json();

  // Filtra forks e ordena por stars
  return repos
    .filter((r) => !r.name.includes("fork"))
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);
}

// ─── Commits recentes (para mostrar atividade) ────────────────────────────────

export async function getRecentCommits(username: string): Promise<number> {
  try {
    const res = await fetch(
      `${BASE}/users/${username}/events?per_page=100`,
      {
        headers: getHeaders(),
        next: { revalidate: 1800 },
      }
    );
    if (!res.ok) return 0;
    const events = await res.json();
    // Conta apenas PushEvents (commits)
    return events.filter((e: any) => e.type === "PushEvent").length;
  } catch {
    return 0;
  }
}
