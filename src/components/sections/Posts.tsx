"use client";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/motion";
import { useDevTo } from "@/hooks/useDevTo";
import { formatPostDate } from "@/lib/devto";
import { PERSONAL } from "@/data/portfolio";
import { DevToPost } from "@/types";
import { useLang } from "@/data/LangContext";
import { translations } from "@/data/i18n";

const FOLLOW_URL = (username: string) =>
  `https://dev.to/${username}#follow-user`; // link direto para follow no perfil

function PostCard({ post, index }: { post: DevToPost; index: number }) {
  return (
    <motion.a
      {...stagger(index)}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex", flexDirection: "column", gap: 8,
        padding: "1.25rem", background: "var(--surface)",
        border: "1px solid var(--border)", borderRadius: 12,
        textDecoration: "none", transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--muted)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "none";
      }}
    >
      {/* data + tags */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-mono,monospace)", fontSize: "0.6rem", color: "var(--dim)" }}>
          {formatPostDate(post.date)}
        </span>
        {post.tags.slice(0, 2).map((tag) => (
          <span key={tag} style={{
            fontFamily: "var(--font-mono,monospace)", fontSize: "0.58rem",
            color: "var(--accent2)", background: "rgba(91,138,255,.1)",
            border: "1px solid rgba(91,138,255,.2)", padding: "1px 7px", borderRadius: 9999,
          }}>#{tag}</span>
        ))}
      </div>

      {/* título */}
      <p style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.95rem", lineHeight: 1.4 }}>
        {post.title}
      </p>

      {/* descrição */}
      {post.description && (
        <p style={{
          fontFamily: "var(--font-mono,monospace)", fontSize: "0.68rem",
          color: "var(--dim)", lineHeight: 1.5,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {post.description}
        </p>
      )}

      {/* footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
        <span style={{ fontFamily: "var(--font-mono,monospace)", fontSize: "0.6rem", color: "var(--dim)" }}>
          ❤️ {post.reactions} · {post.reading_time_minutes} min read
        </span>
        <span style={{ fontFamily: "var(--font-mono,monospace)", fontSize: "0.65rem", color: "var(--accent)" }}>
          ler post →
        </span>
      </div>
    </motion.a>
  );
}

export default function Posts() {
  const { posts, loading, error } = useDevTo();
  const { lang } = useLang();
  const p = translations.posts;

  return (
    <section id="posts" style={{ borderTop: "1px solid var(--border)", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Header */}
        <motion.div {...fadeInUp} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontFamily: "var(--font-mono,monospace)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              {p.label[lang]}
            </p>
            <h2 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 700, color: "var(--text)" }}>
              {p.title[lang]}{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>{p.italic[lang]}</em>
            </h2>
            <p style={{ color: "var(--dim)", fontWeight: 300, marginTop: "0.5rem" }}>{p.subtitle[lang]}</p>
          </div>

          {/* Botões: ver todos + seguir */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href={`https://dev.to/${PERSONAL.devto}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono,monospace)", fontSize: "0.7rem",
                color: "var(--dim)", textDecoration: "none",
                border: "1px solid var(--border)", padding: "0.4rem 0.9rem",
                borderRadius: 6, transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--dim)"; e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              {p.all[lang]}
            </a>
            <a
              href={FOLLOW_URL(PERSONAL.devto)}
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono,monospace)", fontSize: "0.7rem",
                color: "var(--bg)", background: "var(--accent2)",
                border: "none", padding: "0.4rem 0.9rem",
                borderRadius: 6, textDecoration: "none", transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {p.follow[lang]}
            </a>
          </div>
        </motion.div>

        {/* Loading skeleton */}
        {loading && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16 }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{ height: 160, background: "var(--surface)", borderRadius: 12, animation: "shimmer 1.5s ease infinite" }} />
            ))}
          </div>
        )}

        {/* Erro */}
        {!loading && error && (
          <div style={{ textAlign: "center", padding: "3rem", border: "1px dashed var(--border)", borderRadius: 16 }}>
            <p style={{ fontFamily: "var(--font-mono,monospace)", fontSize: "0.8rem", color: "var(--accent3)", marginBottom: "0.5rem" }}>
              ⚠️ Não foi possível carregar os posts
            </p>
            <a href={`https://dev.to/${PERSONAL.devto}`} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono,monospace)", fontSize: "0.72rem", color: "var(--accent)", textDecoration: "none" }}>
              ver posts no DEV.to →
            </a>
          </div>
        )}

        {/* Posts em grid */}
        {!loading && !error && posts.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16 }}>
            {posts.map((post, i) => <PostCard key={post.id} post={post} index={i} />)}
          </div>
        )}

        {/* Estado vazio */}
        {!loading && !error && posts.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px dashed var(--border)", borderRadius: 16 }}>
            <p style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✍️</p>
            <p style={{ fontFamily: "var(--font-mono,monospace)", fontSize: "0.82rem", color: "var(--dim)", marginBottom: "0.5rem" }}>
              {p.empty[lang]}
            </p>
            <p style={{ color: "var(--dim)", fontWeight: 300, fontSize: "0.85rem", marginBottom: "1.5rem" }}>
              {p.emptySub[lang]}
            </p>
            <a href={FOLLOW_URL(PERSONAL.devto)} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono,monospace)", fontSize: "0.72rem", color: "var(--accent)", textDecoration: "none" }}>
              {p.follow[lang]}
            </a>
          </div>
        )}
      </div>
      <style>{`@keyframes shimmer{0%,100%{opacity:.6}50%{opacity:1}}`}</style>
    </section>
  );
}
