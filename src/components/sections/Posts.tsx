"use client";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/motion";
import { useDevTo } from "@/hooks/useDevTo";
import { formatPostDate } from "@/lib/devto";
import { PERSONAL } from "@/data/portfolio";
import { DevToPost } from "@/types";
import { useLang } from "@/data/LangContext";
import { translations } from "@/data/i18n";

function PostRow({ post, index }: { post: DevToPost; index: number }) {
  return (
    <motion.a {...stagger(index)} href={post.url} target="_blank" rel="noopener noreferrer"
      style={{ display:"grid", gridTemplateColumns:"80px 1fr auto", gap:"1.5rem", alignItems:"center", padding:"1.25rem 0", borderBottom:"1px solid var(--border)", textDecoration:"none", transition:"padding-left 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.paddingLeft="8px")}
      onMouseLeave={(e) => (e.currentTarget.style.paddingLeft="0")}
    >
      <span style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.62rem", color:"var(--dim)" }}>{formatPostDate(post.date)}</span>
      <div>
        <p style={{ fontWeight:600, color:"var(--text)", fontSize:"0.95rem", marginBottom:2 }}>{post.title}</p>
        {post.description && <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.62rem", color:"var(--dim)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{post.description}</p>}
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        {post.tags.slice(0,1).map((tag) => (
          <span key={tag} style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.58rem", color:"var(--accent2)", background:"rgba(91,138,255,.1)", border:"1px solid rgba(91,138,255,.2)", padding:"2px 8px", borderRadius:9999 }}>#{tag}</span>
        ))}
        <span style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.62rem", color:"var(--dim)" }}>→</span>
      </div>
    </motion.a>
  );
}

export default function Posts() {
  const { posts, loading } = useDevTo();
  const { lang } = useLang();
  const p = translations.posts;

  return (
    <section id="posts" style={{ borderTop:"1px solid var(--border)", padding:"6rem 1.5rem" }}>
      <div style={{ maxWidth:1152, margin:"0 auto" }}>
        <motion.div {...fadeInUp} style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", flexWrap:"wrap", gap:"1rem" }}>
          <div>
            <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", letterSpacing:"0.2em", color:"var(--accent)", textTransform:"uppercase", marginBottom:"0.5rem" }}>{p.label[lang]}</p>
            <h2 style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:700, color:"var(--text)" }}>
              {p.title[lang]} <em style={{ fontStyle:"italic", fontWeight:400, color:"var(--accent)" }}>{p.italic[lang]}</em>
            </h2>
            <p style={{ color:"var(--dim)", fontWeight:300, marginTop:"0.5rem" }}>{p.subtitle[lang]}</p>
          </div>
          <a href={`https://dev.to/${PERSONAL.devto}`} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.7rem", color:"var(--dim)", textDecoration:"none", transition:"color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color="var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color="var(--dim)")}
          >{p.all[lang]}</a>
        </motion.div>

        {loading ? (
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {[...Array(4)].map((_,i) => <div key={i} style={{ height:60, background:"var(--surface)", borderRadius:8, animation:"shimmer 1.5s ease infinite" }} />)}
          </div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign:"center", padding:"4rem 2rem", border:"1px dashed var(--border)", borderRadius:16 }}>
            <p style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>✍️</p>
            <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.82rem", color:"var(--dim)", marginBottom:"0.5rem" }}>{p.empty[lang]}</p>
            <p style={{ color:"var(--dim)", fontWeight:300, fontSize:"0.85rem", marginBottom:"1.5rem" }}>{p.emptySub[lang]}</p>
            <a href={`https://dev.to/${PERSONAL.devto}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.72rem", color:"var(--accent)", textDecoration:"none" }}>{p.follow[lang]}</a>
          </div>
        ) : (
          <div>{posts.map((post, i) => <PostRow key={post.id} post={post} index={i} />)}</div>
        )}
      </div>
      <style>{`@keyframes shimmer{0%,100%{opacity:.6}50%{opacity:1}}`}</style>
    </section>
  );
}
