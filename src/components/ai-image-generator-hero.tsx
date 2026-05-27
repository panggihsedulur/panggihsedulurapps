"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCard {
  id: string;
  src: string;
  alt: string;
  rotation: number;
}

interface ImageCarouselHeroProps {
  images: ImageCard[];
}

export function ImageCarouselHero({ images }: ImageCarouselHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotatingCards, setRotatingCards] = useState<number[]>([]);
  const [isInView, setIsInView] = useState(false);
  const [radius, setRadius] = useState(180);

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 400) setRadius(100);
      else if (w < 640) setRadius(130);
      else if (w < 1024) setRadius(160);
      else setRadius(180);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // Continuous rotation animation
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setRotatingCards((prev) => prev.map((_, i) => (prev[i] + 0.5) % 360));
    }, 50);

    return () => clearInterval(interval);
  }, [isInView]);

  // Initialize rotating cards
  useEffect(() => {
    setRotatingCards(images.map((_, i) => i * (360 / images.length)));
  }, [images.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div className="relative w-full from-background via-background to-background overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-6xl h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[500px] mb-8 sm:mb-12 lg:mb-16"
          onMouseMove={handleMouseMove}
        >
          {/* Rotating Image Cards */}
          <div className="absolute inset-0 flex items-center justify-center perspective">
            {images.map((image, index) => {
              const angle = (rotatingCards[index] || 0) * (Math.PI / 180);
              const orbitRadius = isInView ? radius : 0;
              const x = Math.cos(angle) * orbitRadius;
              const y = Math.sin(angle) * orbitRadius;

              // 3D perspective effect based on mouse position
              const perspectiveX = (mousePosition.x - 0.5) * 20;
              const perspectiveY = (mousePosition.y - 0.5) * 20;

              return (
                <div
                  key={image.id}
                  className="absolute w-20 h-28 xs:w-24 xs:h-32 sm:w-32 sm:h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 transition-all duration-700 ease-out"
                  style={{
                    transform: `
                      translate(${x}px, ${y}px)
                      rotateX(${perspectiveY}deg)
                      rotateY(${perspectiveX}deg)
                      rotateZ(${image.rotation}deg)
                    `,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={cn(
                      "relative w-full h-full rounded-2xl overflow-hidden shadow-2xl",
                      "transition-all duration-300 hover:shadow-3xl hover:scale-110",
                      "cursor-pointer group",
                    )}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={index < 3}
                    />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
