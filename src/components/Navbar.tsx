"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { useLang } from "@/data/LangContext";
import { Lang, translations } from "@/data/i18n";
import { PERSONAL } from "@/data/portfolio";

const LANG_OPTIONS: { value: Lang; flag: string; label: string }[] = [
  { value: "pt", flag: "🇧🇷", label: "PT" },
  { value: "en", flag: "🇺🇸", label: "EN" },
  { value: "es", flag: "🇪🇸", label: "ES" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { lang, setLang } = useLang();
  const n = translations.nav;

  const LINKS = [
    { href: "#sobre",    label: n.about[lang]    },
    { href: "#skills",   label: n.skills[lang]   },
    { href: "#projetos", label: n.projects[lang] },
    { href: "#posts",    label: n.posts[lang]    },
    { href: "#contato",  label: n.contact[lang]  },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    borderBottom: scrolled ? "1px solid var(--border)" : "none",
    backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 88%, transparent)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    transition: "all 0.3s",
  };

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono,monospace)", fontSize: "0.7rem",
    color: "var(--dim)", textDecoration: "none",
    letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s",
  };

  const btnBase: React.CSSProperties = {
    display: "flex", alignItems: "center", justifyContent: "center",
    width: 34, height: 34, borderRadius: "50%",
    border: "1px solid var(--border)", background: "var(--surface)",
    cursor: "pointer", fontSize: "0.8rem", color: "var(--dim)", transition: "all 0.2s",
  };

  const currentLang = LANG_OPTIONS.find((l) => l.value === lang)!;

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={navBg}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ fontFamily: "var(--font-mono,monospace)", fontSize: "0.85rem", color: "var(--accent)", letterSpacing: "0.05em", textDecoration: "none" }}>
          {PERSONAL.github}<span style={{ color: "var(--dim)" }}>.dev</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none" }} className="nav-desktop">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim)")}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Lang picker */}
          <div style={{ position: "relative" }}>
            <button onClick={() => setLangOpen((v) => !v)} style={{ ...btnBase, gap: 4, width: "auto", padding: "0 10px", fontSize: "0.7rem", fontFamily: "var(--font-mono,monospace)", fontWeight: 700, color: "var(--accent)", borderColor: "var(--accent)", minWidth: 60 }}>
              {currentLang.flag} {currentLang.label}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden", minWidth: 100, zIndex: 99, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
                >
                  {LANG_OPTIONS.map((opt) => (
                    <button key={opt.value} onClick={() => { setLang(opt.value); setLangOpen(false); }}
                      style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "9px 14px", background: lang === opt.value ? "rgba(127,255,178,0.08)" : "transparent", border: "none", cursor: "pointer", fontFamily: "var(--font-mono,monospace)", fontSize: "0.72rem", color: lang === opt.value ? "var(--accent)" : "var(--dim)", transition: "all 0.15s" }}
                      onMouseEnter={(e) => { if (lang !== opt.value) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                      onMouseLeave={(e) => { if (lang !== opt.value) e.currentTarget.style.background = "transparent"; }}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label} {opt.value === "pt" ? "— Português" : opt.value === "en" ? "— English" : "— Español"}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme toggle */}
          <button onClick={toggle} title={theme === "dark" ? "Modo claro" : "Modo escuro"} style={btnBase}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Email CTA */}
          <a href={`mailto:${PERSONAL.email}`} className="nav-desktop"
            style={{ fontFamily: "var(--font-mono,monospace)", fontSize: "0.7rem", padding: "0.45rem 1rem", border: "1px solid var(--accent)", color: "var(--accent)", borderRadius: 6, textDecoration: "none", opacity: 0.8, transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
          >{n.email[lang]}</a>

          {/* Burger */}
          <button className="nav-mobile" onClick={() => setMenuOpen((v) => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column" as const, gap: 5, padding: 4 }}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: 22, height: 2, background: "var(--dim)", borderRadius: 2, transition: "all 0.2s",
                transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 1 ? "scaleX(0)" : "rotate(-45deg) translate(5px,-5px)") : "none",
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden", borderTop: "1px solid var(--border)", background: "var(--bg)" }}
          >
            <ul style={{ listStyle: "none", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)} style={{ ...linkStyle, fontSize: "0.85rem" }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){
          .nav-desktop{display:none!important}
          .nav-mobile{display:flex!important}
        }
      `}</style>
    </motion.nav>
  );
}
