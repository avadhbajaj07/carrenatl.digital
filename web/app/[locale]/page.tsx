import { HeroSection } from "@/components/marketing/HeroSection";
import { ProblemBand } from "@/components/marketing/ProblemBand";
import { WhatIsSection } from "@/components/marketing/WhatIsSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { SocialProof } from "@/components/marketing/SocialProof";
import { SupportBand } from "@/components/marketing/SupportBand";
import { PricingSection } from "@/components/marketing/PricingSection";
import { FaqSection } from "@/components/marketing/FaqSection";
import { FooterCTABand } from "@/components/marketing/FooterCTABand";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* 11 Section Marketing Assembly */}
      <HeroSection />
      <ProblemBand />
      <WhatIsSection />
      <HowItWorks />
      <SocialProof />
      <SupportBand />
      <PricingSection />
      <FaqSection />
      <FooterCTABand />

      {/* Persistent global CTAs */}
      <StickyMobileCTA />
    </div>
  );
}
