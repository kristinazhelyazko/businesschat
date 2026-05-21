import CtaButtons from "@/components/ui/CtaButtons";

export default function CtaSection() {
  return (
    <section id="contact" className="cta-section" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "80px 0" }}>
      <div style={{ position:"absolute", width:600, height:600, borderRadius:"50%", filter:"blur(100px)", opacity:.1, top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"radial-gradient(circle,#39FF8C,#00E5FF,transparent 70%)" }} />
      {[{w:600,d:"0s"},{w:400,d:"-3s"}].map((r,i)=>(
        <div key={i} style={{ position:"absolute", width:r.w, height:r.w, borderRadius:"50%", border:"1px solid rgba(184,191,200,.05)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", animation:`silverPulse 6s ease-in-out infinite`, animationDelay:r.d, pointerEvents:"none" }} />
      ))}
      <div className="site-container reveal" style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-1.5px", color: "var(--white)", lineHeight: 1.1, marginBottom: 14 }}>
          Готовы запустить<br/>
          <em style={{ fontStyle: "normal", background: "linear-gradient(135deg,#39FF8C,#00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>вашу систему?</em>
        </h2>
        <p style={{ fontSize: 16, color: "var(--silver2)", marginBottom: 32, lineHeight: 1.7 }}>
          Покажем живую систему и вместе подберём решение под ваш бизнес.
        </p>
        <CtaButtons size="xl" showContact align="center" stack />
      </div>
    </section>
  );
}
