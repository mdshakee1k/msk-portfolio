"use client";

import { useEffect, useRef, useState } from "react";
import { CHAT_SUGGESTIONS }            from "@/lib/knowledge";
import type { ChatMessage }            from "@/types";

export default function ChatBot() {
  const [open,    setOpen]    = useState(false);
  const [badge,   setBadge]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [input,   setInput]   = useState("");
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [msgs,    setMsgs]    = useState<{ role: string; text: string }[]>([]);
  const msgsRef = useRef<HTMLDivElement>(null);

  /* Show badge after 7s */
  useEffect(() => { const t = setTimeout(() => setBadge(true), 7000); return () => clearTimeout(t); }, []);

  /* Auto-scroll */
  useEffect(() => { if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight; }, [msgs]);

  const addMsg = (role: string, text: string) =>
    setMsgs(m => [...m, { role, text }]);

  const open_panel = () => {
    setOpen(true); setBadge(false);
    if (msgs.length === 0) addMsg("bot", "Hi! I'm Shakeel's portfolio assistant. Ask me anything about his skills, projects, or how to work with him!");
  };

  const send = async (q?: string) => {
    const text = (q ?? input).trim();
    if (!text || loading) return;
    setInput("");
    addMsg("user", text);
    setLoading(true);

    const newHistory: ChatMessage[] = [...history, { role: "user", content: text }];
    setHistory(newHistory);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });

      if (!res.body) throw new Error("No stream");
      const reader = res.body.getReader();
      const dec    = new TextDecoder();
      let full     = "";

      // Add placeholder bot message
      const msgIdx = msgs.length;
      setMsgs(m => [...m, { role: "bot", text: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += dec.decode(value, { stream: true });
        // Batch updates to reduce re-renders
        setMsgs(m => {
          const updated = [...m];
          updated[msgIdx] = { role: "bot", text: full };
          return updated;
        });
      }

      setHistory(h => [...h, { role: "assistant", content: full }]);
    } catch {
      addMsg("bot", "Network error. Try the Contact section to reach Shakeel directly.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setMsgs([]); setHistory([]); };

  /* ── styles ── */
  const S = {
    bubble: { position: "fixed", bottom: 24, right: 24, zIndex: 300, width: 54, height: 54, borderRadius: "50%", background: "var(--color-accent)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,255,179,.4)", transition: "transform .25s, box-shadow .25s" } as React.CSSProperties,
    panel:  { position: "fixed", bottom: 90, right: 24, zIndex: 300, width: 370, height: 540, borderRadius: 16, background: "var(--color-bg2)", border: "1px solid var(--color-border)", flexDirection: "column", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,.6)", display: open ? "flex" : "none" } as React.CSSProperties,
  };

  return (
    <>
      {/* Bubble */}
      <button
        style={S.bubble}
        onClick={open ? () => setOpen(false) : open_panel}
        onMouseEnter={e => { (e.currentTarget.style.transform = "scale(1.1)"); (e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,255,179,.6)"); }}
        onMouseLeave={e => { (e.currentTarget.style.transform = ""); (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,255,179,.4)"); }}
        aria-label="Toggle AI assistant"
      >
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#040C18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        {badge && (
          <div style={{ position: "absolute", top: -2, right: -2, width: 13, height: 13, borderRadius: "50%", background: "#EF4444", border: "2px solid var(--color-bg)", animation: "pulse 2s infinite" }} />
        )}
      </button>

      {/* Panel */}
      <div style={S.panel}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "13px 14px", background: "var(--color-bg3)", borderBottom: "1px solid var(--color-border)", flexShrink: 0 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(0,255,179,.15)", border: "1.5px solid rgba(0,255,179,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 500, color: "var(--color-accent)", flexShrink: 0 }}>MSK</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--color-heading)" }}>Shakeel's Assistant</div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)", animation: "pulse 2s infinite" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--color-accent)" }}>Online · Gemini-powered</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <button onClick={reset} title="Reset" style={{ background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer", padding: 5, borderRadius: 5 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            </button>
            <button onClick={() => setOpen(false)} title="Close" style={{ background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer", padding: 5, borderRadius: 5 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div ref={msgsRef} style={{ flex: 1, overflowY: "auto", padding: "14px 13px", display: "flex", flexDirection: "column", gap: 11 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: m.role === "user" ? "flex-end" : "flex-start" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--color-muted)", marginBottom: 3 }}>{m.role === "user" ? "You" : "MSK Assistant"}</div>
              <div style={{
                maxWidth: "84%", padding: "9px 13px", fontSize: 13, lineHeight: 1.65, color: "var(--color-text)", fontFamily: "var(--font-sans)", wordBreak: "break-word", whiteSpace: "pre-wrap",
                borderRadius: m.role === "user" ? "13px 13px 4px 13px" : "13px 13px 13px 4px",
                background: m.role === "user" ? "rgba(0,255,179,.14)" : "var(--color-bg3)",
                border: m.role === "user" ? "1px solid rgba(0,255,179,.3)" : "1px solid var(--color-border)",
              }}>{m.text || <span style={{ display: "flex", gap: 4 }}>{[0,1,2].map(k => <span key={k} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)", animation: `blink .9s ${k*.18}s infinite` }} />)}</span>}</div>
            </div>
          ))}
          {/* Suggestions shown on first open */}
          {msgs.length === 1 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
              {CHAT_SUGGESTIONS.slice(0, 4).map(q => (
                <button key={q} onClick={() => send(q)} style={{ padding: "6px 11px", background: "rgba(0,255,179,.07)", border: "1px solid rgba(0,255,179,.22)", borderRadius: 20, cursor: "pointer", fontSize: 11, color: "var(--color-text)", fontFamily: "var(--font-sans)", transition: "all .2s" }}>
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{ display: "flex", gap: 7, padding: "11px 13px", background: "var(--color-bg3)", borderTop: "1px solid var(--color-border)", flexShrink: 0 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && send()}
            placeholder="Ask about skills, projects, availability…"
            style={{ flex: 1, padding: "9px 12px", background: "var(--color-bg2)", border: "1px solid var(--color-border)", borderRadius: 7, color: "var(--color-text)", fontFamily: "var(--font-sans)", fontSize: 12.5, outline: "none" }}
            onFocus={e  => (e.target.style.borderColor = "var(--color-accent)")}
            onBlur={e   => (e.target.style.borderColor = "var(--color-border)")}
          />
          <button
            onClick={() => send()}
            disabled={loading}
            style={{ width: 36, height: 36, borderRadius: 7, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: loading ? "not-allowed" : "pointer", background: loading ? "var(--color-bg2)" : "var(--color-accent)", flexShrink: 0, transition: "all .2s" }}
          >
            {loading
              ? <span style={{ width: 12, height: 12, border: "2px solid #040C18", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
              : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#040C18" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            }
          </button>
        </div>
        <div style={{ padding: "5px 0", textAlign: "center", borderTop: "1px solid var(--color-border)", background: "var(--color-bg3)", flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--color-muted)" }}>
          Powered by Gemini · Portfolio data only
        </div>
      </div>
    </>
  );
}
