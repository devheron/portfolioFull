import { Skill, Project } from "@/types";

// ─── EDITE ESTES DADOS COM OS SEUS ───────────────────────────────────────────

export const PERSONAL = {
  name: "Heron Felipe J. D.",
  role: "Desenvolvedor FullStack em formação",
  tagline: "Estudante de dev apaixonado por construir coisas reais na web.",
  description:
    "Atualmente aprendendo na prática, construindo projetos com React, Next.js e TypeScript. Aberto a oportunidades, freelas e colaborações.",
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
  { name: "Sass",         icon: "💅", level: 1, category: "frontend" },
  { name: "Vue.js",       icon: "🖖", level: 1, category: "frontend" },
  { name: "Angular",      icon: "🅰️", level: 1, category: "frontend" },
  {name: "Bootstrap", icon: "🔧", level: 1, category: "frontend" },

  // Backend
  { name: "Node.js",  icon: "🟢", level: 2, category: "backend" },
  { name: "Python",   icon: "🐍", level: 2, category: "backend" },
  { name: "REST API", icon: "🔗", level: 2, category: "backend" },
  { name: "SQL",      icon: "🗄️", level: 1, category: "backend" },
  { name: "MongoDB",  icon: "🍃", level: 1, category: "backend" },
  { name: "MySQL",     icon: "🐬", level: 1, category: "backend" },
  { name: "Firebase", icon: "🔥", level: 1, category: "backend" },
  { name: "Supabase", icon: "🚀", level: 1, category: "backend" },
  {name: "SQLite", icon: "🗃️", level: 1, category: "backend" },
  {name: "Java", icon: "☕", level: 1, category: "backend" },
  {name: "C++", icon: "➕", level: 1, category: "backend" },
  {name: "C", icon: "📟", level: 1, category: "backend" },

  // Mobile
  {name: "Flutter", icon: "🦋", level: 1, category: "mobile" },
  // Embedded
  {name: "Arduino", icon: "🔌", level: 1, category: "embedded" },
  // Automation
  { name: "n8n", icon: "🌐", level: 1, category: "automacao" },

  // Analise e Ciencia de Dados
  { name: "Power BI", icon: "📊", level: 1, category: "analisedados" },
  { name: "Looker Studio", icon: "📈", level: 1, category: "analisedados" },
  { name: "Python Jupyter", icon: "📓", level: 1, category: "analisedados" },
  { name: "Python", icon: "🐍", level: 2, category: "analisedados"},
  { name: "ETL", icon: "🔄", level: 1, category: "analisedados" },
  {name: "Google Colab", icon: "☁️", level: 1, category: "analisedados" },
,
  // Tools / FrameWorks
  {name: "GitHub Copilot", icon: "🤖", level: 1, category: "tools" },
  { name: "Git & GitHub", icon: "🐙", level: 2, category: "tools" },
  { name: "VSCode",      icon: "💻", level: 3, category: "tools" },
  { name: "Figma",        icon: "🎭", level: 1, category: "tools" },
  { name: "Docker",       icon: "🐋", level: 1, category: "tools" },
  { name: "Linux",        icon: "🐧", level: 1, category: "tools" },
  { name: "Postman",      icon: "📬", level: 1, category: "tools" },
  { name: "Jest",         icon: "🃏", level: 1, category: "tools" },
  // webpack é framework
  { name: "Webpack",      icon: "📦", level: 1, category: "tools" },
  // vite é framework
  { name: "Vite",         icon: "⚡", level: 1, category: "tools" },
  // spring é framework
  { name: "Spring Boot",    icon: "🌱", level: 1, category: "tools" },
  {name: "Sublime Text", icon: "🖋️", level: 1, category: "tools" },
  {name: "IntelliJ IDEA", icon: "🧠", level: 1, category: "tools" },
  {name: "Eclipse", icon: "🌘", level: 1, category: "tools" },
  {name: "Apache NetBeans", icon: "🌗", level: 1, category: "tools" },
  {name: "Trello", icon: "📋", level: 1, category: "tools" },
  ,
  // Aprendendo
  { name: "PostgreSQL", icon: "🐘", level: 1, category: "learning" },
  { name: "AWS",        icon: "☁️", level: 1, category: "learning" },
  { name: "CI/CD", icon: "🔄", level: 1, category: "learning" },
  { name: "Testing", icon: "🧪", level: 1, category: "learning" },
  { name: "GraphQL", icon: "🔮", level: 1, category: "learning" },
  { name: "C#", icon: "🎮", level: 1, category: "learning" },
  {name: "Linguagem Lua", icon: "🌙", level: 1, category: "learning" },
  ,
  // Linguagens
  { name: "Português", icon: "🇧🇷", level: 3, category: "languages" },
  { name: "Inglês",    icon: "🇺🇸", level: 2, category: "languages" },
  { name: "Espanhol",   icon: "🇪🇸", level: 1, category: "languages" },
  
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    icon: "🧑‍💻",
    title: "Portfolio Pessoal",
    description:
      "Este portfólio foi construído com Next.js 14, Tailwind, GitHub API, DEV.to API, Tradutor para tres linguagens (PT, EN, ES) e Chat AI com Gemini.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Gemini AI"],
    github: "https://github.com/devheron/portofolioFull",
    live: "https://www.portfoliodevheron.xyz/",
    featured: true,
    language: "TypeScript",
  },
  {
    id: "nutri-track",
    icon: "🍖",
    title: "Nutri Track App",
    description:
      "Projeto de acompanhamento nutricional com JavaScript puro, CSS Grid e LocalStorage para salvar refeições e metas diárias.",
    tags: ["JavaScript", "CSS Grid", "LocalStorage"],
    github: "https://github.com/devheron/NutriTrack",
    live: "https://nutri-track-seven.vercel.app/",
    featured: true,
    language: "JavaScript",
  },
  {
    id: "weather-app",
    icon: "⛅",
    title: "Weather Forecast",
    description:
      "Dashboard meteorológico consumindo a Open-Meteo API, com gráficos de temperatura e previsão de 7 dias. 🌐",
    tags: ["NodeJS", "API", "HTML+CSS+JS"],
    github: "https://github.com/devheron/WeatherForecast",
    live: "https://weather-forecast-blush-gamma.vercel.app/",
    featured: false,
    language: "JavaScript",
  },
  {
    id: "authenticator-js",
    icon: "🔏",
    title: "Authenticator NodeJS",
    description:
      "Um projeto authenticador feito totalmente sem IA ou nenhuma outra biblioteca Auth pronta.",
    tags: ["JavaScript", "NodeJS", "Auth"],
    github: "https://github.com/devheron/AuthenticatorJS",
    featured: false,
    language: "JavaScript",
  },
];

// ─── CHAT AI — SYSTEM PROMPT ─────────────────────────────────────────────────

export const CHAT_SYSTEM_PROMPT = `
Você é o assistente do portfólio de ${PERSONAL.name}.
Responda perguntas sobre o desenvolvedor de forma profissional e amigável.

SOBRE O DESENVOLVEDOR:
- Nome: ${PERSONAL.name}
- Role: ${PERSONAL.role}
- Localização: ${PERSONAL.location}
- Stack principal: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind
- Estudando atualmente: PostgreSQL, AWS, Docker avançado
- Disponível para: oportunidades e freelas de desenvolvedor
- GitHub: github.com/${PERSONAL.github}
- LinkedIn: linkedin.com/in/${PERSONAL.linkedin}
- Email: ${PERSONAL.email}

PROJETOS PRINCIPAIS:
- Portfolio Pessoal (Next.js + Gemini AI)
- Nutri Track App (JavaScript)
- Weather Forecast (HTML/CSS/JS + NodeJS + API)

COMMANDMENTS:
1. Seja profissional, amigável e conciso
2. Responda diretamente e com clareza
3. Destaque experiências e projetos relevantes
4. Use tom confiante e positivo
5. Se a informação não estiver disponível, responda honestamente
`;
