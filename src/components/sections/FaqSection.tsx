"use client";
import { useState } from "react";
import { FAQ_ITEMS } from "@/data/content";
import { IconChevronDown } from "@/components/ui/SvgIcons";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding:"60px 0", background:"var(--bg2)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ textAlign:"center", marginBottom:40, display:"flex", flexDirection:"column", alignItems:"center", gap:12 }} className="reveal">
          <div className="section-label">Вопросы</div>
          <h2 style={{ fontSize:"clamp(28px,4vw,44px)", fontWeight:800, letterSpacing:"-1px", color:"var(--white)", lineHeight:1.1 }}>
            Ответы на<br/>
            <em style={{ fontStyle:"normal", background:"linear-gradient(135deg,#39FF8C,#00E5FF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>частые вопросы</em>
          </h2>
        </div>

        <div style={{ maxWidth:720, margin:"0 auto", display:"flex", flexDirection:"column", gap:4 }}>
          {FAQ_ITEMS.map((item,i)=>{
            const isOpen = open === i;
            return (
              <div key={i} className="faq-item reveal" style={{ transitionDelay:`${i*0.04}s`, ...(isOpen?{borderColor:"rgba(184,191,200,.14)"}:{}) }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(184,191,200,.08),transparent)", opacity:isOpen?1:0, transition:"opacity .3s" }} />
                <div onClick={()=>setOpen(isOpen?null:i)} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"17px 20px", cursor:"pointer", userSelect:"none" }}>
                  <span style={{ fontSize:14, fontWeight:600, color:isOpen?"var(--neon)":"var(--white)", lineHeight:1.4, transition:"color .2s" }}>{item.q}</span>
                  <div style={{ width:26, height:26, borderRadius:"50%", border:isOpen?"1px solid rgba(57,255,140,.3)":"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"all .3s", transform:isOpen?"rotate(180deg)":"none", background:isOpen?"rgba(57,255,140,.1)":"transparent", color:isOpen?"var(--neon)":"var(--silver3)" }}>
                    <IconChevronDown size={13} />
                  </div>
                </div>
                <div style={{ padding:isOpen?"0 20px 16px":"0 20px", maxHeight:isOpen?500:0, overflow:"hidden", transition:"all .35s ease" }}>
                  <p style={{ fontSize:13, color:"var(--silver2)", lineHeight:1.75 }}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
