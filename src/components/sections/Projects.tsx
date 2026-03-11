"use client";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/motion";
import { PROJECTS } from "@/data/portfolio";
import { useGitHub } from "@/hooks/useGitHub";
import { useLang } from "@/data/LangContext";
import { translations } from "@/data/i18n";
import { GitHubRepo } from "@/types";

function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  return (
    <motion.a {...stagger(index)} href={repo.html_url} target="_blank" rel="noopener noreferrer"
      style={{ display:"block", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:12, padding:"1.25rem", textDecoration:"none", transition:"all 0.2s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--muted)"; e.currentTarget.style.transform="translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="none"; }}
    >
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
        <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.8rem", fontWeight:600, color:"var(--accent)" }}>📁 {repo.name}</p>
        <div style={{ display:"flex", gap:8 }}>
          <span style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.6rem", color:"var(--dim)" }}>⭐ {repo.stargazers_count}</span>
          <span style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.6rem", color:"var(--dim)" }}>🍴 {repo.forks_count}</span>
        </div>
      </div>
      <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.68rem", color:"var(--dim)", lineHeight:1.5, marginBottom:10 }}>{repo.description || "—"}</p>
      {repo.language && (
        <span style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.58rem", color:"var(--accent2)", background:"rgba(91,138,255,.1)", border:"1px solid rgba(91,138,255,.2)", padding:"2px 8px", borderRadius:9999 }}>{repo.language}</span>
      )}
    </motion.a>
  );
}

export default function Projects() {
  const { repos, loading } = useGitHub();
  const { lang } = useLang();
  const p = translations.projects;

  return (
    <section id="projetos" style={{ borderTop:"1px solid var(--border)", padding:"6rem 1.5rem" }}>
      <div style={{ maxWidth:1152, margin:"0 auto" }}>
        <motion.div {...fadeInUp}>
          <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", letterSpacing:"0.2em", color:"var(--accent)", textTransform:"uppercase", marginBottom:"0.5rem" }}>{p.label[lang]}</p>
          <h2 style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:700, color:"var(--text)", marginBottom:"0.75rem" }}>
            {p.title[lang]} <em style={{ fontStyle:"italic", fontWeight:400, color:"var(--accent)" }}>{p.italic[lang]}</em>
          </h2>
          <p style={{ color:"var(--dim)", fontWeight:300, marginBottom:"3rem" }}>{p.subtitle[lang]}</p>
        </motion.div>

        {/* Featured */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.25rem", marginBottom:"4rem" }}>
          {PROJECTS.map((proj, i) => (
            <motion.div key={proj.title} {...stagger(i)}
              style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:16, padding:"1.5rem", position:"relative", overflow:"hidden", transition:"all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--muted)"; e.currentTarget.style.transform="translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="none"; }}
            >
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,var(--accent),var(--accent2))" }} />
              <div style={{ fontSize:"2rem", marginBottom:"0.75rem" }}>{proj.icon}</div>
              <h3 style={{ fontWeight:600, fontSize:"1rem", color:"var(--text)", marginBottom:"0.5rem" }}>{proj.title}</h3>
              <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.7rem", color:"var(--dim)", lineHeight:1.6, marginBottom:"1rem" }}>{proj.description}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:"1.25rem" }}>
                {proj.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.58rem", color:"var(--accent)", background:"rgba(127,255,178,.08)", border:"1px solid rgba(127,255,178,.15)", padding:"2px 8px", borderRadius:9999 }}>{tag}</span>
                ))}
              </div>
              <div style={{ display:"flex", gap:10 }}>
                {proj.live && <a href={proj.live} target="_blank" rel="noopener noreferrer" style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.7rem", color:"var(--accent)", textDecoration:"none" }}>{p.live[lang]}</a>}
                {proj.github && <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.7rem", color:"var(--dim)", textDecoration:"none" }}>{p.github[lang]}</a>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub repos */}
        <motion.div {...fadeInUp}>
          <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", letterSpacing:"0.15em", color:"var(--dim)", marginBottom:"1.5rem" }}>{p.reposTitle[lang]}</p>
          {loading ? (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:12 }}>
              {[...Array(6)].map((_,i) => <div key={i} style={{ height:120, background:"var(--surface)", borderRadius:12, animation:"shimmer 1.5s ease infinite" }} />)}
            </div>
          ) : (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:12 }}>
              {repos.map((repo, i) => <RepoCard key={repo.name} repo={repo} index={i} />)}
            </div>
          )}
        </motion.div>
      </div>
      <style>{`@keyframes shimmer{0%,100%{opacity:.6}50%{opacity:1}}`}</style>
    </section>
  );
}
