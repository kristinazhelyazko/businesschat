import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealInit from "@/components/layout/RevealInit";
import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ModulesSection from "@/components/sections/ModulesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import LegalSection from "@/components/sections/LegalSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <ProblemsSection />
        <SolutionsSection />
        <ModulesSection />
        <ProcessSection />
        <LegalSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
