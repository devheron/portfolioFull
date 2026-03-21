"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/motion";
import { SKILLS } from "@/data/portfolio";
import { Skill } from "@/types";
import { useLang } from "@/data/LangContext";
import { translations } from "@/data/i18n";

function SkillCard({ skill, index, lang }: { skill: Skill; index: number; lang: "pt"|"en"|"es" }) {
  const levels = translations.skills.levels;
  const LEVEL_COLOR: Record<number, string> = { 1:"var(--accent3)", 2:"var(--accent2)", 3:"var(--accent)" };
  return (
    <motion.div {...stagger(index)}
      style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:12, padding:"1rem", transition:"all 0.2s", cursor:"default" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--muted)"; e.currentTarget.style.transform="translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="none"; }}
    >
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
        <span style={{ fontSize:"1.4rem" }}>{skill.icon}</span>
        <span style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.58rem", color:LEVEL_COLOR[skill.level] }}>{levels[skill.level][lang]}</span>
      </div>
      <p style={{ fontWeight:500, fontSize:"0.85rem", color:"var(--text)", marginBottom:10 }}>{skill.name}</p>
      <div style={{ display:"flex", gap:4 }}>
        {[1,2,3].map((n) => (
          <div key={n} style={{ height:3, flex:1, borderRadius:2, background: n<=skill.level ? "linear-gradient(90deg,var(--accent),var(--accent2))" : "var(--border)" }} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const s = translations.skills;
  const [active, setActive] = useState("all");
  const CATS = [
    { id:"all",      label: s.filters.all[lang]      },
    { id:"frontend", label: s.filters.frontend[lang] },
    { id:"backend",  label: s.filters.backend[lang]  },
    { id:"tools",    label: s.filters.tools[lang]    },
    { id:"analisedados", label: s.filters.analisedados[lang] },
    { id:"mobile", label: s.filters.mobile[lang] },
    { id:"automacao", label: s.filters.automacao[lang] },
    { id:"embedded", label: s.filters.embedded[lang] },
    { id:"learning", label: s.filters.learning[lang] },
  ];
  const filtered = active === "all" ? SKILLS : SKILLS.filter((x) => x.category === active);

  return (
    <section id="skills" style={{ borderTop:"1px solid var(--border)", padding:"6rem 1.5rem" }}>
      <div style={{ maxWidth:1152, margin:"0 auto" }}>
        <motion.div {...fadeInUp}>
          <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", letterSpacing:"0.2em", color:"var(--accent)", textTransform:"uppercase", marginBottom:"0.5rem" }}>{s.label[lang]}</p>
          <h2 style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:700, color:"var(--text)", marginBottom:"0.75rem" }}>
            {s.title[lang]} <em style={{ fontStyle:"italic", fontWeight:400, color:"var(--accent)" }}>{s.italic[lang]}</em>
          </h2>
          <p style={{ color:"var(--dim)", fontWeight:300, marginBottom:"2rem" }}>{s.subtitle[lang]}</p>
        </motion.div>
        <motion.div {...fadeInUp} style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:"2rem" }}>
          {CATS.map((cat) => (
            <button key={cat.id} onClick={() => setActive(cat.id)} style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.68rem", padding:"0.4rem 1rem", borderRadius:9999, cursor:"pointer", transition:"all 0.2s", border:"1px solid", background: active===cat.id ? "var(--accent)" : "transparent", borderColor: active===cat.id ? "var(--accent)" : "var(--border)", color: active===cat.id ? "var(--bg)" : "var(--dim)", fontWeight: active===cat.id ? 700 : 400 }}>
              {cat.label}
            </button>
          ))}
        </motion.div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))", gap:12 }}>
          {filtered.map((skill, i) => <SkillCard key={skill.name} skill={skill} index={i} lang={lang} />)}
        </div>
      </div>
    </section>
  );
}
