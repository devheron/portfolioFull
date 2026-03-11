"use client";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/motion";
import { PERSONAL } from "@/data/portfolio";
import { useLang } from "@/data/LangContext";
import { translations } from "@/data/i18n";

export default function About() {
  const { lang } = useLang();
  const a = translations.about;
  const FACTS = [
    { icon:"🎓", label: a.factLabels.status[lang],  value: a.facts.status[lang]  },
    { icon:"📍", label: a.factLabels.city[lang],    value: PERSONAL.location      },
    { icon:"💼", label: a.factLabels.looking[lang], value: a.facts.looking[lang] },
    { icon:"⚡", label: a.factLabels.focus[lang],   value: a.facts.focus[lang]   },
  ];

  return (
    <section id="sobre" style={{ borderTop:"1px solid var(--border)", padding:"6rem 1.5rem" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"center" }} className="about-grid">
        <motion.div {...fadeInLeft}>
          <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", letterSpacing:"0.2em", color:"var(--accent)", textTransform:"uppercase", marginBottom:"0.5rem" }}>{a.label[lang]}</p>
          <h2 style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:700, lineHeight:1.1, marginBottom:"1.5rem", color:"var(--text)" }}>
            {a.title[lang]} <em style={{ fontStyle:"italic", fontWeight:400, color:"var(--accent)" }}>{a.italic[lang]}</em>
          </h2>
          <p style={{ color:"var(--dim)", fontWeight:300, lineHeight:1.75, marginBottom:"1rem" }}>{a.p1[lang]}</p>
          <p style={{ color:"var(--dim)", fontWeight:300, lineHeight:1.75, marginBottom:"1rem" }}>
            {lang === "pt" ? "Atualmente focado em " : lang === "en" ? "Currently focused on " : "Actualmente enfocado en "}
            <strong style={{ color:"var(--text)", fontWeight:500 }}>
              {lang === "pt" ? "frontend com React e Next.js" : lang === "en" ? "frontend with React & Next.js" : "frontend con React y Next.js"}
            </strong>
            {lang === "pt" ? ", mas explorando o ecossistema completo." : lang === "en" ? ", but exploring the full stack." : ", pero explorando el ecosistema completo."}
          </p>
          <p style={{ color:"var(--dim)", fontWeight:300, lineHeight:1.75, marginBottom:"2rem" }}>{a.p3[lang]}</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem" }}>
            {[
              { label:"🐙 GitHub",   href:`https://github.com/${PERSONAL.github}`,        hc:"var(--accent)"  },
              { label:"💼 LinkedIn", href:`https://linkedin.com/in/${PERSONAL.linkedin}`, hc:"var(--accent2)" },
              { label:"✉️ Email",    href:`mailto:${PERSONAL.email}`,                     hc:"var(--accent3)" },
            ].map((l) => (
              <a key={l.label} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.72rem", padding:"0.5rem 1rem", border:"1px solid var(--border)", color:"var(--dim)", borderRadius:6, textDecoration:"none", transition:"all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color=l.hc; e.currentTarget.style.borderColor=l.hc; }}
                onMouseLeave={(e) => { e.currentTarget.style.color="var(--dim)"; e.currentTarget.style.borderColor="var(--border)"; }}
              >{l.label}</a>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeInRight} style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
          {FACTS.map((f, i) => (
            <motion.div key={f.label} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.4 }}
              style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:12, padding:"1.25rem", transition:"border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor="var(--muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor="var(--border)")}
            >
              <span style={{ fontSize:"1.5rem", display:"block", marginBottom:8 }}>{f.icon}</span>
              <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.6rem", color:"var(--dim)", marginBottom:4, textTransform:"uppercase", letterSpacing:"0.1em" }}>{f.label}</p>
              <p style={{ fontWeight:500, fontSize:"0.9rem", color:"var(--text)" }}>{f.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
