"use client";

import { useCallback, useState } from "react";
import { SITE_CONFIG } from "@/data/content";

const VK_CTA = {
  glow: "rgba(0,229,255,.2)",
  border: "rgba(0,229,255,.5)",
  hoverBg: "#00E5FF",
  hoverColor: "#080A0F",
};

const SOL_CTA: Record<string, typeof VK_CTA> = {
  shop:   { glow: "rgba(57,255,140,.25)",  border: "rgba(57,255,140,.5)",  hoverBg: "#39FF8C",  hoverColor: "#080A0F" },
  orders: VK_CTA,
  full:   { glow: "rgba(168,85,247,.22)",  border: "rgba(168,85,247,.5)",  hoverBg: "#A855F7",  hoverColor: "#fff"    },
};

type Size = "sm" | "md" | "lg" | "xl" | "card";

const ICON_SIZE: Record<Size, number> = { sm: 14, md: 16, lg: 17, xl: 18, card: 15 };

function TelegramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SIZE_STYLES: Record<Size, { primary: React.CSSProperties; vk: React.CSSProperties; gap: number }> = {
  sm: {
    gap: 8,
    primary: { padding: "8px 16px", fontSize: 12, fontWeight: 700, borderRadius: 40, letterSpacing: "-.2px" },
    vk:      { padding: "8px 16px", fontSize: 12, fontWeight: 700, borderRadius: 40, letterSpacing: "-.1px" },
  },
  md: {
    gap: 10,
    primary: { padding: "13px 28px", fontSize: 14, fontWeight: 700, borderRadius: 40, letterSpacing: "-.2px" },
    vk:      { padding: "13px 28px", fontSize: 14, fontWeight: 700, borderRadius: 40, letterSpacing: "-.1px" },
  },
  lg: {
    gap: 12,
    primary: { padding: "15px 32px", fontSize: 15, fontWeight: 800, borderRadius: 40, letterSpacing: "-.2px" },
    vk:      { padding: "15px 32px", fontSize: 15, fontWeight: 700, borderRadius: 40, letterSpacing: "-.1px" },
  },
  xl: {
    gap: 14,
    primary: { padding: "16px 36px", fontSize: 16, fontWeight: 800, borderRadius: 40, letterSpacing: "-.3px" },
    vk:      { padding: "16px 36px", fontSize: 16, fontWeight: 700, borderRadius: 40, letterSpacing: "-.1px" },
  },
  card: {
    gap: 8,
    primary: { padding: "11px", fontSize: 13, fontWeight: 700, borderRadius: 40, letterSpacing: "-.1px", width: "100%" },
    vk:      { padding: "11px", fontSize: 13, fontWeight: 700, borderRadius: 40, letterSpacing: "-.1px", width: "100%" },
  },
};

function applyVkHover(el: HTMLAnchorElement, enter: boolean) {
  if (enter) {
    el.style.background = VK_CTA.hoverBg;
    el.style.color = VK_CTA.hoverColor;
    el.style.boxShadow = `0 0 28px ${VK_CTA.glow}`;
    el.style.transform = "translateY(-1px)";
  } else {
    el.style.background = "transparent";
    el.style.color = "var(--white)";
    el.style.boxShadow = `0 0 16px ${VK_CTA.glow}`;
    el.style.transform = "translateY(0)";
  }
}

function applyOutlineHover(el: HTMLAnchorElement, cta: typeof VK_CTA, enter: boolean) {
  if (enter) {
    el.style.background = cta.hoverBg;
    el.style.color = cta.hoverColor;
    el.style.boxShadow = `0 0 28px ${cta.glow}`;
    el.style.transform = "translateY(-1px)";
  } else {
    el.style.background = "transparent";
    el.style.color = "var(--white)";
    el.style.boxShadow = `0 0 16px ${cta.glow}`;
    el.style.transform = "translateY(0)";
  }
}

type CtaButtonsProps = {
  size?: Size;
  primaryVariant?: "solid" | "outline";
  solutionId?: keyof typeof SOL_CTA;
  showContact?: boolean;
  align?: "flex-start" | "center" | "flex-end";
  stack?: boolean;
};

export default function CtaButtons({
  size = "md",
  primaryVariant = "solid",
  solutionId,
  showContact = false,
  align = "flex-start",
  stack = false,
}: CtaButtonsProps) {
  const [toastVisible, setToastVisible] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = SITE_CONFIG.email;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 2500);
  }, []);

  const s = SIZE_STYLES[size];
  const isCard = size === "card";
  const outlineCta = solutionId ? SOL_CTA[solutionId] : VK_CTA;

  const iconSize = ICON_SIZE[size];

  const baseLink: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all .25s ease",
    whiteSpace: "nowrap",
    flexShrink: 0,
  };

  const primaryLink: React.CSSProperties = {
    ...baseLink,
    gap: size === "lg" || size === "xl" ? 10 : 8,
  };

  const primarySolid: React.CSSProperties = {
    ...primaryLink,
    ...s.primary,
    background: "var(--neon)",
    color: "var(--bg)",
    boxShadow: size === "xl" ? "0 0 40px rgba(57,255,140,.3)" : "0 0 20px rgba(57,255,140,.2)",
  };

  const primaryOutline: React.CSSProperties = {
    ...primaryLink,
    ...s.primary,
    background: "transparent",
    color: "var(--white)",
    border: `1px solid ${outlineCta.border}`,
    boxShadow: `0 0 16px ${outlineCta.glow}`,
    textAlign: "center",
  };

  const vkStyle: React.CSSProperties = {
    ...baseLink,
    ...s.vk,
    background: "transparent",
    color: "var(--white)",
    border: `1px solid ${VK_CTA.border}`,
    boxShadow: `0 0 16px ${VK_CTA.glow}`,
    textAlign: "center",
  };

  const rowClass = [
    "cta-buttons-row",
    stack || isCard ? "cta-buttons-stretch" : "",
    size === "sm" ? "cta-buttons-keep-row" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
    <div className="cta-buttons-root" style={{ display: "flex", flexDirection: "column", alignItems: align, gap: showContact ? 12 : 0, width: isCard || stack ? "100%" : undefined }}>
      <div
        className={rowClass}
        style={{
          flexDirection: stack || isCard ? "column" : "row",
          justifyContent: align === "center" ? "center" : align === "flex-end" ? "flex-end" : "flex-start",
          gap: s.gap,
          width: isCard ? "100%" : undefined,
        }}
      >
        {primaryVariant === "solid" ? (
          <a href={SITE_CONFIG.telegramUrl} style={primarySolid}>
            <TelegramIcon size={iconSize} />
            Получить решение
          </a>
        ) : (
          <a
            href={SITE_CONFIG.telegramUrl}
            style={primaryOutline}
            onMouseEnter={(e) => applyOutlineHover(e.currentTarget, outlineCta, true)}
            onMouseLeave={(e) => applyOutlineHover(e.currentTarget, outlineCta, false)}
          >
            <TelegramIcon size={iconSize} />
            Получить решение
          </a>
        )}
        <a
          href={SITE_CONFIG.vkUrl}
          style={vkStyle}
          onMouseEnter={(e) => applyVkHover(e.currentTarget, true)}
          onMouseLeave={(e) => applyVkHover(e.currentTarget, false)}
        >
          <span className="cta-vk-long">Если удобно в ВКонтакте</span>
          <span className="cta-vk-short">Удобнее в ВК</span>
        </a>
      </div>
      {showContact && (
        <p style={{ fontSize: size === "xl" ? 14 : 13, color: "var(--silver3)", lineHeight: 1.5, textAlign: align === "center" ? "center" : "left" }}>
          Почта для связи:{" "}
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Скопировать почту в буфер обмена"
            style={{
              color: "var(--silver2)",
              background: "none",
              border: "none",
              padding: 0,
              font: "inherit",
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: 3,
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--silver2)")}
          >
            {SITE_CONFIG.email}
          </button>
        </p>
      )}
    </div>
    {toastVisible && (
      <div
        role="status"
        aria-live="polite"
        className="copy-toast"
        style={{
          position: "fixed",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 20px",
          background: "rgba(13,15,21,.95)",
          border: "1px solid rgba(57,255,140,.35)",
          borderRadius: 14,
          boxShadow: "0 12px 40px rgba(0,0,0,.45), 0 0 24px rgba(57,255,140,.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          animation: "toastIn .3s ease",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M9 12l2 2 4-4" stroke="#39FF8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="#39FF8C" strokeWidth="1.5" opacity=".5"/>
        </svg>
        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--white)", whiteSpace: "nowrap" }}>
          Почта скопирована в буфер обмена
        </span>
      </div>
    )}
    <style>{`
      @keyframes toastIn {
        from { opacity: 0; transform: translateX(-50%) translateY(12px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
      }
    `}</style>
    </>
  );
}
