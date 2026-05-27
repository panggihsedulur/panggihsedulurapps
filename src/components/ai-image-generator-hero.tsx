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
    <div className="relative w-full min-h-screen  from-background via-background to-background overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-6xl h-96 sm:h-[500px] mb-12 sm:mb-16"
          onMouseMove={handleMouseMove}
        >
          {/* Rotating Image Cards */}
          <div className="absolute inset-0 flex items-center justify-center perspective">
            {images.map((image, index) => {
              const angle = (rotatingCards[index] || 0) * (Math.PI / 180);
              const radius = isInView ? 180 : 0;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              // 3D perspective effect based on mouse position
              const perspectiveX = (mousePosition.x - 0.5) * 20;
              const perspectiveY = (mousePosition.y - 0.5) * 20;

              return (
                <div
                  key={image.id}
                  className="absolute w-32 h-40 sm:w-40 sm:h-48 transition-all duration-700 ease-out"
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
