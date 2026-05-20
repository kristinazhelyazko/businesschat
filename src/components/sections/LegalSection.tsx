import CtaButtons from "@/components/ui/CtaButtons";

export default function LegalSection() {
  return (
    <section id="legal" style={{ padding: "60px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 80% 50% at 50% 100%, rgba(57,255,140,0.04) 0%, transparent 70%)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        <div className="reveal">
          <div style={{
            borderRadius:24, padding:"40px 44px",
            background:"linear-gradient(135deg,rgba(57,255,140,.07),rgba(0,229,255,.05),rgba(168,85,247,.06))",
            border:"1px solid rgba(57,255,140,.22)",
            position:"relative", overflow:"hidden",
            display:"grid", gridTemplateColumns:"1fr auto", gap:28, alignItems:"center",
          }} className="legal-banner-grid">
            {/* Shimmer lines */}
            <div style={{ position:"absolute", top:-1, left:"8%", right:"8%", height:1, background:"linear-gradient(90deg,transparent,rgba(57,255,140,.5),rgba(0,229,255,.4),transparent)" }} />
            <div style={{ position:"absolute", bottom:-60, right:-60, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle,rgba(168,85,247,.1),transparent 70%)", filter:"blur(40px)", pointerEvents:"none" }} />

            <div style={{ position:"relative", zIndex:1 }}>
              {/* Badge */}
              <div style={{ display:"inline-flex", alignItems:"center", gap:7, padding:"4px 12px", background:"rgba(57,255,140,.1)", border:"1px solid rgba(57,255,140,.25)", borderRadius:40, marginBottom:14 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 12l2 2 4-4" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <span style={{ fontSize:10, fontWeight:700, color:"var(--neon)", letterSpacing:".1em", textTransform:"uppercase" }}>Работаем с юристами</span>
              </div>

              <h2 style={{ fontSize:"clamp(20px,2.8vw,32px)", fontWeight:800, color:"var(--white)", letterSpacing:"-.6px", lineHeight:1.15, marginBottom:12 }}>
                Ваш бизнес защищён с первого дня
              </h2>

              {/* Combined info block */}
              <p style={{ fontSize:14, color:"var(--silver2)", lineHeight:1.75, marginBottom:16, maxWidth:580 }}>
                Юридические документы для интернет-магазина готовят наши партнёры-юристы: публичная оферта, политика персональных данных, согласие, куки, проверка сайта и привязка домена .ru. Вы получаете юридически корректные материалы, подготовленные специально под ваш проект, — а не шаблоны из интернета.
              </p>

              {/* What's included as inline chips */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {["Публичная оферта", "Политика обработки персональных данных", "Согласие на обработку персональных данных", "Политика использования Cookie-файлов", "Проверка сайта на соответствие требованиям", "Оформление и привязка домена .ru"].map((item) => (
                  <div key={item} style={{ display:"flex", alignItems:"center", gap:5, padding:"5px 12px", borderRadius:40, border:"1px solid rgba(57,255,140,.18)", background:"rgba(57,255,140,.05)", fontSize:11, fontWeight:600, color:"var(--silver2)" }}>
                    <span style={{ color:"var(--neon)", fontSize:10 }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ flexShrink:0, position:"relative", zIndex:1 }} className="legal-cta-col">
              <CtaButtons size="md" align="flex-end" stack />
            </div>
          </div>
        </div>

      </div>
      <style>{`
        @media(max-width:900px){.legal-banner-grid{grid-template-columns:1fr!important}.legal-cta-col{align-items:flex-start!important}}
      `}</style>
    </section>
  );
}
