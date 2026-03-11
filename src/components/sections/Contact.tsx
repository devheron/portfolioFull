"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/motion";
import { PERSONAL } from "@/data/portfolio";
import { useLang } from "@/data/LangContext";
import { translations } from "@/data/i18n";

type Status = "idle"|"sending"|"success"|"error";

export default function Contact() {
  const { lang } = useLang();
  const c = translations.contact;
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async () => {
    if (!form.name||!form.email||!form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name:"", email:"", message:"" });
    } catch { setStatus("error"); }
  };

  const inp: React.CSSProperties = { width:"100%", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:8, padding:"0.75rem 1rem", color:"var(--text)", fontSize:"0.9rem", fontWeight:300, outline:"none", transition:"border-color 0.2s", fontFamily:"inherit" };
  const SOCIALS = [
    { icon:"🐙", label:"GitHub",          href:`https://github.com/${PERSONAL.github}`,        hc:"var(--accent)"  },
    { icon:"💼", label:"LinkedIn",        href:`https://linkedin.com/in/${PERSONAL.linkedin}`, hc:"var(--accent2)" },
    { icon:"✍️", label:"DEV.to",          href:`https://dev.to/${PERSONAL.devto}`,             hc:"var(--accent3)" },
    { icon:"✉️", label:PERSONAL.email,   href:`mailto:${PERSONAL.email}`,                     hc:"var(--accent)"  },
  ];

  return (
    <section id="contato" style={{ borderTop:"1px solid var(--border)", padding:"6rem 1.5rem" }}>
      <div style={{ maxWidth:1152, margin:"0 auto" }}>
        <motion.div {...fadeInUp}>
          <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", letterSpacing:"0.2em", color:"var(--accent)", textTransform:"uppercase", marginBottom:"0.5rem" }}>{c.label[lang]}</p>
          <h2 style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:700, color:"var(--text)", marginBottom:"0.75rem" }}>
            {c.title[lang]} <em style={{ fontStyle:"italic", fontWeight:400, color:"var(--accent)" }}>{c.italic[lang]}</em>
          </h2>
          <p style={{ color:"var(--dim)", fontWeight:300, marginBottom:"3rem" }}>{c.subtitle[lang]}</p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem" }} className="contact-grid">
          <motion.div {...fadeInLeft} style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
            {([
              { name:"name",  label:c.name[lang],    type:"text",  ph:c.namePh[lang]  },
              { name:"email", label:c.email[lang],   type:"email", ph:c.emailPh[lang] },
            ] as {name:"name"|"email"; label:string; type:string; ph:string}[]).map((f) => (
              <div key={f.name}>
                <label style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.62rem", color:"var(--dim)", letterSpacing:"0.12em", display:"block", marginBottom:6 }}>{f.label}</label>
                <input type={f.type} value={form[f.name]} onChange={(e) => setForm((p) => ({...p,[f.name]:e.target.value}))}
                  placeholder={f.ph} style={inp}
                  onFocus={(e) => (e.currentTarget.style.borderColor="var(--accent)")}
                  onBlur={(e)  => (e.currentTarget.style.borderColor="var(--border)")}
                />
              </div>
            ))}
            <div>
              <label style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.62rem", color:"var(--dim)", letterSpacing:"0.12em", display:"block", marginBottom:6 }}>{c.message[lang]}</label>
              <textarea rows={5} value={form.message} onChange={(e) => setForm((p) => ({...p,message:e.target.value}))}
                placeholder={c.msgPh[lang]} style={{...inp, resize:"none"}}
                onFocus={(e) => (e.currentTarget.style.borderColor="var(--accent)")}
                onBlur={(e)  => (e.currentTarget.style.borderColor="var(--border)")}
              />
            </div>
            <button onClick={handleSubmit} disabled={status==="sending"}
              style={{ width:"100%", padding:"0.85rem", background:"var(--accent)", color:"var(--bg)", border:"none", borderRadius:8, fontFamily:"var(--font-mono,monospace)", fontSize:"0.82rem", fontWeight:700, cursor:"pointer", opacity:status==="sending"?0.6:1 }}>
              {status==="sending" ? c.sending[lang] : c.send[lang]}
            </button>
            {status==="success" && <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.72rem", color:"var(--accent)", textAlign:"center" }}>{c.success[lang]}</p>}
            {status==="error"   && <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.72rem", color:"var(--accent3)", textAlign:"center" }}>{c.error[lang]}</p>}
          </motion.div>

          <motion.div {...fadeInRight} style={{ display:"flex", flexDirection:"column", gap:"0.75rem", justifyContent:"center" }}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                style={{ display:"flex", alignItems:"center", gap:14, padding:"1rem 1.25rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:12, textDecoration:"none", transition:"all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--muted)"; e.currentTarget.style.transform="translateX(4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="none"; }}
              >
                <div style={{ width:36, height:36, background:"var(--bg)", border:"1px solid var(--border)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0 }}>{s.icon}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.58rem", color:"var(--dim)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:2 }}>{s.label.includes("@")?"Email":s.label}</p>
                  <p style={{ fontSize:"0.82rem", fontWeight:500, color:"var(--text)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{s.label}</p>
                </div>
                <span style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.75rem", color:"var(--dim)" }}>→</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
