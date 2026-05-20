"use client";
import { useState } from "react";
import { FAQ_ITEMS } from "@/data/content";
import { IconChevronDown } from "@/components/ui/SvgIcons";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "60px 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }} className="reveal">
          <div className="section-label">Вопросы</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-1px", color: "var(--white)", lineHeight: 1.1 }}>
            Ответы на{" "}
            <em style={{ fontStyle: "normal", background: "linear-gradient(135deg,#39FF8C,#00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              частые вопросы
            </em>
          </h2>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 6 }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="reveal"
                style={{
                  transitionDelay: `${i * 0.04}s`,
                  border: isOpen
                    ? "1px solid rgba(57,255,140,.3)"
                    : "1px solid var(--border)",
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "border-color .3s ease",
                  background: isOpen
                    ? "linear-gradient(135deg, rgba(57,255,140,.04), rgba(0,229,255,.02))"
                    : "var(--glass)",
                  position: "relative",
                }}
              >
                {/* top shimmer when open */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 1,
                  background: "linear-gradient(90deg,transparent,rgba(57,255,140,.35),rgba(0,229,255,.2),transparent)",
                  opacity: isOpen ? 1 : 0,
                  transition: "opacity .3s",
                  pointerEvents: "none",
                }} />

                {/* Question row */}
                <div
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "17px 20px", cursor: "pointer", userSelect: "none" }}
                >
                  <span style={{
                    fontSize: 14, fontWeight: 600,
                    color: isOpen ? "var(--neon)" : "var(--white)",
                    lineHeight: 1.4,
                    transition: "color .25s ease",
                  }}>
                    {item.q}
                  </span>

                  {/* Arrow circle */}
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: isOpen ? "1px solid rgba(57,255,140,.4)" : "1px solid var(--border2)",
                    background: isOpen ? "rgba(57,255,140,.12)" : "rgba(255,255,255,.04)",
                    color: isOpen ? "var(--neon)" : "var(--silver3)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "all .3s ease",
                    boxShadow: isOpen ? "0 0 10px rgba(57,255,140,.12)" : "none",
                  }}>
                    <IconChevronDown size={13} />
                  </div>
                </div>

                {/* Answer */}
                <div style={{
                  padding: isOpen ? "0 20px 18px" : "0 20px",
                  maxHeight: isOpen ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height .38s ease, padding .38s ease",
                }}>
                  <p style={{ fontSize: 13, color: "var(--silver2)", lineHeight: 1.75 }}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
