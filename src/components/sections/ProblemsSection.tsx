import { PROBLEMS, BRIDGE_CHIPS } from "@/data/content";
import { IconMail, IconClipboard, IconClock, IconChat, IconCheck } from "@/components/ui/SvgIcons";

const ICONS: Record<string, React.ReactNode> = {
  mail:      <IconMail />,
  clipboard: <IconClipboard />,
  clock:     <IconClock />,
  chat:      <IconChat />,
};

// SVG icons for the flow cards (replacing emojis)
function FlowIcon1() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
        stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 10h6M9 13h4" stroke="#39FF8C" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function FlowIcon2() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
        stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 6h18M16 10a4 4 0 01-8 0"
        stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function FlowIcon3() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="1" y="4" width="22" height="16" rx="2" stroke="#A855F7" strokeWidth="1.5"/>
      <path d="M1 10h22" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 15h4M15 15h2" stroke="#A855F7" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function FlowIcon4() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#39FF8C" strokeWidth="1.5"/>
      <path d="M9 12l2 2 4-4" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 7h8M8 17h5" stroke="#39FF8C" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
    </svg>
  );
}

const FLOW_STEPS = [
  { Icon: FlowIcon1, title: "Клиент пишет в Telegram или ВКонтакте",    bg: "rgba(57,255,140,.08)",  border: "rgba(57,255,140,.18)"  },
  { Icon: FlowIcon2, title: "Открывает магазин одним нажатием",          bg: "rgba(0,229,255,.08)",   border: "rgba(0,229,255,.18)"   },
  { Icon: FlowIcon3, title: "Оформляет заказ — бот принимает автоматически", bg: "rgba(168,85,247,.08)", border: "rgba(168,85,247,.18)" },
  { Icon: FlowIcon4, title: "Вы видите заказ в панели и обрабатываете",  bg: "rgba(57,255,140,.06)",  border: "rgba(57,255,140,.14)"  },
];

export default function ProblemsSection() {
  return (
    <section id="problems" style={{ padding: "60px 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }} className="reveal">
          <div className="section-label">Почему сейчас</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-1px", color: "var(--white)", lineHeight: 1.1 }}>
            Бизнес теряет деньги<br/>
            <em style={{ fontStyle: "normal", background: "linear-gradient(135deg,#39FF8C,#00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>каждый день</em>
          </h2>
          <p style={{ fontSize: 16, color: "var(--silver2)", lineHeight: 1.7, maxWidth: 500 }}>
            Четыре проблемы, с которыми сталкиваются почти все, кто продаёт через мессенджеры без автоматизации.
          </p>
        </div>

        {/* Problems grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }} className="prob-grid">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="glass-card reveal" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, transitionDelay: `${i * 0.07}s` }}>
              <div className={`icon-wrap ${p.iconClass}`}>{ICONS[p.icon]}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(239,68,68,.8)", background: "rgba(239,68,68,.08)", padding: "3px 10px", borderRadius: 20, width: "fit-content", letterSpacing: ".06em", textTransform: "uppercase", border: "1px solid rgba(239,68,68,.15)" }}>{p.tag}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--white)", letterSpacing: "-.3px", lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: "var(--silver2)", lineHeight: 1.6 }}>{p.text}</p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className="bridge-section reveal" style={{ marginTop: 32, transitionDelay: ".25s" }}>
          {/* shimmer overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,transparent,rgba(184,191,200,.025),transparent)", backgroundSize: "200% 100%", animation: "shimmer 5s ease-in-out infinite", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Headline row */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 28 }} className="bridge-inner-top">
              <div style={{ width: 60, height: 60, borderRadius: 18, background: "linear-gradient(135deg,#39FF8C,#00E5FF)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 8px 28px rgba(57,255,140,.28)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" fill="#080A0F"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--neon)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 8 }}>Решение</div>
                <h3 style={{ fontSize: "clamp(18px,2.8vw,30px)", fontWeight: 800, color: "var(--white)", letterSpacing: "-.6px", lineHeight: 1.2 }}>
                  Всё управление продажами —<br/>
                  <em style={{ fontStyle: "normal", background: "linear-gradient(135deg,#39FF8C,#00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>в одном месте</em>
                </h3>
                <p style={{ fontSize: 14, color: "var(--silver2)", lineHeight: 1.7, marginTop: 10, maxWidth: 620 }}>
                  БизнесЧат — это магазин, управление заказами и автоматические уведомления в одном месте. Клиент делает заказ в Telegram или ВКонтакте, команда видит его в системе, бот уведомляет — без звонков и Excel.
                </p>
              </div>
            </div>

            {/* Visual flow with SVG icons */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }} className="flow-grid">
              {FLOW_STEPS.map((f, i) => (
                <div key={i} style={{ padding: "16px 14px", background: f.bg, border: `1px solid ${f.border}`, borderRadius: 14, display: "flex", flexDirection: "column", gap: 10, position: "relative" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, fontFamily: "var(--font-mono,'JetBrains Mono',monospace)", color: "var(--silver2)" }}>{i + 1}</div>
                  <f.Icon />
                  <div style={{ fontSize: 12, color: "var(--silver)", lineHeight: 1.5, fontWeight: 500 }}>{f.title}</div>
                  {i < FLOW_STEPS.length - 1 && (
                    <div style={{ position: "absolute", right: -9, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: "var(--silver3)", zIndex: 2, lineHeight: 1 }}>›</div>
                  )}
                </div>
              ))}
            </div>

            {/* Chips */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {BRIDGE_CHIPS.map((chip) => (
                <div key={chip} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 40, border: "1px solid rgba(57,255,140,.2)", background: "rgba(57,255,140,.06)", fontSize: 11, fontWeight: 600, color: "var(--neon)" }}>
                  <IconCheck size={10} /> {chip}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <style>{`
        @media(max-width:768px){
          .prob-grid{grid-template-columns:1fr!important}
          .bridge-inner-top{flex-direction:column!important}
          .flow-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:480px){.flow-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
