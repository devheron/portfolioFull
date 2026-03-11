import { Skill, Project } from "@/types";

// ─── EDITE ESTES DADOS COM OS SEUS ───────────────────────────────────────────

export const PERSONAL = {
  name: "Heron Felipe J. D.",
  role: "Desenvolvedor FullStack em formação",
  tagline: "Estudante de dev apaixonado por construir coisas reais na web.",
  description:
    "Atualmente aprendendo na prática, construindo projetos com React, Next.js e TypeScript. Aberto a estágios, freelas e colaborações.",
  location: "Paraná, Brasil",
  email: "devheron.contact@gmail.com",
  github: "devheron",
  linkedin: "heronfelipe",
  devto: "heronfelipe",
  available: true, // muda pra false se não estiver disponível
};

// ─── SKILLS ──────────────────────────────────────────────────────────────────

export const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML & CSS",   icon: "🎨", level: 3, category: "frontend" },
  { name: "JavaScript",   icon: "⚡", level: 3, category: "frontend" },
  { name: "TypeScript",   icon: "🔷", level: 2, category: "frontend" },
  { name: "React",        icon: "⚛️", level: 2, category: "frontend" },
  { name: "Next.js",      icon: "▲",  level: 2, category: "frontend" },
  { name: "Tailwind CSS", icon: "🌊", level: 2, category: "frontend" },

  // Backend
  { name: "Node.js",  icon: "🟢", level: 2, category: "backend" },
  { name: "Python",   icon: "🐍", level: 2, category: "backend" },
  { name: "REST API", icon: "🔗", level: 2, category: "backend" },
  { name: "SQL",      icon: "🗄️", level: 1, category: "backend" },

  // Tools
  { name: "Git & GitHub", icon: "🐙", level: 2, category: "tools" },
  { name: "VS Code",      icon: "💻", level: 3, category: "tools" },
  { name: "Figma",        icon: "🎭", level: 1, category: "tools" },
  { name: "Docker",       icon: "🐋", level: 1, category: "tools" },

  // Aprendendo
  { name: "PostgreSQL", icon: "🐘", level: 1, category: "learning" },
  { name: "AWS",        icon: "☁️", level: 1, category: "learning" },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    icon: "🌐",
    title: "Portfolio Pessoal",
    description:
      "Este portfólio! Construído com Next.js 14, Tailwind, GitHub API, DEV.to API e Chat AI com Gemini.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Gemini AI"],
    github: "https://github.com/devheron/meu-portfolio",
    live: "https://meu-portfolio.vercel.app",
    featured: true,
    language: "TypeScript",
  },
  {
    id: "task-manager",
    icon: "🌐",
    title: "Task Manager App",
    description:
      "Gerenciador de tarefas com drag & drop, categorias e armazenamento local. Primeiro projeto completo de front-end.",
    tags: ["JavaScript", "CSS Grid", "LocalStorage"],
    github: "https://github.com/devheron/task-manager",
    featured: true,
    language: "JavaScript",
  },
  {
    id: "weather-app",
    icon: "🌐",
    title: "Weather Dashboard",
    description:
      "Dashboard meteorológico consumindo a OpenWeather API, com gráficos de temperatura e previsão de 7 dias.",
    tags: ["React", "API REST", "Chart.js"],
    github: "https://github.com/devheron/weather-app",
    featured: false,
    language: "JavaScript",
  },
  {
    id: "quiz-cli",
    icon: "🌐",
    title: "CLI Quiz Game",
    description:
      "Jogo de quiz no terminal com sistema de pontuação, múltiplas categorias e ranking salvo em JSON.",
    tags: ["Python", "JSON", "CLI"],
    github: "https://github.com/devheron/quiz-cli",
    featured: false,
    language: "Python",
  },
];

// ─── CHAT AI — SYSTEM PROMPT ─────────────────────────────────────────────────
// Personalize com seus dados reais antes de publicar

export const CHAT_SYSTEM_PROMPT = `
Você é o assistente do portfólio de ${PERSONAL.name}.
Responda perguntas sobre o desenvolvedor de forma profissional e amigável.
Use markdown nas respostas quando útil.

SOBRE O DESENVOLVEDOR:
- Nome: ${PERSONAL.name}
- Role: ${PERSONAL.role}
- Localização: ${PERSONAL.location}
- Stack principal: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind
- Estudando atualmente: PostgreSQL, AWS, Docker avançado
- Disponível para: estágios e freelas de front-end
- GitHub: github.com/${PERSONAL.github}
- LinkedIn: linkedin.com/in/${PERSONAL.linkedin}
- Email: ${PERSONAL.email}

PROJETOS PRINCIPAIS:
- Portfolio Pessoal (Next.js + Gemini AI)
- Task Manager App (JavaScript puro)
- Weather Dashboard (React + API)

COMMANDMENTS:
1. Seja profissional, amigável e conciso
2. Responda diretamente e com clareza
3. Destaque experiências e projetos relevantes
4. Use tom confiante e positivo
5. Se a informação não estiver disponível, responda honestamente
`;
