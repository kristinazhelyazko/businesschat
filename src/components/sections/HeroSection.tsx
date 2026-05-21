"use client";
import { HERO_STATS } from "@/data/content";
import CtaButtons from "@/components/ui/CtaButtons";
import { IconOrderBox, IconLightning, IconTelegram, IconMonitor } from "@/components/ui/SvgIcons";

export default function HeroSection() {
  return (
    <section className="hero-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "80px 0 60px" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        {[
          { w:600, h:600, bg:"radial-gradient(circle,#39FF8C,transparent 70%)", t:-100, r:-100, delay:"0s" },
          { w:400, h:400, bg:"radial-gradient(circle,#00E5FF,transparent 70%)", b:-50,  l:-100, delay:"-3s" },
          { w:300, h:300, bg:"radial-gradient(circle,#A855F7,transparent 70%)", t:"40%", l:"40%", delay:"-5s" },
        ].map((o, i) => (
          <div key={i} style={{
            position: "absolute", borderRadius: "50%", filter: "blur(80px)", opacity: .15,
            width: o.w, height: o.h, background: o.bg,
            top: o.t, right: o.r, bottom: o.b, left: o.l,
            animation: `orbFloat 8s ease-in-out infinite`,
            animationDelay: o.delay,
          }} />
        ))}
        {/* Silver orb */}
        <div style={{ position:"absolute", borderRadius:"50%", filter:"blur(60px)", animation:"silverPulse 10s ease-in-out infinite", background:"radial-gradient(circle,rgba(184,191,200,.8),transparent 70%)", width:500, height:500, top:"20%", left:"20%" }} />
        {/* Silver rings */}
        {[{w:700,h:700,t:-200,r:-200,d:"0s"},{w:500,h:500,t:-100,r:-100,d:"-3s"},{w:300,h:300,b:80,l:"5%",d:"-5s"}].map((r,i)=>(
          <div key={i} style={{ position:"absolute", borderRadius:"50%", border:"1px solid rgba(184,191,200,.06)", animation:`silverPulse 8s ease-in-out infinite`, animationDelay:r.d, width:r.w, height:r.h, top:r.t, right:r.r, bottom:r.b, left:r.l }} />
        ))}
      </div>

      <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }} className="reveal">
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 14px", background:"rgba(57,255,140,.08)", border:"1px solid rgba(57,255,140,.2)", borderRadius:40, width:"fit-content" }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--neon)", animation:"pulseDot 2s ease-in-out infinite", boxShadow:"0 0 6px #39FF8C", display:"block" }} />
              <span className="hero-badge-text" style={{ fontSize:11, fontWeight:600, color:"var(--neon)", letterSpacing:".08em", textTransform:"uppercase" }}>Telegram · ВКонтакте · Под ключ</span>
            </div>

            <h1 style={{ fontSize:"clamp(32px,4.5vw,56px)", fontWeight:800, lineHeight:1.05, letterSpacing:"-1.5px", color:"var(--white)" }}>
              Продажи в мессенджерах{" "}—{" "}
              <em className="gradient-text" style={{ fontStyle:"normal" }}>готовая система под ключ</em>
            </h1>

            <p style={{ fontSize:16, lineHeight:1.7, color:"var(--silver2)", maxWidth:440 }}>
              Интернет-магазин, управление заказами и боты в Telegram и ВКонтакте. Через месяц у вас будет готовое решение — персонально под ваш бизнес.
            </p>

            <CtaButtons size="md" stack />

            <div className="hero-stats" style={{ display:"flex", gap:28, paddingTop:8, flexWrap:"wrap" }}>
              {HERO_STATS.map((s) => (
                <div key={s.label} style={{ display:"flex", flexDirection:"column", gap:2 }}>
                  <div style={{ fontSize:28, fontWeight:800, color:"var(--white)", letterSpacing:"-1px", fontFamily:"var(--font-mono,'JetBrains Mono',monospace)" }}>
                    {s.val}<span style={{ color:"var(--neon)", fontSize:20 }}>{s.suffix}</span>
                  </div>
                  <div style={{ fontSize:11, color:"var(--silver3)", fontWeight:500, letterSpacing:".06em", textTransform:"uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard preview */}
          <div style={{ position:"relative", transitionDelay:".2s" }} className="reveal">
            {/* Floating badges */}
            <div className="hero-float-badge" style={{ position:"absolute", top:-20, left:-30, animation:"fbFloat 5s ease-in-out infinite", background:"rgba(10,12,20,.92)", backdropFilter:"blur(16px)", border:"1px solid rgba(184,191,200,.16)", borderRadius:12, padding:"10px 14px", boxShadow:"0 16px 40px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.06)", display:"flex", alignItems:"center", gap:8, zIndex:10 }}>
              <IconOrderBox size={18} />
              <div><b style={{ fontSize:12, color:"var(--white)", display:"block" }}>+47 заказов сегодня</b><small style={{ fontSize:10, color:"var(--silver3)" }}>Telegram магазин</small></div>
            </div>
            <div className="hero-float-badge" style={{ position:"absolute", bottom:-16, right:-20, animation:"fbFloat 5s ease-in-out infinite", animationDelay:"-2.5s", background:"rgba(10,12,20,.92)", backdropFilter:"blur(16px)", border:"1px solid rgba(184,191,200,.16)", borderRadius:12, padding:"10px 14px", boxShadow:"0 16px 40px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.06)", display:"flex", alignItems:"center", gap:8, zIndex:10 }}>
              <IconLightning size={18} />
              <div><b style={{ fontSize:12, color:"var(--white)", display:"block" }}>Конверсия 18.4%</b><small style={{ fontSize:10, color:"var(--silver3)" }}>vs 3.2% у сайта</small></div>
            </div>

            <DashboardCard />
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){ .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        @media(max-width:768px){ .hero-grid { gap: 24px !important; } }
      `}</style>
    </section>
  );
}

function DashboardCard() {
  return (
    <div style={{
      background:"rgba(255,255,255,.04)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
      border:"1px solid rgba(184,191,200,.12)", borderRadius:24, padding:24,
      display:"flex", flexDirection:"column", gap:16,
      boxShadow:"0 32px 80px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.08)",
      animation:"floatCard 6s ease-in-out infinite", position:"relative", overflow:"hidden",
    }}>
      {/* Scan line shimmer */}
      <div style={{ position:"absolute", top:0, left:"-100%", width:"60%", height:1, background:"linear-gradient(90deg,transparent,rgba(232,236,242,.5),transparent)", animation:"scanLine 4s ease-in-out infinite" }} />

      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span style={{ fontSize:13, fontWeight:600, color:"var(--silver2)", letterSpacing:".04em", textTransform:"uppercase" }}>Управление заказами</span>
        <span style={{ display:"flex", alignItems:"center", gap:6, fontSize:11, fontFamily:"var(--font-mono)", color:"var(--neon)" }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--neon)", boxShadow:"0 0 8px #39FF8C", display:"inline-block" }} />Live
        </span>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
        {[
          { label:"Выручка / мес", value:"₽ 284к", sub:"↑ +34% к прошлому мес.", accent:true, subColor:"var(--neon)" },
          { label:"Активных заказов", value:"47", sub:"12 новых сегодня", accent:false, subColor:"var(--neon2)" },
          { label:"Клиентская база", value:"1 284", sub:"+180 за месяц", accent:false, subColor:"var(--silver2)" },
          { label:"Время ответа", value:"<2s", sub:"Бот 24/7", accent:false, subColor:"var(--neon)" },
        ].map((m, i) => (
          <div key={i} style={{
            background: m.accent ? "linear-gradient(135deg,rgba(57,255,140,.08),rgba(0,229,255,.06))" : "rgba(255,255,255,.04)",
            border: m.accent ? "1px solid rgba(57,255,140,.2)" : "1px solid var(--border)",
            borderRadius:16, padding:14,
          }}>
            <div style={{ fontSize:10, color:"var(--silver3)", fontWeight:500, letterSpacing:".08em", textTransform:"uppercase", marginBottom:6 }}>{m.label}</div>
            <div style={{ fontSize:22, fontWeight:800, letterSpacing:"-1px", lineHeight:1, ...(m.accent ? { background:"linear-gradient(135deg,#39FF8C,#00E5FF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" } : { color:"var(--white)" }) }}>{m.value}</div>
            <div style={{ fontSize:10, color:m.subColor, marginTop:4, fontWeight:500 }}>{m.sub}</div>
          </div>
        ))}
      </div>

      {[{label:"Telegram",val:"₽ 192к",pct:68,fill:"fill-neon"},{label:"ВКонтакте",val:"₽ 92к",pct:32,fill:"fill-purple"}].map((b)=>(
        <div key={b.label} style={{ display:"flex", flexDirection:"column", gap:6 }}>
          <div style={{ display:"flex", justifyContent:"space-between" }}>
            <span style={{ fontSize:11, color:"var(--silver2)" }}>{b.label}</span>
            <span style={{ fontSize:11, color:"var(--white)", fontWeight:600, fontFamily:"var(--font-mono)" }}>{b.val}</span>
          </div>
          <div style={{ height:4, background:"rgba(255,255,255,.06)", borderRadius:2, overflow:"hidden" }}>
            <div className={`bar-fill ${b.fill}`} style={{ height:"100%", borderRadius:2, width:`${b.pct}%`, animation:"barGrow 1.5s ease-out forwards" }} />
          </div>
        </div>
      ))}

      {[
        { icon:<IconTelegram size={14}/>, iconBg:"rgba(57,255,140,.1)", name:"Заказ #4821 — Букет пионов «Нежность»", meta:"2 мин. назад · ₽ 4 800", statusLabel:"Новый", statusStyle:{ background:"rgba(57,255,140,.12)", color:"var(--neon)" } },
        { icon:<IconMonitor size={14}/>, iconBg:"rgba(0,229,255,.1)", name:"Заказ #4820 — Торт «Малина-фисташка»", meta:"11 мин. назад · ₽ 3 200", statusLabel:"Выполнен", statusStyle:{ background:"rgba(255,255,255,.06)", color:"var(--silver2)" } },
      ].map((o, i) => (
        <div key={i} className="dashboard-order-row" style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px", background:"rgba(255,255,255,.03)", border:"1px solid var(--border)", borderRadius:10 }}>
          <div style={{ width:28, height:28, borderRadius:8, background:o.iconBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{o.icon}</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:11, fontWeight:600, color:"var(--white)" }}>{o.name}</div>
            <div style={{ fontSize:10, color:"var(--silver3)", marginTop:1 }}>{o.meta}</div>
          </div>
          <span style={{ fontSize:10, fontWeight:600, padding:"3px 8px", borderRadius:20, ...o.statusStyle }}>{o.statusLabel}</span>
        </div>
      ))}
    </div>
  );
}
