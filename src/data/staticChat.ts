import { Lang } from "./i18n";

// ─── RESPOSTAS ESTÁTICAS DO CHAT ──────────────────────────────────────────────
// Gemini está comentado por enquanto. Estas respostas cobrem as perguntas
// mais comuns de recrutadores. Para ativar o AI, veja o README.

interface StaticResponse {
  keywords: string[];
  answer: Record<Lang, string>;
}

export const STATIC_RESPONSES: StaticResponse[] = [
  {
    keywords: ["stack", "tecnologia", "tecnologias", "technology", "technologies", "tecnología"],
    answer: {
      pt: "Minha stack principal é **Next.js**, **React**, **TypeScript** e **Tailwind CSS** no frontend. No backend uso **Node.js** e **Python**, e para banco de dados estou aprendendo **PostgreSQL** e **SQL**. Controle de versão com **Git & GitHub**.",
      en: "My main stack is **Next.js**, **React**, **TypeScript** and **Tailwind CSS** on the frontend. On the backend I use **Node.js** and **Python**, and for databases I'm learning **PostgreSQL** and **SQL**. Version control with **Git & GitHub**.",
      es: "Mi stack principal es **Next.js**, **React**, **TypeScript** y **Tailwind CSS** en el frontend. En el backend uso **Node.js** y **Python**, y para bases de datos estoy aprendiendo **PostgreSQL** y **SQL**. Control de versiones con **Git & GitHub**.",
    },
  },
  {
    keywords: ["disponível", "available", "disponible", "trabalhar", "work", "trabajar", "hire", "contratar", "oportunidade", "opportunity", "oportunidad"],
    answer: {
      pt: "Sim, estou **disponível**! Estou aberto a **estágios**, **freelas** e **colaborações** em projetos de frontend ou full stack. Pode me contatar pelo email ou LinkedIn.",
      en: "Yes, I'm **available**! I'm open to **internships**, **freelance** and **collaborations** on frontend or full stack projects. Feel free to reach out via email or LinkedIn.",
      es: "¡Sí, estoy **disponible**! Estoy abierto a **pasantías**, **freelance** y **colaboraciones** en proyectos de frontend o full stack. Puedes contactarme por email o LinkedIn.",
    },
  },
  {
    keywords: ["projeto", "projects", "proyecto", "portfólio", "portfolio", "construiu", "built", "construyó"],
    answer: {
      pt: "Meus projetos principais:\n\n**Portfolio Pessoal** — este site! Next.js + Tailwind + GitHub API + DEV.to API\n\n**Task Manager App** — gerenciador de tarefas com JavaScript puro e drag & drop\n\n**Weather Dashboard** — dashboard meteorológico com React e OpenWeather API\n\nTodos estão no meu GitHub!",
      en: "My main projects:\n\n**Personal Portfolio** — this site! Next.js + Tailwind + GitHub API + DEV.to API\n\n**Task Manager App** — task manager with vanilla JavaScript and drag & drop\n\n**Weather Dashboard** — weather dashboard with React and OpenWeather API\n\nAll of them are on my GitHub!",
      es: "Mis proyectos principales:\n\n**Portfolio Personal** — ¡este sitio! Next.js + Tailwind + GitHub API + DEV.to API\n\n**Task Manager App** — gestor de tareas con JavaScript puro y drag & drop\n\n**Weather Dashboard** — dashboard meteorológico con React y OpenWeather API\n\n¡Todos están en mi GitHub!",
    },
  },
  {
    keywords: ["experiência", "experience", "experiencia", "tempo", "time", "tiempo", "anos", "years", "años"],
    answer: {
      pt: "Sou um **desenvolvedor em formação**, aprendendo programação de forma autodidata e na prática. Cada projeto que construo é uma oportunidade de aprender algo novo — de lógica de programação até deploy em produção.",
      en: "I'm a **developer in training**, learning programming self-taught and hands-on. Every project I build is an opportunity to learn something new — from programming logic to production deployment.",
      es: "Soy un **desarrollador en formación**, aprendiendo programación de forma autodidacta y en la práctica. Cada proyecto que construyo es una oportunidad para aprender algo nuevo — desde lógica de programación hasta deploy en producción.",
    },
  },
  {
    keywords: ["contato", "contact", "contacto", "email", "linkedin", "falar", "talk", "hablar"],
    answer: {
      pt: "Você pode me contatar por:\n\n✉️ **Email** — disponível na seção de contato\n💼 **LinkedIn** — link na seção sobre\n🐙 **GitHub** — veja meus repositórios\n\nRespondo rápido! 😄",
      en: "You can reach me at:\n\n✉️ **Email** — available in the contact section\n💼 **LinkedIn** — link in the about section\n🐙 **GitHub** — check my repositories\n\nI respond quickly! 😄",
      es: "Puedes contactarme en:\n\n✉️ **Email** — disponible en la sección de contacto\n💼 **LinkedIn** — link en la sección sobre\n🐙 **GitHub** — mira mis repositorios\n\n¡Respondo rápido! 😄",
    },
  },
  {
    keywords: ["aprendendo", "learning", "aprendiendo", "estudando", "studying", "estudiando", "curso", "course"],
    answer: {
      pt: "Atualmente estou aprofundando em **TypeScript**, **PostgreSQL** e conceitos de **arquitetura de software**. Também explorando **Docker** e serviços de cloud como **AWS**. Aprender fazendo é minha filosofia!",
      en: "I'm currently going deeper into **TypeScript**, **PostgreSQL** and **software architecture** concepts. Also exploring **Docker** and cloud services like **AWS**. Learning by doing is my philosophy!",
      es: "Actualmente profundizando en **TypeScript**, **PostgreSQL** y conceptos de **arquitectura de software**. También explorando **Docker** y servicios cloud como **AWS**. ¡Aprender haciendo es mi filosofía!",
    },
  },
];

// Fallback quando nenhuma keyword bate
export const FALLBACK: Record<Lang, string> = {
  pt: "Hmm, não tenho uma resposta específica para isso ainda! 😅 Mas pode entrar em contato diretamente pelo email ou LinkedIn — responderei pessoalmente.",
  en: "Hmm, I don't have a specific answer for that yet! 😅 But feel free to reach out directly via email or LinkedIn — I'll reply personally.",
  es: "¡Hmm, no tengo una respuesta específica para eso todavía! 😅 Pero puedes contactarme directamente por email o LinkedIn — responderé personalmente.",
};

// Mensagem de boas vindas ao abrir
export const WELCOME: Record<Lang, string> = {
  pt: "Olá! 👋 Sou o assistente estático deste portfólio. Pergunte sobre skills, projetos, disponibilidade...\n\n_(Chat AI com Gemini será ativado em breve!)_",
  en: "Hi! 👋 I'm this portfolio's static assistant. Ask about skills, projects, availability...\n\n_(Gemini AI Chat coming soon!)_",
  es: "¡Hola! 👋 Soy el asistente estático de este portafolio. Pregunta sobre skills, proyectos, disponibilidad...\n\n_(Chat AI con Gemini próximamente!)_",
};

export function getStaticReply(input: string, lang: Lang): string {
  const lower = input.toLowerCase();
  for (const item of STATIC_RESPONSES) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.answer[lang];
    }
  }
  return FALLBACK[lang];
}
