import type { Metadata } from "next";
import React from "react";
import HeroSection from "@/components/features/Hero";
import { PanggihIntroSection } from "@/components/features/PanggihIntroSection";
import { MaskotProfilesSection } from "@/components/features/MaskotProfilesSection";
import { SloganBannerSection } from "@/components/features/SloganBannerSection";

import { GridPattern } from "@/components/ui/grid-pattern";
import App from "@/components/testimonial-v2";
import TestimonialsSection from "@/components/testimonial-v2";

export const metadata: Metadata = {
  title: "Panggih Sedulur Beranda",
  description:
    "Eksplorasi pengalaman interaktif Panggih Sedulur untuk mengenal UKM dan komunitas mahasiswa UNSOED.",
  alternates: {
    canonical: "/beranda",
  },
};

export default function Beranda() {
  return (
    <>
      <HeroSection />
      <div className="relative bg-white overflow-hidden">
        {/* Background: white + grid (#5aa0ac) */}
        <div className="absolute inset-0 pointer-events-none">
          <GridPattern
            width={48}
            height={48}
            className="absolute inset-0 stroke-[#5aa0ac]/25 fill-[#5aa0ac]/[0.06] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_82%)]"
          />
        </div>
        <div className="relative z-10">
          <PanggihIntroSection />
          <MaskotProfilesSection />
          <SloganBannerSection />
          <TestimonialsSection />
        </div>
      </div>
    </>
  );
}
