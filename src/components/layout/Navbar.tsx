"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/data/content";
import CtaButtons from "@/components/ui/CtaButtons";
import { IconLogo } from "@/components/ui/SvgIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all .4s ease",
      ...(scrolled ? {
        background: "rgba(8,10,15,0.82)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      } : {}),
    }}>
      <div
        className="site-container nav-bar-inner"
        style={{ height: 60, display: "flex", alignItems: "center", gap: 12 }}
      >
        <Link href="/" className="nav-logo-block" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
          <div style={{ width: 32, height: 32, background: "linear-gradient(135deg,#39FF8C,#00E5FF)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 16px rgba(57,255,140,.2)", flexShrink: 0 }}>
            <IconLogo size={16} />
          </div>
          <span className="nav-logo-text" style={{ fontSize: 15, fontWeight: 700, color: "var(--white)", letterSpacing: "-.3px", whiteSpace: "nowrap" }}>{SITE_CONFIG.name}</span>
        </Link>

        <div className="nav-scroll-area">
          <div className="nav-links-wrap">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="nav-cta-desktop">
          <CtaButtons size="sm" />
        </div>
      </div>
    </nav>
  );
}
