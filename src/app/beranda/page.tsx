import type { Metadata } from "next";
import React from "react";
import HeroSection from "@/components/features/Hero";
import Section1 from "@/components/features/Section1";
import { AnimatedMenuDemo } from "@/components/ui/Menu";

export const metadata: Metadata = {
  title: "Beranda Interaktif",
  description:
  alternates: {
    canonical: "/beranda",
  },
};

export default function HeroDemo() {
  return (
    <>
      <AnimatedMenuDemo />
      <HeroSection />
      <Section1 />
    </>
  );
}
