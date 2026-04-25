import type { Metadata } from "next";
import React from "react";
import HeroSection from "@/components/features/Hero";
import Section1 from "@/components/features/Section1";

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
    </>
  );
}
