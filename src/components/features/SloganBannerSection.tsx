"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function SloganBannerSection() {
  return (
    <section className="relative pb-14 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="max-w-3xl mx-auto"
      >
        <Image
          src="https://raw.githubusercontent.com/panggihsedulur/asset/refs/heads/main/tema-besar.webp"
          alt="Find Your Playground, Find Your People"
          width={1920}
          height={680}
          priority
          className="slogan-img"
          sizes="100vw"
          draggable={false}
        />
      </motion.div>
    </section>
  );
}
