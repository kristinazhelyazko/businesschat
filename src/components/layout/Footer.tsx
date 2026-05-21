"use client";
import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG, LEGAL_TEXT } from "@/data/content";
import { IconLogo } from "@/components/ui/SvgIcons";

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);

  // Split legal text into sections for nicer rendering
  const legalSections = LEGAL_TEXT.split("\n\n").filter(Boolean);

  return (
    <>
      <footer style={{ borderTop:"1px solid var(--border)", padding:"32px 0", position:"relative" }}>
        <div style={{ position:"absolute", top:0, left:"15%", right:"15%", height:1, background:"linear-gradient(90deg,transparent,rgba(184,191,200,.07),transparent)" }} />
        <div className="site-container">
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, flexWrap:"wrap" }}>
            <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
              <div style={{ width:32, height:32, background:"linear-gradient(135deg,#39FF8C,#00E5FF)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 16px rgba(57,255,140,.2)" }}>
                <IconLogo size={16} />
              </div>
              <span style={{ fontSize:15, fontWeight:700, color:"var(--white)", letterSpacing:"-.3px" }}>{SITE_CONFIG.name}</span>
            </Link>

            <div style={{ display:"flex", gap:24, flexWrap:"wrap", alignItems:"center" }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href}
                  style={{ fontSize:12, color:"var(--silver3)", textDecoration:"none", transition:"color .2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--silver3)")}>
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => setLegalOpen(true)}
                style={{ fontSize:12, color:"var(--silver3)", background:"none", border:"none", cursor:"pointer", padding:0, transition:"color .2s", fontFamily:"inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--silver3)")}>
                Правовая информация
              </button>
            </div>

            <span style={{ fontSize:12, color:"var(--silver3)" }}>© {SITE_CONFIG.year} {SITE_CONFIG.name}</span>
          </div>
        </div>
      </footer>

      {/* Legal modal */}
      {legalOpen && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setLegalOpen(false); }}
          style={{ position:"fixed", inset:0, zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:"24px 16px", background:"rgba(4,6,10,0.8)", backdropFilter:"blur(12px)", WebkitBackdropFilter:"blur(12px)" }}>
          <div className="legal-modal" style={{
            position:"relative", maxWidth:680, width:"100%", maxHeight:"80vh",
            background:"var(--bg3)", border:"1px solid rgba(184,191,200,.14)",
            borderRadius:24, overflow:"hidden",
            boxShadow:"0 32px 80px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.06)",
          }}>
            {/* Shimmer top border */}
            <div style={{ position:"absolute", top:0, left:"10%", right:"10%", height:1, background:"linear-gradient(90deg,transparent,rgba(184,191,200,.25),transparent)" }} />

            {/* Header */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px 28px", borderBottom:"1px solid var(--border)", position:"sticky", top:0, background:"var(--bg3)", zIndex:1 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:"linear-gradient(135deg,var(--silver),var(--silver-shine))", boxShadow:"0 0 8px rgba(184,191,200,.4)" }} />
                <span style={{ fontSize:15, fontWeight:700, color:"var(--white)", letterSpacing:"-.3px" }}>Правовая информация</span>
              </div>
              <button
                onClick={() => setLegalOpen(false)}
                aria-label="Закрыть"
                style={{ width:32, height:32, borderRadius:"50%", border:"1px solid var(--border2)", background:"rgba(255,255,255,.04)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"var(--silver2)", transition:"all .2s", flexShrink:0 }}
                onMouseEnter={(e) => { e.currentTarget.style.background="rgba(255,255,255,.1)"; e.currentTarget.style.color="var(--white)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background="rgba(255,255,255,.04)"; e.currentTarget.style.color="var(--silver2)"; }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div style={{ padding:"24px 28px", overflowY:"auto", maxHeight:"calc(80vh - 70px)" }}>
              {legalSections.map((section, i) => {
                const lines = section.split("\n").filter(Boolean);
                const title = lines[0];
                const isTitle = !title.includes(":") || title.endsWith(":");
                const body = lines.slice(isTitle ? 1 : 0).join("\n");

                return (
                  <div key={i} style={{ marginBottom: i < legalSections.length - 1 ? 24 : 0 }}>
                    {isTitle && (
                      <div style={{ fontSize:12, fontWeight:700, color:"var(--neon)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:8 }}>
                        {title.replace(/:$/, "")}
                      </div>
                    )}
                    <p style={{ fontSize:13, color:"var(--silver2)", lineHeight:1.75, whiteSpace:"pre-line" }}>
                      {isTitle ? body : section}
                    </p>
                    {i < legalSections.length - 1 && (
                      <div style={{ marginTop:20, height:1, background:"var(--border)" }} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer row */}
            <div style={{ padding:"14px 28px", borderTop:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(255,255,255,.02)" }}>
              <span style={{ fontSize:11, color:"var(--silver3)" }}>© {SITE_CONFIG.year} {SITE_CONFIG.name}</span>
              <a href={`mailto:${SITE_CONFIG.email}`} style={{ fontSize:11, color:"var(--silver2)", textDecoration:"none", transition:"color .2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--silver2)")}>
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
