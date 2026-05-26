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
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export default function ImageCarouselHero({
  images,
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotatingCards, setRotatingCards] = useState<number[]>([]);
  const [radius, setRadius] = useState(180);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive radius — recalculate when container resizes
  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        // On mobile: fill most of the width; on desktop: cap at 200px
        const cardHalf = 64; // w-32 = 128px / 2
        const padding = 20;
        const computed = w / 2 - cardHalf - padding;
        setRadius(Math.min(200, Math.max(80, computed)));
      }
    };

    updateRadius();
    const ro = new ResizeObserver(updateRadius);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => prev.map((v) => (v + 0.4) % 360));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Initialize angles
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

  // Height = diameter + card height + padding so nothing is ever clipped
  const cardH = 160; // h-40
  const diameter = radius * 2;
  const containerH = diameter + cardH + 48;

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Carousel Container — height adapts to radius */}
      <div
        className="relative w-full"
        style={{ height: containerH }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {}}
        onMouseLeave={() =>
          setMousePosition({ x: 0.5, y: 0.5 })
        }
      >
        {/* Rotating Image Cards */}
        <div className="absolute inset-0 flex items-center justify-center">
          {images.map((image, index) => {
            const angle = (rotatingCards[index] || 0) * (Math.PI / 180);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const perspectiveX = (mousePosition.x - 0.5) * 16;
            const perspectiveY = (mousePosition.y - 0.5) * 16;

            return (
              <div
                key={image.id}
                className="absolute w-32 h-40 sm:w-36 sm:h-44 transition-all duration-300"
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
                  style={{ transformStyle: "preserve-3d" }}
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
  );
}
