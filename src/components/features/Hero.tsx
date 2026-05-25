"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { GlassButton } from "@/components/ui/glass-button";

// --- MAIN COMPONENT ---
export default function HeroSection() {
  return (
    <div className="relative w-full min-h-dvh text-white overflow-hidden font-sans flex flex-col">
      {/* Background Image with Gradient Mask */}
      <div
        className="absolute inset-0 z-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-100"
        style={{
          maskImage:
            "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      />

      <div className=" relative z-10 mx-auto max-w-7xl w-full flex-1 flex items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center mt-12 lg:mt-0 md:mt-0">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            {/* Badge */}
            {/* <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  
                  
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                </span>
              </div>
            </div> */}
            {/* <h1
          className={`text-5xl mb-3 text-center min-h-24 ${chauPhilomene.className} text-gradient`}
        >
          <span className="font-edwardian text-8xl mr-2">U</span>km
          <span className="font-edwardian text-8xl mr-2">P</span>aguyuban
        </h1> */}
            {/* Heading */}
            <h1
              className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium tracking-tighter leading-[0.9]"
              style={{
                maskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
              }}
            >
              <span className="font-edwardian text-6xl mr-6 sm:text-7xl lg:text-8xl xl:text-[8rem]">
                T
              </span>
              emukan UKM
              <br />
              <span className="bg-linear-to-br from-white via-white to-[#3c5759] bg-clip-text text-transparent">
                & Paguyuban
              </span>
              <br />
              Sesuai Passionmu
            </h1>

            {/* Description */}
            <p className="animate-fade-in delay-300 max-w-xl text-lg text-white leading-relaxed">
              Ikuti kuisioner interaktif untuk mendapatkan rekomendasi Unit
              Kegiatan Mahasiswa dan Paguyuban Daerah yang paling sesuai dengan
              minat, bakat, dan karaktermu.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in delay-400 flex flex-row sm:flex-row gap-4">
              <Link href="kuisioner">
                <GlassButton contentClassName="flex items-center justify-center gap-2 px-4 py-2 sm:px-8 sm:py-4 text-sm font-semibold text-white">
                  Mulai Kuisioner
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </GlassButton>
              </Link>
              <Link
                href="https://www.instagram.com/panggihsedulur/"
                target="_blank"
              >
                <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 sm:px-8 sm:py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]">
                  Kunjungi Instagram
                  <FaInstagram className="w-6 h-6 fill-current" />
                </button>
              </Link>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            {/* <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-2xl"> */}
            <div className="animate-fade-in delay-500 relative h-64 w-64 sm:h-80 sm:w-80 lg:h-125 lg:w-105">
              <Image
                src="/maskot-nunjuk.png"
                alt="Logo Panggih Sedulur"
                fill
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 320px, 256px"
                className="object-contain"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
