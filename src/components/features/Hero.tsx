"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { GlassButton } from "@/components/ui/glass-button";

// --- MAIN COMPONENT ---
export default function HeroSection() {
  const rightColumnWrapperClass =
    "lg:col-span-5 flex items-center justify-center lg:justify-end p-4 lg:p-0";
  const rightInteractiveGroupClass =
    "group relative flex items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-none transition-all duration-500 ease-out hover:-translate-y-2";
  const ambientGlowClass =
    "absolute h-72 w-72 lg:h-[28rem] lg:w-[28rem] rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-[80px] animate-pulse transition-all duration-500 group-hover:scale-110 group-hover:from-cyan-500/30";
  const accentOrbTopRightClass =
    "absolute -top-12 -right-6 h-32 w-32 rounded-full bg-orange-400/20 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500";
  const accentOrbBottomLeftClass =
    "absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl opacity-60";
  const glassContainerClass =
    "relative w-full rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.02] backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] before:absolute before:inset-0 before:rounded-[2.5rem] before:bg-gradient-to-tr before:from-transparent before:via-white/5 before:to-white/20 before:-z-10 p-8 lg:p-12 overflow-hidden";
  const innerSheenClass =
    "absolute top-0 left-0 w-full h-full bg-radial-gradient from-white/5 to-transparent pointer-events-none";
  const logoWrapperClass =
    "relative w-full aspect-square max-w-[16rem] sm:max-w-[18rem] lg:max-w-[24rem] xl:max-w-[26rem] mx-auto animate-float transition-transform duration-700 ease-out group-hover:scale-105";

  return (
    <div className="relative w-full min-h-dvh text-white overflow-hidden font-sans flex flex-col">
      {/* Background Image with Gradient Mask */}
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage:
            "linear-gradient(180deg, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent, black 0%, black 80%, transparent)",
        }}
      >
        <Image
          src="/bghero.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          quality={80}
        />
      </div>

      <div className=" relative z-10 mx-auto max-w-7xl w-full flex-1 flex items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center mt-17 lg:mt-0 md:mt-0">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <h1
              aria-label="Temukan UKM & Paguyuban Sesuai Passionmu"
              className="animate-fade-in delay-200 text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium tracking-tighter leading-[0.9] origin-left scale-[1.25] sm:scale-100"
              style={{
                maskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
              }}
            >
              <span
                aria-hidden="true"
                className="font-edwardian text-5xl mr-6 sm:text-7xl lg:text-8xl xl:text-[8rem]"
              >
                T
              </span>
              emukan UKM
              <br />
              <span className="bg-linear-to-br from-white via-white to-[#59c5cd] bg-clip-text text-transparent">
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
          <div className={rightColumnWrapperClass}>
            <div className={rightInteractiveGroupClass}>
              <div className={ambientGlowClass} />
              <div className={accentOrbTopRightClass} />
              <div className={accentOrbBottomLeftClass} />
              <div className={glassContainerClass}>
                <div className={innerSheenClass} />
                <div className={logoWrapperClass}>
                  <Image
                    src="/logo-pangsud.webp"
                    alt="Logo Panggih Sedulur"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 320px, 256px"
                    className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:drop-shadow-[0_30px_50px_rgba(6,182,212,0.25)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
