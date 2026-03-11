# 🚀 meu-portfolio

## ⚡ Como instalar

```bash
# 1. Copie os arquivos da pasta src/ para DENTRO do seu src/ existente
# 2. Configure o .env.local
cp .env.local.example .env.local
# Edite .env.local com suas chaves reais

# 3. Rode
npm run dev
```

## 📁 Estrutura — coloque dentro do seu /src/

```
src/
├── app/
│   ├── globals.css       ← substitui o existente
│   ├── layout.tsx        ← substitui o existente
│   ├── page.tsx          ← substitui o existente
│   └── api/
│       ├── github/route.ts
│       └── contact/route.ts
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Posts.tsx
│   │   └── Contact.tsx
│   ├── ThemeProvider.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ChatWidget.tsx
├── data/
│   └── portfolio.ts
├── hooks/
│   ├── useGitHub.ts
│   └── useDevTo.ts
├── lib/
│   ├── github.ts
│   ├── devto.ts
│   └── motion.ts
└── types/
    └── index.ts
```

## 🔑 Onde gerar cada chave

| Variável | Link |
|---|---|
| `GITHUB_TOKEN` | github.com/settings/tokens → New token → scope: `public_repo` |
| `EMAILJS_*` | emailjs.com → Email Services + Templates + Account |
| `GEMINI_KEY` | aistudio.google.com → Get API Key (gratuito) |

## 🎨 Personalizar

Edite **`src/data/portfolio.ts`** — é o único arquivo com seus dados pessoais.

## 🚀 Deploy Vercel

1. vercel.com → New Project → importar do GitHub
2. Em Environment Variables → adicione todas as vars do `.env.local`
3. Deploy — redeploy automático a cada push no `main`
