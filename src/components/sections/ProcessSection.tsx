import CtaButtons from "@/components/ui/CtaButtons";

// SVG icons in site style — replacing emojis
function IconDemo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="#39FF8C" strokeWidth="1.5"/>
      <path d="M8 21h8M12 17v4" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="10" r="3" stroke="#39FF8C" strokeWidth="1.2"/>
      <path d="M7 10h2M15 10h2" stroke="#39FF8C" strokeWidth="1" strokeLinecap="round" opacity=".5"/>
    </svg>
  );
}
function IconTasks() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 12l2 2 4-4" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconSolution() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="#A855F7" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
function IconTime() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#B8BFC8" strokeWidth="1.5"/>
      <path d="M12 7v5l3 3" stroke="#B8BFC8" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const DEMO_FEATURES = [
  {
    Icon: IconDemo,
    iconBg: "rgba(57,255,140,.1)",
    iconBorder: "rgba(57,255,140,.2)",
    title: "Показываем живую систему",
    desc: "Вы видите реальный магазин и бота в работе — не презентацию, а готовый продукт.",
  },
  {
    Icon: IconTasks,
    iconBg: "rgba(0,229,255,.1)",
    iconBorder: "rgba(0,229,255,.2)",
    title: "Разбираем ваши задачи",
    desc: "Задаём вопросы о вашем бизнесе и показываем, как именно это решается.",
  },
  {
    Icon: IconSolution,
    iconBg: "rgba(168,85,247,.1)",
    iconBorder: "rgba(168,85,247,.2)",
    title: "Предлагаем конкретное решение",
    desc: "В конце встречи — понятный список: что берём, какая платформа, какие модули.",
  },
  {
    Icon: IconTime,
    iconBg: "rgba(184,191,200,.08)",
    iconBorder: "rgba(184,191,200,.15)",
    title: "30–60 минут онлайн",
    desc: "Без поездок. Связываемся в Telegram, удобно для вас по времени.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="site-section">
      <div className="site-container">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          className="reveal start-grid"
        >
          {/* ── Left: heading + CTA ── */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
            <div>
              <div className="section-label" style={{ marginBottom: 12 }}>Начало работы</div>
              <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-1px", color: "var(--white)", lineHeight: 1.1, marginBottom: 14 }}>
                С чего начать?<br/>
                <em style={{ fontStyle: "normal", background: "linear-gradient(135deg,#39FF8C,#00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  С бесплатной демонстрации
                </em>
              </h2>
              <p style={{ fontSize: 14, color: "var(--silver2)", lineHeight: 1.75, marginBottom: 8 }}>
                Покажем систему в работе, разберём ваши задачи и предложим конкретное решение — прямо на встрече.
              </p>
              <p style={{ fontSize: 14, color: "var(--silver2)", lineHeight: 1.75 }}>
                Без обязательств. Если останутся вопросы — созвонимся ещё раз.
              </p>
            </div>
            <CtaButtons size="lg" showContact stack />
          </div>

          {/* ── Right: feature cards with SVG icons ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {DEMO_FEATURES.map(({ Icon, iconBg, iconBorder, title, desc }, i) => (
              <div key={i} className="glass-card" style={{ padding: "15px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: iconBg, border: `1px solid ${iconBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--white)", marginBottom: 3 }}>{title}</div>
                  <div style={{ fontSize: 12, color: "var(--silver2)", lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.start-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
