// ─── TRADUÇÕES — PT / EN / ES ────────────────────────────────────────────────
// Adicione novos textos aqui conforme precisar

export type Lang = "pt" | "en" | "es";

export const translations = {
  // ── NAV ──────────────────────────────────────────────────────────────────
  nav: {
    about:    { pt: "sobre",     en: "about",     es: "sobre"    },
    skills:   { pt: "skills",    en: "skills",    es: "skills"   },
    projects: { pt: "projetos",  en: "projects",  es: "proyectos"},
    posts:    { pt: "posts",     en: "posts",     es: "posts"    },
    contact:  { pt: "contato",   en: "contact",   es: "contacto" },
    email:    { pt: "email →",   en: "email →",   es: "email →"  },
  },

  // ── HERO ─────────────────────────────────────────────────────────────────
  hero: {
    available: {
      pt: "disponível para oportunidades",
      en: "open to opportunities",
      es: "disponible para oportunidades",
    },
    role: {
      pt: "DESENVOLVEDOR FULLSTACK EM FORMAÇÃO",
      en: "FULLSTACK DEVELOPER IN TRAINING",
      es: "DESARROLLADOR FULLSTACK EN FORMACIÓN",
    },
    description: {
      pt: "Atualmente aprendendo na prática, construindo projetos com React, Next.js e TypeScript. Aberto a Oportunidades, freelas e colaborações.",
      en: "Currently learning by doing, building projects with React, Next.js and TypeScript. Open to Opportunities, freelance and collaborations.",
      es: "Actualmente aprendiendo en la práctica, construyendo proyectos con React, Next.js y TypeScript. Abierto a Oportunidad, freelance y colaboraciones.",
    },
    cta:        { pt: "ver projetos →", en: "view projects →", es: "ver proyectos →" },
    scrollHint: { pt: "SCROLL",         en: "SCROLL",          es: "SCROLL"          },
  },

  // ── GITHUB CARD ───────────────────────────────────────────────────────────
  github: {
    repos:     { pt: "repos",       en: "repos",       es: "repos"      },
    commits:   { pt: "commits",     en: "commits",     es: "commits"    },
    followers: { pt: "seguidores",  en: "followers",   es: "seguidores" },
    loading:   { pt: "carregando…", en: "loading…",    es: "cargando…"  },
  },

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  about: {
    label:  { pt: "// 00 — SOBRE",  en: "// 00 — ABOUT",  es: "// 00 — SOBRE"  },
    title:  { pt: "Quem sou",       en: "Who am",         es: "Quién soy"       },
    italic: { pt: "eu?",            en: "I?",             es: "yo?"             },
    p1: {
      pt: "Sou um desenvolvedor estudante apaixonado por criar produtos reais na web. Comecei a programar por conta própria e não parei mais.",
      en: "I'm a student developer passionate about building real things on the web. I started coding on my own and never stopped.",
      es: "Soy un desarrollador estudiante apasionado por crear productos reales en la web. Empecé a programar por mi cuenta y no paré más.",
    },
    p2: {
      pt: "Atualmente focado em frontend com React e Next.js, mas explorando o ecossistema completo — desde banco de dados até deploy.",
      en: "Currently focused on frontend with React and Next.js, but exploring the full stack — from databases to deployment.",
      es: "Actualmente enfocado en frontend con React y Next.js, pero explorando el ecosistema completo — desde bases de datos hasta deploy.",
    },
    p3: {
      pt: "Acredito que a melhor forma de aprender é construindo. Cada projeto é um novo desafio real.",
      en: "I believe the best way to learn is by building. Every project is a new real challenge.",
      es: "Creo que la mejor forma de aprender es construyendo. Cada proyecto es un nuevo desafío real.",
    },
    facts: {
      status:  { pt: "Estudante de Dev",  en: "Dev Student",     es: "Estudiante Dev"   },
      looking: { pt: "Oportunidades & Freelas", en: "Opportunities & Freelance", es: "Oportunidad & Freelance" },
      focus:   { pt: "Frontend & Full Stack", en: "Frontend & Full Stack", es: "Frontend & Full Stack" },
    },
    factLabels: {
      status:  { pt: "Status",   en: "Status",  es: "Estado"  },
      city:    { pt: "Cidade",   en: "City",    es: "Ciudad"  },
      looking: { pt: "Buscando", en: "Seeking", es: "Buscando"},
      focus:   { pt: "Foco",     en: "Focus",   es: "Foco"    },
    },
  },

  // ── SKILLS ────────────────────────────────────────────────────────────────
  skills: {
    label:    { pt: "// 01 — SKILLS",     en: "// 01 — SKILLS",        es: "// 01 — SKILLS"        },
    title:    { pt: "Stack &",            en: "Stack &",               es: "Stack &"               },
    italic:   { pt: "Ferramentas",        en: "Tools",                 es: "Herramientas"          },
    subtitle: { pt: "Tecnologias que uso em projetos reais. Aprendendo mais todo dia.", en: "Technologies I use in real projects. Learning more every day.", es: "Tecnologías que uso en proyectos reales. Aprendiendo más cada día." },
    filters: {
      all:      { pt: "Todos",       en: "All",      es: "Todos"      },
      frontend: { pt: "Frontend",    en: "Frontend", es: "Frontend"   },
      backend:  { pt: "Backend",     en: "Backend",  es: "Backend"    },
      linguagens: { pt: "Linguagens",  en: "Languages", es: "Lenguajes"  },
      analisedados: { pt: "Análise de Dados",  en: "Data Analysis", es: "Análisis de Datos" },
      mobile: { pt: "Mobile", en: "Mobile", es: "Mobile"},
      embedded: {pt: "Embedded Integrado", en: "Embedded", es: "Embedded"},
      automacao: {pt: "Automação", en: "Automatization", es: "Automatización"},
      tools:    { pt: "Ferramentas", en: "Tools",    es: "Herramientas"},
      learning: { pt: "Aprendendo",  en: "Learning", es: "Aprendiendo"},
    },
    levels: {
      1: { pt: "iniciante",   en: "beginner",    es: "principiante" },
      2: { pt: "confortável", en: "comfortable", es: "cómodo"       },
      3: { pt: "confiante",   en: "confident",   es: "confiado"     },
    },
  },

  // ── PROJECTS ──────────────────────────────────────────────────────────────
  projects: {
    label:    { pt: "// 02 — PROJETOS", en: "// 02 — PROJECTS",   es: "// 02 — PROYECTOS"   },
    title:    { pt: "O que eu",         en: "What I",             es: "Lo que"              },
    italic:   { pt: "construí",         en: "built",              es: "construí"            },
    subtitle: { pt: "Projetos reais, commits reais, bugs reais.", en: "Real projects, real commits, real bugs.", es: "Proyectos reales, commits reales, bugs reales." },
    reposTitle: { pt: "— REPOS RECENTES DO GITHUB", en: "— RECENT GITHUB REPOS", es: "— REPOS RECIENTES DE GITHUB" },
    live:     { pt: "live ↗",   en: "live ↗",   es: "live ↗"  },
    github:   { pt: "GitHub →", en: "GitHub →", es: "GitHub →"},
  },

  // ── POSTS ─────────────────────────────────────────────────────────────────
  posts: {
    label:    { pt: "// 03 — POSTS",         en: "// 03 — POSTS",          es: "// 03 — POSTS"           },
    title:    { pt: "Anotações &",           en: "Notes &",                es: "Notas &"                 },
    italic:   { pt: "Aprendizados",          en: "Learnings",              es: "Aprendizajes"            },
    subtitle: { pt: "O que fui descobrindo pelo caminho.", en: "What I discovered along the way.", es: "Lo que fui descubriendo en el camino." },
    all:      { pt: "todos os posts →",      en: "all posts →",            es: "todos los posts →"       },
    empty:    { pt: "Nenhum post ainda",     en: "No posts yet",           es: "Aún no hay posts"        },
    emptySub: { pt: "Em breve você encontrará aqui aprendizados sobre dev.", en: "Soon you'll find dev learnings here.", es: "Pronto encontrarás aprendizajes de dev aquí." },
    follow:   { pt: "Seguir no DEV.to →",   en: "Follow on DEV.to →",    es: "Seguir en DEV.to →"      },
  },

  // ── CONTACT ───────────────────────────────────────────────────────────────
  contact: {
    label:    { pt: "// 04 — CONTATO",    en: "// 04 — CONTACT",     es: "// 04 — CONTACTO"    },
    title:    { pt: "Bora",              en: "Let's",               es: "¿Vamos a"            },
    italic:   { pt: "conversar?",        en: "talk?",               es: "conversar?"          },
    subtitle: { pt: "Aberto a oportunidades, freelas e colaborações de estudo.", en: "Open to opportunities, freelance and study collaborations.", es: "Abierto a oportunidades, freelance y colaboraciones de estudio." },
    name:     { pt: "NOME",    en: "NAME",    es: "NOMBRE"  },
    email:    { pt: "EMAIL",   en: "EMAIL",   es: "EMAIL"   },
    message:  { pt: "MENSAGEM",en: "MESSAGE", es: "MENSAJE" },
    namePh:   { pt: "Seu nome",         en: "Your name",       es: "Tu nombre"       },
    emailPh:  { pt: "seu@email.com",    en: "your@email.com",  es: "tu@email.com"    },
    msgPh:    { pt: "Oi, vi seu portfólio e…", en: "Hi, I saw your portfolio and…", es: "Hola, vi tu portafolio y…" },
    send:     { pt: "enviar mensagem →", en: "send message →",  es: "enviar mensaje →"},
    sending:  { pt: "enviando…",         en: "sending…",        es: "enviando…"       },
    success:  { pt: "✓ Mensagem enviada!", en: "✓ Message sent!", es: "✓ Mensaje enviado!" },
    error:    { pt: "✕ Erro ao enviar. Tente pelo email.", en: "✕ Error sending. Try email directly.", es: "✕ Error al enviar. Intenta por email." },
  },

  // ── CHAT ──────────────────────────────────────────────────────────────────
  chat: {
    title:       { pt: "Assistente",         en: "Assistant",          es: "Asistente"           },
    online:      { pt: "● online",           en: "● online",           es: "● online"            },
    greeting:    { pt: "Olá! Pergunte sobre o desenvolvedor 👋", en: "Hi! Ask me about the developer 👋", es: "¡Hola! Pregunta sobre el desarrollador 👋" },
    placeholder: { pt: "Faça uma pergunta…", en: "Ask a question…",   es: "Haz una pregunta…"   },
    suggestions: {
      pt: ["Qual é sua stack principal?", "Você está disponível para trabalhar?", "Me fala sobre seus projetos."],
      en: ["What is your main stack?",    "Are you available for work?",          "Tell me about your projects."],
      es: ["¿Cuál es tu stack principal?","¿Estás disponible para trabajar?",     "Cuéntame sobre tus proyectos."],
    },
  },

  // ── FOOTER ────────────────────────────────────────────────────────────────
  footer: {
    made: {
      pt: "feito com ☕ e muito",
      en: "made with ☕ and lots of",
      es: "hecho con ☕ y mucho",
    },
  },
} as const;

// Helper tipado
export function t(
  section: keyof typeof translations,
  key: string,
  lang: Lang
): string {
  const sec = translations[section] as Record<string, Record<Lang, string>>;
  return sec?.[key]?.[lang] ?? key;
}
