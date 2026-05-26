"use client";

import { useEffect, useRef, useReducer } from "react";
import { GridPattern } from "@/components/ui/grid-pattern";
import ImageCarouselHero from "@/components/ai-image-generator-hero";

// ─── Types ────────────────────────────────────────────────────────────────────

interface MascotData {
  id: string;
  name: string;
  greeting: string;
  role: string;
  description: string;
  traits: string[];
  birthdate: string;
  mbti: string;
  ciriKhas: string;
  imageUrl: string;
  /** flip=true → mascot on right, bubble on left */
  flip: boolean;
  theme: "teal" | "amber";
}

// ─── Static data ──────────────────────────────────────────────────────────────

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

const MASCOTS: MascotData[] = [
  {
    id: "giya",
    name: "Giya",
    greeting: "Halo, aku Giya!",
    role: "Si Petualang Kreatif",
    description:
      "Namaku dari Panggih Sedulur — bermakna pertemuan dan saling mengenal. Aku suka berekspresi bebas, mudah berbaur, dan selalu ingin tahu hal baru!",
    traits: [
      "Kreatif",
      "Bebas Berekspresi",
      "Mudah Berbaur",
      "Rasa Ingin Tahu",
    ],
    birthdate: "4 Mei",
    mbti: "ENFP",
    ciriKhas: "Seni & Eksplorasi",
    imageUrl:
      "https://raw.githubusercontent.com/panggihsedulur/asset/refs/heads/main/21.png",
    flip: false,
    theme: "teal",
  },
  {
    id: "dudu",
    name: "Dudu",
    greeting: "Halo, aku Dudu!",
    role: "Si Kucing Penjelajah",
    description:
      "Namaku dari Sedulur — bermakna kebersamaan dan saling memiliki. Seperti kucing, aku bebas dan ingin tahu, tapi selalu kembali ke teman-teman!",
    traits: ["Bebas & Berani", "Penuh Warna", "Rasa Ingin Tahu", "Kebersamaan"],
    birthdate: "4 Mei",
    mbti: "CUTE",
    ciriKhas: "Topi Baling-Baling",
    imageUrl:
      "https://raw.githubusercontent.com/panggihsedulur/asset/refs/heads/main/20.png",
    flip: true,
    theme: "amber",
  },
];

// ─── Theme tokens ─────────────────────────────────────────────────────────────

const THEME = {
  teal: {
    border: "border-sky-200",
    shadow: "shadow-sky-100",
    nameColor: "text-sky-700",
    roleColor: "text-sky-400",
    traitBg: "bg-sky-50 text-sky-800",
    tailColor: "border-sky-200",
    tailClip: "clip-path: polygon(0 100%, 100% 0, 100% 100%)",
    glowShadow: "0 6px 28px rgba(125,211,252,0.18)",
  },
  amber: {
    border: "border-orange-200",
    shadow: "shadow-orange-100",
    nameColor: "text-orange-700",
    roleColor: "text-orange-400",
    traitBg: "bg-orange-50 text-orange-800",
    tailColor: "border-orange-200",
    tailClip: "clip-path: polygon(0 0, 100% 100%, 0 100%)",
    glowShadow: "0 6px 28px rgba(251,191,36,0.15)",
  },
} as const;

// ─── Speech bubble ────────────────────────────────────────────────────────────

interface BubbleProps {
  mascot: MascotData;
}

function SpeechBubble({ mascot }: BubbleProps) {
  const t = THEME[mascot.theme];

  // Tail sits on the mascot side:
  // flip=false → mascot left, tail on LEFT edge of bubble
  // flip=true  → mascot right, tail on RIGHT edge of bubble
  const tailBase =
    "absolute bottom-7 w-5 h-5 bg-white border-b-[2.5px] rounded-bl-2xl pointer-events-none";

  const tailLeft = [
    tailBase,
    "-left-[19px]",
    "border-l-[2.5px]",
    t.tailColor,
    "[clip-path:polygon(0_100%,100%_0,100%_100%)]",
  ].join(" ");

  const tailRight = [
    tailBase,
    "-right-[19px]",
    "border-r-[2.5px]",
    "rounded-br-2xl rounded-bl-none",
    t.tailColor,
    "[clip-path:polygon(0_0,100%_100%,0_100%)]",
  ].join(" ");

  return (
    <div
      className={[
        "relative bg-white rounded-[26px] border-[2.5px] p-5 mb-5",
        // On mobile the tail is hidden; we show it only sm+ with 'sm:block'
        t.border,
      ].join(" ")}
      style={{ boxShadow: t.glowShadow }}
    >
      {/* Tail — hidden on mobile, shown sm+ */}
      <span
        className={["hidden sm:block", mascot.flip ? tailRight : tailLeft].join(
          " ",
        )}
      />

      {/* Name */}
      <p
        className={[
          "font-bold text-xl sm:text-[22px] mb-0.5 leading-tight",
          t.nameColor,
        ].join(" ")}
      >
        {mascot.greeting}
      </p>

      {/* Role */}
      <p
        className={[
          "text-[10.5px] font-bold tracking-[2px] uppercase mb-2.5",
          t.roleColor,
        ].join(" ")}
      >
        {mascot.role}
      </p>

      {/* Description */}
      <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed mb-3">
        {mascot.description}
      </p>

      {/* Traits */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {mascot.traits.map((tr) => (
          <span
            key={tr}
            className={[
              "text-[11px] font-bold px-2.5 py-1 rounded-full",
              t.traitBg,
            ].join(" ")}
          >
            {tr}
          </span>
        ))}
      </div>

      {/* ID strip */}
      <div className="flex gap-3 flex-wrap pt-2.5 border-t border-dashed border-slate-100">
        {[
          { label: "Lahir", val: mascot.birthdate },
          { label: "MBTI", val: mascot.mbti },
          { label: "Ciri Khas", val: mascot.ciriKhas },
        ].map(({ label, val }) => (
          <div key={label} className="flex-1 min-w-[60px]">
            <p className="text-[9.5px] font-bold tracking-[1.5px] uppercase text-slate-400">
              {label}
            </p>
            <p className="text-[12.5px] font-bold text-slate-700 mt-0.5">
              {val}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Mascot figure ────────────────────────────────────────────────────────────

function MascotFigure({ mascot }: { mascot: MascotData }) {
  return (
    <div
      className={[
        // ~1.5x larger than previous (w-36/sm:w-40)
        "flex-shrink-0 w-[13.5rem] sm:w-60",
        mascot.flip ? "animate-float-delayed" : "animate-float",
      ].join(" ")}
    >
      <img
        src={mascot.imageUrl}
        alt={`Maskot ${mascot.name}`}
        width={240}
        height={330}
        className="w-full object-contain select-none"
        style={{ filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.13))" }}
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

// ─── Mascot row ───────────────────────────────────────────────────────────────

function MascotRow({
  mascot,
  visible,
}: {
  mascot: MascotData;
  visible: boolean;
}) {
  const enterClass = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <div
      className={["transition-all duration-700 ease-out", enterClass].join(" ")}
    >
      {/*
        MOBILE  (<sm): figure centered on top, bubble below — always vertical
        DESKTOP (sm+): side by side, flip controls order
      */}
      <div
        className={[
          "flex flex-col items-center gap-3",
          "sm:flex sm:flex-row sm:items-end sm:gap-4",
          mascot.flip ? "sm:flex-row-reverse" : "",
        ].join(" ")}
      >
        {/* Figure always first in DOM, CSS reorders on desktop via flex-row-reverse */}
        <MascotFigure mascot={mascot} />
        <div className="w-full sm:flex-1">
          <SpeechBubble mascot={mascot} />
        </div>
      </div>
    </div>
  );
}

// ─── Separator ────────────────────────────────────────────────────────────────

function Separator() {
  return (
    <div className="flex items-center gap-3 my-4 px-2" aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sky-200 to-orange-200" />
      <span className="text-slate-300 text-sm">✦</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-orange-200 to-sky-200" />
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function MaskotSection() {
  // Track which rows are visible (scroll-triggered)
  const [visible, toggle] = useReducer(
    (state: boolean[], idx: number) =>
      state.map((v, i) => (i === idx ? true : v)),
    MASCOTS.map(() => false),
  );

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Fire initial animation after mount (above-fold content)
    const timers = MASCOTS.map((_, i) =>
      setTimeout(() => toggle(i), 300 + i * 280),
    );

    // Scroll-triggered for anything below fold
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) toggle(idx);
        });
      },
      { threshold: 0.12 },
    );

    rowRefs.current.forEach((el) => el && io.observe(el));

    return () => {
      timers.forEach(clearTimeout);
      io.disconnect();
    };
  }, []);

  return (
    <>
      {/* Inject keyframes once — Tailwind can't do arbitrary keyframe animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .animate-float          { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed  { animation: float 4s ease-in-out infinite .5s; }
      `}</style>

      <section
        className="relative bg-white py-14 px-4 sm:px-6 overflow-hidden"
        aria-labelledby="maskot-heading"
      >
        {/* Background: white + grid (#5aa0ac) */}
        <div className="absolute inset-0 pointer-events-none">
          <GridPattern
            width={48}
            height={48}
            className="absolute inset-0 stroke-[#5aa0ac]/25 fill-[#5aa0ac]/[0.06] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_82%)]"
          />
        </div>

        {/* ── Section header ─────────────────────────────────────────────────── */}

        <div className="max-w-3xl mx-auto text-center mb-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-center text-gradient mb-2">
            <span className="font-edwardian text-6xl sm:text-7xl mr-2">A</span>
            pa itu{" "}
            <span className="font-edwardian text-6xl sm:text-7xl mr-2">P</span>
            anggih{" "}
            <span className="font-edwardian text-6xl sm:text-7xl mr-2">S</span>
            edulur
          </h2>
          <p className="text-[14px] sm:text-[16px] text-slate-600 leading-relaxed px-4">
            Panggih Sedulur merupakan program pengenalan Unit Kegiatan Mahasiswa
            (UKM) dan Paguyuban Mahasiswa Daerah kepada mahasiswa aktif
            Universitas Jenderal Soedirman, terutama kepada mahasiswa baru.
          </p>
        </div>

        <ImageCarouselHero images={demoImages} />

        <div className="text-center mb-10 relative z-10">
          <h2
            id="maskot-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tighter  text-center  text-gradient"
          >
            <span className="font-edwardian text-6xl sm:text-7xl mr-2 ">M</span>
            askot
            <span className="font-edwardian text-6xl sm:text-7xl mr-2">P</span>
            anggih <br />
            <span className="font-edwardian text-6xl sm:text-7xl mr-2 ">S</span>
            edulur
          </h2>
          <p className="text-[14px] sm:text-[16px] text-slate-600 leading-relaxed px-4">
            Dua sahabat yang siap menemanimu menemukan Ukm & Paguyuban yang
            sesuai!
          </p>
        </div>

        {/* ── Mascot rows ────────────────────────────────────────────────────── */}

        <div className="max-w-3xl mx-auto relative z-10">
          {MASCOTS.map((mascot, i) => (
            <div key={mascot.id}>
              <div
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                data-idx={i}
              >
                <MascotRow mascot={mascot} visible={visible[i]} />
              </div>
              {i < MASCOTS.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
