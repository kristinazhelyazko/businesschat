"use client";
import { SOLUTIONS, PLATFORMS } from "@/data/content";
import CtaButtons from "@/components/ui/CtaButtons";
function ShopIcon()  { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round"/></svg>; }
function OrdersIcon(){ return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 12h6M9 16h4" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/></svg>; }
function FullIcon()  { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="#A855F7" strokeWidth="1.5" strokeLinejoin="round"/></svg>; }
function TgIcon()    { return <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function VkIcon()    { return <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#00E5FF" strokeWidth="1.5"/><path d="M8 21h8M12 17v4" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/></svg>; }
function MultiIcon() { return <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#A855F7" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round"/></svg>; }

const SOL_ICONS: Record<string, React.ReactNode> = { shop:<ShopIcon/>, orders:<OrdersIcon/>, full:<FullIcon/> };
const PLAT_ICONS: Record<string, React.ReactNode> = { telegram:<TgIcon/>, vk:<VkIcon/>, multi:<MultiIcon/> };
const ICON_CLS: Record<string, string> = {
  shop:"icon-neon", orders:"icon-cyan", full:"icon-purple",
  telegram:"icon-neon", vk:"icon-cyan", multi:"icon-purple",
};

interface StepLabelProps { num: string; title: string; sub: string }
function StepLabel({ num, title, sub }: StepLabelProps) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"4px 12px", background:"rgba(57,255,140,.08)", border:"1px solid rgba(57,255,140,.2)", borderRadius:40 }}>
          <span style={{ fontSize:10, fontWeight:700, fontFamily:"var(--font-mono,'JetBrains Mono',monospace)", color:"var(--neon)", letterSpacing:".12em" }}>ШАГ {num}</span>
        </div>
        <div style={{ height:1, flex:1, background:"linear-gradient(90deg,rgba(57,255,140,.18),transparent)" }} />
      </div>
      <h2 style={{ fontSize:"clamp(22px,3vw,36px)", fontWeight:800, letterSpacing:"-.8px", color:"var(--white)", lineHeight:1.1, marginBottom:8 }}>
        {title}
      </h2>
      <p style={{ fontSize:14, color:"var(--silver2)", lineHeight:1.65 }}>{sub}</p>
    </div>
  );
}

export default function SolutionsSection() {
  return (
    <section id="solutions" style={{ padding:"60px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>

        {/* ══ STEP 1 ══ */}
        <div className="reveal">
          <StepLabel
            num="1"
            title="Выберите, что нужно вашему бизнесу"
            sub="Три готовых решения. Берёте то, что подходит сейчас — при необходимости расширите позже."
          />
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, marginBottom:60 }} className="sol-grid">
          {SOLUTIONS.map((s, i) => (
            <div key={s.id} className="glass-card reveal"
              style={{ padding:26, display:"flex", flexDirection:"column", gap:16, position:"relative", overflow:"hidden",
                transitionDelay:`${i*0.09}s`,
                ...(s.highlight ? { border:"1px solid rgba(168,85,247,.28)" } : {}) }}>
              {s.highlight && <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(168,85,247,.05),rgba(0,229,255,.03))", pointerEvents:"none" }} />}
              {s.badge && (
                <div style={{ position:"absolute", top:-1, left:"50%", transform:"translateX(-50%)", background:"linear-gradient(90deg,#A855F7,#00E5FF)", color:"#fff", fontSize:9, fontWeight:800, padding:"3px 14px", borderRadius:"0 0 9px 9px", letterSpacing:".08em", textTransform:"uppercase" }}>{s.badge}</div>
              )}

              {/* Icon row */}
              <div style={{ display:"flex", alignItems:"center", gap:10, paddingTop: s.badge ? 8 : 0 }}>
                <div className={`icon-wrap ${ICON_CLS[s.id]}`} style={{ width:44, height:44, borderRadius:13 }}>{SOL_ICONS[s.id]}</div>
                <span style={{ fontSize:10, fontWeight:700, color:"var(--silver3)", letterSpacing:".09em", textTransform:"uppercase" }}>{s.tag}</span>
              </div>

              {/* Title + desc */}
              <div>
                <div style={{ fontSize:19, fontWeight:800, color:"var(--white)", letterSpacing:"-.4px", marginBottom:7 }}>{s.title}</div>
                <p style={{ fontSize:13, color:"var(--silver2)", lineHeight:1.65 }}>{s.desc}</p>
              </div>

              {/* Includes list */}
              <div style={{ display:"flex", flexDirection:"column", gap:7, flex:1 }}>
                {s.includes.map((item, ii) => (
                  <div key={ii} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:12 }}>
                    <span style={{ color:"var(--neon)", flexShrink:0, marginTop:1 }}>✓</span>
                    <span style={{ color:"var(--silver)" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div style={{ padding:"12px 14px", background:"rgba(255,255,255,.035)", borderRadius:11, border:"1px solid var(--border)", display:"flex", flexDirection:"column", gap:8 }}>
                {s.metrics.map((m, mi) => (
                  <div key={mi} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:11,
                    paddingBottom: mi < s.metrics.length-1 ? 8 : 0,
                    borderBottom: mi < s.metrics.length-1 ? "1px solid var(--border)" : "none" }}>
                    <span style={{ color:"var(--silver3)" }}>{m.label}</span>
                    <span style={{ color:"var(--neon)", fontWeight:700, fontFamily:"var(--font-mono,'JetBrains Mono',monospace)" }}>{m.value}</span>
                  </div>
                ))}
              </div>

              <CtaButtons
                size="card"
                primaryVariant="outline"
                solutionId={s.id as "shop" | "orders" | "full"}
                stack
              />
            </div>
          ))}
        </div>

        {/* ══ STEP 2 ══ */}
        <div className="reveal">
          <StepLabel
            num="2"
            title="Выберите, где живут ваши клиенты"
            sub="Telegram, ВКонтакте или сразу оба — система работает на выбранной платформе."
          />
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, marginBottom:0 }} className="plat-grid reveal">
          {PLATFORMS.map((p) => (
            <div key={p.id} className="glass-card"
              style={{ padding:20, display:"flex", flexDirection:"column", gap:12,
                ...(p.featured ? { border:"1px solid rgba(168,85,247,.28)", background:"linear-gradient(160deg,rgba(168,85,247,.06),rgba(0,229,255,.04),var(--glass))" } : {}) }}>
              {p.badge && (
                <div style={{ position:"absolute", top:12, right:12, fontSize:9, fontWeight:700, padding:"2px 9px", borderRadius:20, background:"rgba(168,85,247,.15)", color:"#C084FC", border:"1px solid rgba(168,85,247,.28)", letterSpacing:".06em", textTransform:"uppercase" }}>{p.badge}</div>
              )}
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div className={`icon-wrap ${ICON_CLS[p.id]}`} style={{ width:38, height:38, borderRadius:11 }}>{PLAT_ICONS[p.icon]}</div>
                <div>
                  <div style={{ fontSize:15, fontWeight:800, color:"var(--white)", letterSpacing:"-.3px" }}>{p.name}</div>
                  <div style={{ fontSize:11, color:"var(--silver3)", marginTop:1 }}>{p.sub}</div>
                </div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                {p.items.map((item, ii) => (
                  <div key={ii} style={{ display:"flex", alignItems:"flex-start", gap:7, fontSize:12, color:item.hi?"var(--white)":"var(--silver2)", fontWeight:item.hi?500:400 }}>
                    <span style={{ flexShrink:0, color:item.hi?"var(--neon)":"var(--silver3)" }}>{item.hi?"✓":"—"}</span>
                    {item.text}
                  </div>
                ))}
              </div>
              {p.note && (
                <div style={{ fontSize:10, color:"var(--silver3)", padding:"5px 9px", background:"rgba(255,255,255,.03)", borderRadius:7, border:"1px solid var(--border)", lineHeight:1.5 }}>ℹ {p.note}</div>
              )}
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media(max-width:1024px){.sol-grid,.plat-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:640px){.sol-grid,.plat-grid{grid-template-columns:1fr!important}}
        .sol-cta-btn:hover{
          background: linear-gradient(135deg, var(--neon), var(--neon2)) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(57,255,140,.35) !important;
        }
      `}</style>
    </section>
  );
}
