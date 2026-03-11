"use client";
import { useLang } from "@/data/LangContext";
import { translations } from "@/data/i18n";
import { PERSONAL } from "@/data/portfolio";

export default function Footer() {
  const { lang } = useLang();
  const f = translations.footer;
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop:"1px solid var(--border)", padding:"2rem 1.5rem" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
        <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", color:"var(--dim)" }}>
          {f.made[lang]} <span style={{ color:"var(--accent)" }}>{"</>"}</span> — {PERSONAL.name} © {year}
        </p>
        <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", color:"var(--muted)" }}>
          Next.js · TypeScript · Tailwind
        </p>
      </div>
    </footer>
  );
}
