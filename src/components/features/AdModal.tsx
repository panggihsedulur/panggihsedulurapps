"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function AdModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenAd = sessionStorage.getItem("hasSeenAd");
    if (!hasSeenAd) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenAd", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="/ads/Materi Poster Sinur Pangsoed.webp"
                alt="Pengumuman Panggih Sedulur"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
