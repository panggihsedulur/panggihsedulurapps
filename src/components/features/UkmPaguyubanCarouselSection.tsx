"use client";

import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ExpandableCardDemo } from "@/components/features/ExpandableCardDemo";
import {
  expandableCards,
  type ExpandableCardItem,
} from "@/data/UkmPaguyubanData";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSectionProps {
  title: string;
  subtitle: string;
  items: ExpandableCardItem[];
  tone?: "ukm" | "paguyuban";
}

const CARD_WIDTH_CLASSES =
  "w-full max-w-[320px] sm:w-[250px] sm:max-w-none md:w-[280px] lg:w-[260px] xl:w-[280px]";

function CarouselSection({
  title,
  subtitle,
  items,
  tone,
}: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const pointerState = useRef({
    isDown: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    moved: false,
    captured: false,
  });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPaused, setIsAutoPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < maxScrollLeft - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.85) * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || items.length === 0) return;

    const intervalId = window.setInterval(() => {
      if (isAutoPaused) return;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScrollLeft - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
      const amount = Math.round(el.clientWidth * 0.85);
      el.scrollBy({ left: amount, behavior: "smooth" });
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [isAutoPaused, items.length]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    pointerState.current = {
      isDown: true,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: el.scrollLeft,
      moved: false,
      captured: false,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !pointerState.current.isDown) return;
    const deltaX = event.clientX - pointerState.current.startX;
    const deltaY = event.clientY - pointerState.current.startY;
    if (!pointerState.current.moved) {
      const movedEnough =
        Math.abs(deltaX) > 6 && Math.abs(deltaX) > Math.abs(deltaY);
      if (movedEnough) {
        pointerState.current.moved = true;
        if (!pointerState.current.captured) {
          event.currentTarget.setPointerCapture(event.pointerId);
          pointerState.current.captured = true;
        }
        setIsDragging(true);
      }
    }
    if (pointerState.current.moved) {
      el.scrollLeft = pointerState.current.scrollLeft - deltaX;
    }
  };

  const stopPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerState.current.isDown) return;
    pointerState.current.isDown = false;
    setIsDragging(false);
    if (pointerState.current.captured) {
      event.currentTarget.releasePointerCapture(event.pointerId);
      pointerState.current.captured = false;
    }
  };

  return (
    <section className="" aria-label={title}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
              {title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-2xl">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={`Geser ${title} ke kiri`}
              onClick={() => scrollByAmount(-1)}
              disabled={!canScrollLeft}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition",
                canScrollLeft
                  ? "text-neutral-800 hover:-translate-y-0.5 hover:shadow"
                  : "cursor-not-allowed text-neutral-300",
              )}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={`Geser ${title} ke kanan`}
              onClick={() => scrollByAmount(1)}
              disabled={!canScrollRight}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition",
                canScrollRight
                  ? "text-neutral-800 hover:-translate-y-0.5 hover:shadow"
                  : "cursor-not-allowed text-neutral-300",
              )}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-6 lg:mx-auto lg:max-w-[1112px] lg:overflow-hidden xl:max-w-[1192px]">
          <div
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopPointer}
            onPointerLeave={stopPointer}
            onClickCapture={(event) => {
              if (pointerState.current.moved) {
                event.preventDefault();
                event.stopPropagation();
                pointerState.current.moved = false;
              }
            }}
            className={cn(
              "flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth px-4 sm:px-0",
              "justify-center sm:justify-start",
              "touch-pan-y [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
              isDragging ? "cursor-grabbing" : "cursor-grab",
            )}
            onMouseEnter={() => setIsAutoPaused(true)}
            onMouseLeave={() => setIsAutoPaused(false)}
            onFocus={() => setIsAutoPaused(true)}
            onBlur={() => setIsAutoPaused(false)}
          >
            {items.map((card) => (
              <div
                key={card.id}
                className={cn(
                  "snap-center sm:snap-start shrink-0",
                  CARD_WIDTH_CLASSES,
                )}
              >
                <ExpandableCardDemo
                  title={card.title}
                  src={card.src}
                  description={card.description}
                  category={card.category}
                  detailTitle={card.detailTitle}
                  detailBody={card.detailBody}
                  detailFooterTitle={card.detailFooterTitle}
                  photoUrl={card.photoUrl}
                  logoUrl={card.logoUrl}
                  type={card.type}
                  contactPerson={card.contactPerson}
                  contact={card.contact}
                  instagram={card.instagram}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function UkmPaguyubanCarouselSection() {
  const ukmCards = useMemo(
    () => expandableCards.filter((card) => card.type === "UKM"),
    [],
  );
  const paguyubanCards = useMemo(
    () => expandableCards.filter((card) => card.type === "Paguyuban"),
    [],
  );

  return (
    <div className="relative ">
      <CarouselSection
        title="UKM Pilihan"
        subtitle="Geser untuk melihat UKM unggulan. Klik kartu untuk detail lengkap dan kontak pengurusnya."
        items={ukmCards}
        tone="ukm"
      />
      <CarouselSection
        title="Paguyuban Daerah"
        subtitle="Jelajahi paguyuban mahasiswa daerah. Geser ke samping untuk menemukan komunitasmu."
        items={paguyubanCards}
        tone="paguyuban"
      />
    </div>
  );
}
