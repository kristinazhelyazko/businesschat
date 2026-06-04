import { MODULES } from "@/data/content";
import ContactCtaButton from "@/components/contact/ContactCtaButton";

function ModuleIcon({ name }: { name: string }) {
  const p = { width:19, height:19, viewBox:"0 0 24 24" as const, fill:"none" as const };
  switch(name) {
    case "payment":      return <svg {...p}><rect x="1" y="4" width="22" height="16" rx="2" stroke="#39FF8C" strokeWidth="1.5"/><path d="M1 10h22" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case "broadcast":    return <svg {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a2 2 0 012-1.72h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.09 15.91A16 16 0 0017.1 20.9l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case "promo":        return <svg {...p}><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round"/><circle cx="7" cy="7" r="1.5" fill="#A855F7"/></svg>;
    case "chart-bar":    return <svg {...p}><path d="M3 17l4-8 4 4 4-6 4 5" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "loyalty":      return <svg {...p}><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="#A855F7" strokeWidth="1.5" strokeLinejoin="round"/></svg>;
    case "user-profile": return <svg {...p}><circle cx="12" cy="8" r="4" stroke="#B8BFC8" strokeWidth="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#B8BFC8" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case "bell":         return <svg {...p}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case "search":       return <svg {...p}><circle cx="11" cy="11" r="8" stroke="#B8BFC8" strokeWidth="1.5"/><path d="M21 21l-4.35-4.35" stroke="#B8BFC8" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case "ai":           return <svg {...p}><circle cx="12" cy="12" r="3" stroke="#00E5FF" strokeWidth="1.5"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round"/></svg>;
    default: return null;
  }
}
const ICON_CLS: Record<string,string> = { payment:"icon-neon", broadcast:"icon-neon", promo:"icon-purple", "chart-bar":"icon-neon", loyalty:"icon-purple", "user-profile":"icon-silver", bell:"icon-cyan", search:"icon-silver", ai:"icon-cyan" };

export default function ModulesSection() {
  const priority = MODULES.filter(m => m.priority);
  const rest = MODULES.filter(m => !m.priority);

  return (
    <section id="modules" style={{ padding:"60px 0", background:"var(--bg2)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>

        <div className="reveal" style={{ marginBottom:28 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"4px 12px", background:"rgba(57,255,140,.08)", border:"1px solid rgba(57,255,140,.2)", borderRadius:40 }}>
              <span style={{ fontSize:10, fontWeight:700, fontFamily:"var(--font-mono,'JetBrains Mono',monospace)", color:"var(--neon)", letterSpacing:".12em" }}>ШАГ 3</span>
            </div>
            <div style={{ height:1, flex:1, background:"linear-gradient(90deg,rgba(57,255,140,.18),transparent)" }} />
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:20, flexWrap:"wrap" }}>
            <div>
              <h2 style={{ fontSize:"clamp(22px,3vw,36px)", fontWeight:800, letterSpacing:"-.8px", color:"var(--white)", lineHeight:1.1, marginBottom:8 }}>
                Добавьте функции под задачи бизнеса
              </h2>
              <p style={{ fontSize:14, color:"var(--silver2)", lineHeight:1.65, maxWidth:500 }}>
                Каждый модуль — отдельная опция. Берёте только то, что нужно прямо сейчас.
              </p>
            </div>
            <ContactCtaButton
              showIcon={false}
              className=""
              style={{ padding:"10px 22px", background:"var(--neon)", color:"var(--bg)", fontSize:13, fontWeight:700, borderRadius:40, border:"none", cursor:"pointer", boxShadow:"0 0 20px rgba(57,255,140,.2)", flexShrink:0, whiteSpace:"nowrap" }}
            />
          </div>
        </div>

        {/* Priority modules — highlighted */}
        <div style={{ marginBottom:12 }}>
          <div style={{ fontSize:11, fontWeight:600, color:"var(--silver3)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:10 }}>Популярные</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:11 }} className="mod-priority-grid">
            {priority.map((m,i)=>(
              <div key={i} className="glass-card reveal" style={{ padding:"18px 20px", display:"flex", gap:12, alignItems:"flex-start", transitionDelay:`${i*0.06}s`, border:"1px solid var(--border2)" }}>
                <div className={`icon-wrap ${ICON_CLS[m.icon]}`} style={{ width:40, height:40, borderRadius:11, flexShrink:0 }}>
                  <ModuleIcon name={m.icon} />
                </div>
                <div>
                  <div style={{ fontSize:13, fontWeight:700, color:"var(--white)", letterSpacing:"-.2px", marginBottom:4, lineHeight:1.3 }}>{m.title}</div>
                  <div style={{ fontSize:12, color:"var(--silver2)", lineHeight:1.6 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rest of modules */}
        <div>
          <div style={{ fontSize:11, fontWeight:600, color:"var(--silver3)", letterSpacing:".08em", textTransform:"uppercase", marginBottom:10 }}>Дополнительно</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:10 }}>
            {rest.map((m,i)=>(
              <div key={i} className="glass-card reveal" style={{ padding:"15px 18px", display:"flex", gap:12, alignItems:"flex-start", transitionDelay:`${i*0.05}s` }}>
                <div className={`icon-wrap ${ICON_CLS[m.icon]}`} style={{ width:36, height:36, borderRadius:10, flexShrink:0 }}>
                  <ModuleIcon name={m.icon} />
                </div>
                <div>
                  <div style={{ fontSize:12, fontWeight:700, color:"var(--white)", letterSpacing:"-.2px", marginBottom:3, lineHeight:1.3 }}>{m.title}</div>
                  <div style={{ fontSize:11, color:"var(--silver2)", lineHeight:1.6 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ marginTop:16 }}>
          <div style={{ padding:"11px 16px", background:"rgba(255,255,255,.03)", border:"1px solid var(--border)", borderRadius:12, display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:"var(--neon)", flexShrink:0, boxShadow:"0 0 8px var(--neon)" }} />
            <span style={{ fontSize:12, color:"var(--silver2)", lineHeight:1.6 }}>
              Не знаете, какие модули нужны? Разберём на демонстрации — покажем живой пример и подберём то, что окупится именно в вашем бизнесе.
            </span>
          </div>
        </div>

      </div>
      <style>{`@media(max-width:768px){.mod-priority-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
