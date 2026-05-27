"use client";

import { motion } from "framer-motion";
import { ImageCarouselHero } from "@/components/ai-image-generator-hero";

const demoImages = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1684369176170-463e84248b70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    alt: "Mountain landscape",
    rotation: -15,
  },
  {
    id: "2",
    src: "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    alt: "Abstract art",
    rotation: -8,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1524673360092-e07b7ae58845?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    alt: "City skyline",
    rotation: 5,
  },
  {
    id: "4",
    src: "https://plus.unsplash.com/premium_photo-1680610653084-6e4886519caf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    alt: "Nature photography",
    rotation: 12,
  },
  {
    id: "5",
    src: "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    alt: "Digital art",
    rotation: -12,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1562575214-da9fcf59b907?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    alt: "Tropical leaves",
    rotation: 8,
  },
  {
    id: "7",
    src: "https://plus.unsplash.com/premium_photo-1676637656210-390da73f4951?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    alt: "Tropical leaves",
    rotation: 8,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1664448003794-2d446c53dcae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    alt: "Tropical leaves",
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
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tighter text-center text-gradient mb-2"
          >
            <span className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2">
              A
            </span>
            pa itu{" "}
            <span className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2">
              P
            </span>
            anggih{" "}
            <span className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2">
              S
            </span>
            edulur
          </h2>{" "}
          <p className="text-center  max-w-sm transition-colors"></p>
          <p className="mt-5 text-neutral-500  text-lg leading-relaxed">
            Panggih Sedulur merupakan program pengenalan Unit Kegiatan Mahasiswa
            (UKM) dan Paguyuban Mahasiswa Daerah kepada mahasiswa aktif
            Universitas Jenderal Soedirman, terutama kepada mahasiswa baru.
          </p>
        </div>
        <div className="">
          <ImageCarouselHero images={demoImages} />
        </div>
      </motion.div>
    </section>
  );
}
