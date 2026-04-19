import type { Metadata } from "next";
import React from "react";
import HeroSection from "@/components/features/Hero";
import Section1 from "@/components/features/Section1";
import { AnimatedMenuDemo } from "@/components/ui/Menu";
import { Footer } from "@/components/footer";

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
      <AnimatedMenuDemo />
      <HeroSection />
      <Section1 />
      <Footer/>
    </>
  );
}
