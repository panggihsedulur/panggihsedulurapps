"use client";

import { motion } from "framer-motion";
import { ImageCarouselHero } from "@/components/ai-image-generator-hero";

const demoImages = [
  {
    id: "1",
    src: "/pangsudfoto/DSC00583.webp",
    alt: "Mountain landscape",
    rotation: -15,
  },
  {
    id: "2",
    src: "/pangsudfoto/DSC01181.webp",
    alt: "Abstract art",
    rotation: -8,
  },
  {
    id: "3",
    src: "/pangsudfoto/DSC01555 (Small).webp",
    alt: "City skyline",
    rotation: 5,
  },
  {
    id: "4",
    src: "/pangsudfoto/DSCF1105.webp",
    alt: "Nature photography",
    rotation: 12,
  },
  {
    id: "5",
    src: "/pangsudfoto/DSCF1128 (Small).webp",
    alt: "Digital art",
    rotation: -12,
  },
  {
    id: "6",
    src: "/pangsudfoto/DSCF1383.webp",
    alt: "AI technology visualization",
    rotation: 8,
  },
  {
    id: "7",
    src: "/pangsudfoto/IMG_1023.webp",
    alt: "Futuristic digital landscape",
    rotation: 8,
  },
  {
    id: "8",
    src: "/pangsudfoto/IMG_1780 (Small).webp",
    alt: "Creative digital artwork",
    rotation: 8,
  },
];

export function PanggihIntroSection() {
  return (
    <section
      className="relative mt-14  px-4 sm:px-6"
      aria-labelledby="intro-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
      >
        <div className="max-w-3xl mx-auto text-center  relative z-10">
          <h2
            id="intro-heading"
            aria-label="Apa itu Panggih Sedulur"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tighter text-center text-gradient mb-2"
          >
            <span
              className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
              aria-hidden="true"
            >
              A
            </span>
            pa itu{" "}
            <span
              className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
              aria-hidden="true"
            >
              P
            </span>
            anggih{" "}
            <span
              className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
              aria-hidden="true"
            >
              S
            </span>
            edulur
          </h2>{" "}
          <p className="mt-5 text-neutral-500  text-lg leading-relaxed">
            Panggih Sedulur merupakan program pengenalan Unit Kegiatan Mahasiswa
            (UKM) dan Paguyuban Mahasiswa Daerah kepada mahasiswa aktif
            Universitas Jenderal Soedirman, terutama kepada mahasiswa baru.
          </p>
        </div>
        <div className="mt-10 lg:mt-15">
          <ImageCarouselHero images={demoImages} />
        </div>
      </motion.div>
    </section>
  );
}
