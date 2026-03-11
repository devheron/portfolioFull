"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { floatAnimate } from "@/lib/motion";
import { useLang } from "@/data/LangContext";
import { translations } from "@/data/i18n";
import { getStaticReply, WELCOME } from "@/data/staticChat";
import { ChatMessage } from "@/types";

function Md({ text }: { text: string }) {
  const html = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, '<code style="background:rgba(0,0,0,.25);padding:1px 5px;border-radius:3px;font-family:monospace;font-size:.75rem">$1</code>')
    .replace(/\n/g, "<br>");
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

const css = {
  wrap: { position:"fixed" as const, bottom:24, right:24, zIndex:50, display:"flex", flexDirection:"column" as const, alignItems:"flex-end", gap:12 },
  win:  { width:340, background:"var(--surface)", border:"1px solid var(--border)", borderRadius:16, overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,.35)" },
  head: { display:"flex", alignItems:"center", gap:10, padding:"12px 14px", borderBottom:"1px solid var(--border)", background:"var(--bg)" },
  av:   { width:30, height:30, borderRadius:"50%", background:"linear-gradient(135deg,var(--accent),var(--accent2))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, flexShrink:0 },
  msgs: { height:300, overflowY:"auto" as const, padding:12, display:"flex", flexDirection:"column" as const, gap:8 },
  irow: { padding:"10px 12px", borderTop:"1px solid var(--border)", display:"flex", gap:8 },
  inp:  { flex:1, background:"var(--bg)", border:"1px solid var(--border)", borderRadius:8, padding:"8px 11px", color:"var(--text)", fontSize:"0.78rem", fontFamily:"var(--font-mono,monospace)", outline:"none" },
  send: { padding:"8px 14px", background:"var(--accent)", color:"var(--bg)", border:"none", borderRadius:8, fontWeight:700, cursor:"pointer", fontFamily:"var(--font-mono,monospace)", fontSize:"0.78rem" },
  fab:  { width:52, height:52, borderRadius:"50%", background:"linear-gradient(135deg,var(--accent),var(--accent2))", border:"none", cursor:"pointer", fontSize:"1.3rem", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 24px rgba(0,0,0,.3)" },
  bub:  (u:boolean): React.CSSProperties => ({
    maxWidth:"84%", padding:"8px 12px", fontSize:"0.82rem", lineHeight:1.55, fontWeight:300,
    borderRadius: u ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
    background:   u ? "var(--accent)"  : "var(--bg)",
    color:        u ? "var(--bg)"      : "var(--text)",
    border:       u ? "none"           : "1px solid var(--border)",
    alignSelf:    u ? "flex-end"       : "flex-start",
  }),
};

// Textos do menu rápido por idioma
const MENU_LABEL: Record<string, string> = {
  pt: "O que mais você gostaria de saber?",
  en: "What else would you like to know?",
  es: "¿Qué más te gustaría saber?",
};
const BACK_LABEL: Record<string, string> = {
  pt: "↩ Voltar ao menu principal",
  en: "↩ Back to main menu",
  es: "↩ Volver al menú principal",
};

// Componente dos botões de sugestão (reutilizável)
function SuggestionButtons({
  suggestions,
  onSelect,
  showBack,
  onBack,
  lang,
}: {
  suggestions: readonly string[];
  onSelect: (s: string) => void;
  showBack: boolean;
  onBack: () => void;
  lang: string;
}) {
  const btnStyle: React.CSSProperties = {
    textAlign:"left", fontFamily:"var(--font-mono,monospace)", fontSize:"0.7rem",
    color:"var(--dim)", background:"var(--bg)", border:"1px solid var(--border)",
    borderRadius:8, padding:"7px 11px", cursor:"pointer", transition:"all .15s", width:"100%",
  };
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:6, marginTop:4 }}>
      {showBack && (
        <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.65rem", color:"var(--dim)", marginBottom:2 }}>
          {MENU_LABEL[lang]}
        </p>
      )}
      {suggestions.map((s) => (
        <button key={s} onClick={() => onSelect(s)} style={btnStyle}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.color="var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--dim)"; }}
        >{s}</button>
      ))}
      {showBack && (
        <button onClick={onBack} style={{ ...btnStyle, color:"var(--accent3)", borderColor:"rgba(255,126,179,.25)", marginTop:2 }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor="var(--accent3)"; e.currentTarget.style.background="rgba(255,126,179,.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(255,126,179,.25)"; e.currentTarget.style.background="var(--bg)"; }}
        >{BACK_LABEL[lang]}</button>
      )}
    </div>
  );
}

export default function ChatWidget() {
  const { lang } = useLang();
  const c = translations.chat;
  const [open, setOpen]         = useState(false);
  const [msgs, setMsgs]         = useState<ChatMessage[]>([]);
  const [input, setInput]       = useState("");
  const [showMenu, setShowMenu] = useState(false); // controla exibir menu após resposta
  const bottomRef               = useRef<HTMLDivElement>(null);
  const suggestions             = c.suggestions[lang];

  // Boas-vindas ao abrir
  useEffect(() => {
    if (open && msgs.length === 0) {
      setMsgs([{ role: "model", content: WELCOME[lang] }]);
      setShowMenu(false);
    }
  }, [open, lang, msgs.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, showMenu]);

  const resetToMenu = () => {
    setMsgs([{ role: "model", content: WELCOME[lang] }]);
    setShowMenu(false);
    setInput("");
  };

  const send = (text: string) => {
    if (!text.trim()) return;
    const reply = getStaticReply(text, lang);
    setMsgs((p) => [
      ...p,
      { role: "user",  content: text  },
      { role: "model", content: reply },
    ]);
    setInput("");
    setShowMenu(true); // após cada resposta, mostra o menu de sugestões novamente
  };

  /*
   * ── GEMINI AI (comentado — ativar quando tiver chave) ─────────────────────
   * Para ativar:
   * 1. Configure NEXT_PUBLIC_GEMINI_KEY no .env.local
   * 2. Descomente e substitua a função send() acima
   *
   * const sendAI = async (text: string) => {
   *   if (!text.trim()) return;
   *   const body = [...msgs, { role: "user" as const, parts: [{text}] }];
   *   setMsgs(p => [...p, { role:"user", content:text }]);
   *   setInput(""); setShowMenu(false);
   *   const res = await fetch("/api/chat", {
   *     method: "POST", headers: { "Content-Type": "application/json" },
   *     body: JSON.stringify({ messages: body, systemPrompt: CHAT_SYSTEM_PROMPT }),
   *   });
   *   const data = await res.json();
   *   setMsgs(p => [...p, { role:"model", content: data.text }]);
   *   setShowMenu(true);
   * };
   * ──────────────────────────────────────────────────────────────────────────
   */

  // Estado inicial: só welcome + sugestões (sem showMenu)
  const isInitialState = msgs.length === 1 && msgs[0].role === "model" && !showMenu;

  return (
    <div style={css.wrap}>
      <AnimatePresence>
        {open && (
          <motion.div key="cw"
            initial={{ opacity:0, scale:0.88, y:12 }}
            animate={{ opacity:1, scale:1,    y:0  }}
            exit={{    opacity:0, scale:0.88, y:12 }}
            transition={{ duration:0.2, ease:"easeOut" }}
            style={css.win}
          >
            {/* Header */}
            <div style={css.head}>
              <div style={css.av}>🤖</div>
              <div style={{ flex:1 }}>
                <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.72rem", fontWeight:700, color:"var(--text)" }}>{c.title[lang]}</p>
                <p style={{ fontFamily:"var(--font-mono,monospace)", fontSize:"0.6rem", color:"var(--accent)" }}>{c.online[lang]}</p>
              </div>
              <button onClick={() => setOpen(false)} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--dim)", fontSize:"1rem" }}>✕</button>
            </div>

            {/* Mensagens */}
            <div style={css.msgs}>
              {/* Tela inicial — welcome + 3 sugestões sem botão de voltar */}
              {isInitialState && (
                <>
                  <div style={css.bub(false)}><Md text={msgs[0].content} /></div>
                  <SuggestionButtons
                    suggestions={suggestions}
                    onSelect={send}
                    showBack={false}
                    onBack={resetToMenu}
                    lang={lang}
                  />
                </>
              )}

              {/* Conversa em andamento */}
              {!isInitialState && msgs.map((m, i) => (
                <div key={i} style={css.bub(m.role === "user")}>
                  <Md text={m.content} />
                </div>
              ))}

              {/* Menu após resposta — 3 sugestões + botão voltar */}
              {showMenu && (
                <SuggestionButtons
                  suggestions={suggestions}
                  onSelect={send}
                  showBack={true}
                  onBack={resetToMenu}
                  lang={lang}
                />
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div style={css.irow}>
              <input style={css.inp} value={input} placeholder={c.placeholder[lang]}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              <button style={{ ...css.send, opacity: input.trim() ? 1 : 0.4 }}
                disabled={!input.trim()} onClick={() => send(input)}>→</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button animate={floatAnimate} whileHover={{ scale:1.1 }} whileTap={{ scale:0.95 }}
        onClick={() => setOpen((v) => !v)} style={css.fab} aria-label="Abrir chat"
      >
        {open ? "✕" : "🤖"}
      </motion.button>
    </div>
  );
}