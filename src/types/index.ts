// ─── GitHub ───────────────────────────────────────────────────────────────────

export interface GitHubProfile {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

// ─── DEV.to ───────────────────────────────────────────────────────────────────

export interface DevToPost {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
  date: string;
  reactions: number;
  cover: string | null;
  reading_time_minutes: number;
}

// ─── Portfolio Data ───────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  icon: string;
  level: 1 | 2 | 3; // 1=learning, 2=comfortable, 3=confident
  category: "frontend" | "backend" | "tools" | "learning";
}

export interface Project {
  id: string;
  title: string;
  icon?:string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured: boolean;
  language: string;
}

export interface ChatMessage {
  role: "user" | "model";
  content: string;
}
