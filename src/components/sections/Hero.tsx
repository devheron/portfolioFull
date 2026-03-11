"use client";
import { motion } from "framer-motion";
import { heroEntry } from "@/lib/motion";
import { useGitHub } from "@/hooks/useGitHub";
import { PERSONAL } from "@/data/portfolio";
import { useLang } from "@/data/LangContext";
import { translations } from "@/data/i18n";

export default function Hero() {
  const { profile, recentCommits, loading } = useGitHub();
  const { lang } = useLang();
  const h = translations.hero;
  const g = translations.github;

  return (
    <section style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", paddingTop:80 }}>
      <div style={{ position:"absolute", top:"20%", right:"20%", width:400, height:400, background:"radial-gradient(circle,rgba(127,255,178,.06) 0%,transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"20%", left:"15%", width:320, height:320, background:"radial-gradient(circle,rgba(91,138,255,.06) 0%,transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 1.5rem", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"center" }} className="hero-grid">
        <div>
          {PERSONAL.available && (
            <motion.div {...heroEntry(0)} style={{ marginBottom:"1.5rem" }}>
              <span style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"var(--font-mono,monospace)", fontSize:"0.7rem", letterSpacing:"0.08em", color:"var(--accent)", background:"rgba(127,255,178,.08)", border:"1px solid rgba(127,255,178,.2)", padding:"0.35rem 0.9rem", borderRadius:9999 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", backgroundColor:"var(--accent)", animation:"pulse 2s infinite" }} />
                {h.available[lang]}
              </span>
            </motion.div>
          )}

          <motion.h1 {...heroEntry(0.1)} style={{ fontSize:"clamp(2.8rem,7vw,5.5rem)", fontWeight:700, lineHeight:1.05, letterSpacing:"-0.025em", marginBottom:"0.5rem", color:"var(--text)" }}>
            {PERSONAL.name.split(" ")[0]}{" "}
            <em style={{ fontStyle:"italic", fontWeight:400, color:"var(--accent)" }}>
              {PERSONAL.name.split(" ").slice(1).join(" ")}
            </em>
          </motion.h1>

          <motion.p {...heroEntry(0.2)} style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.78rem", color:"var(--dim)", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:"1.5rem" }}>
            // {h.role[lang]}
          </motion.p>

          <motion.p {...heroEntry(0.3)} style={{ color:"var(--dim)", fontSize:"1.05rem", fontWeight:300, lineHeight:1.7, marginBottom:"2rem", maxWidth:440 }}>
            {h.description[lang]}
          </motion.p>

          <motion.div {...heroEntry(0.4)} style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap" }}>
            <a href="#projetos" style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"0.75rem 1.5rem", borderRadius:8, backgroundColor:"var(--accent)", color:"var(--bg)", fontFamily:"var(--font-mono,monospace)", fontSize:"0.8rem", fontWeight:700, textDecoration:"none", transition:"all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity="0.9"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="none"; }}
            >{h.cta[lang]}</a>
            <a href={`https://github.com/${PERSONAL.github}`} target="_blank" rel="noopener noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"0.75rem 1.5rem", borderRadius:8, border:"1px solid var(--border)", color:"var(--dim)", fontFamily:"var(--font-mono,monospace)", fontSize:"0.8rem", textDecoration:"none", transition:"all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--muted)"; e.currentTarget.style.color="var(--text)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--dim)"; }}
            >GitHub ↗</a>
          </motion.div>
        </div>

        <motion.div {...heroEntry(0.3)} className="hero-card-hide">
          <div style={{ position:"relative", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:16, padding:"1.5rem", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,var(--accent),var(--accent2))" }} />
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:"1.25rem" }}>
              <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,var(--accent),var(--accent2))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem" }}>🐙</div>
              <div>
                <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.82rem", color:"var(--text)", fontWeight:600 }}>
                  {loading ? g.loading[lang] : profile?.login || PERSONAL.github}
                </p>
                <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", color:"var(--dim)" }}>@github</p>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:"1rem" }}>
              {([
                { label: g.repos[lang],     value: loading ? "—" : profile?.public_repos ?? "—" },
                { label: g.commits[lang],   value: loading ? "—" : recentCommits || "—"           },
                { label: g.followers[lang], value: loading ? "—" : profile?.followers ?? "—"      },
              ] as {label:string;value:string|number}[]).map((stat) => (
                <div key={stat.label} style={{ background:"var(--bg)", borderRadius:8, padding:"10px 8px", textAlign:"center" }}>
                  <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"1.2rem", fontWeight:700, color:"var(--accent)" }}>{String(stat.value)}</p>
                  <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.6rem", color:"var(--dim)", marginTop:2 }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop:"1px solid var(--border)", paddingTop:"0.75rem", fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", color:"var(--dim)", textAlign:"center" }}>
              📍 {PERSONAL.location}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }}
        style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
        <span style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.6rem", color:"var(--muted)", letterSpacing:"0.2em" }}>{h.scrollHint[lang]}</span>
        <motion.div animate={{ y:[0,8,0] }} transition={{ repeat:Infinity, duration:1.5 }}
          style={{ width:1, height:32, background:"linear-gradient(to bottom,var(--muted),transparent)" }} />
      </motion.div>

      <style>{`
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
        @media(max-width:768px){.hero-grid{grid-template-columns:1fr!important;gap:2rem!important}.hero-card-hide{display:none!important}}
      `}</style>
    </section>
  );
}
