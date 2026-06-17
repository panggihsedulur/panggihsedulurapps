import { GridPattern } from "@/components/ui/grid-pattern";
import Stack from "@/component/Stack";
import Image from "next/image";
export default function Panitia() {
  const images = [
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
  ];
  return (
    <div className="min-h-screen bg-[#fef6f9]">
      <section className="relative z-20 overflow-visible bg-[url('/bghero.webp')] bg-cover bg-center px-4 pb-16 pt-16 text-white sm:px-6">
        {" "}
        <div className="relative mx-auto mt-15 flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1
            id="paguyuban-heading"
            aria-label="Paguyuban Daerah Unsoed"
            className="text-2xl font-semibold tracking-tighter text-center sm:text-3xl md:text-4xl"
          >
            <span
              className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
              aria-hidden="true"
            >
              P
            </span>
            anitia
            <span
              className="font-edwardian text-5xl sm:text-6xl md:text-7xl mx-1 sm:mx-2"
              aria-hidden="true"
            >
              P
            </span>
            anggih{" "}
            <span
              className="font-edwardian text-5xl sm:text-6xl md:text-7xl mx-1 sm:mx-2"
              aria-hidden="true"
            >
              S
            </span>
            edulur
          </h1>
          <p className="max-w-3xl text-base text-white/85 sm:text-lg">
            Temukan panitia Panggih Sedulur di Unsoed. Sambung silaturahmi,
            perkuat kebersamaan, dan jadilah bagian dari keluarga besar
            mahasiswa perantau.
          </p>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none z-0">
          <GridPattern
            width={48}
            height={48}
            className="absolute inset-0 stroke-[#5aa0ac]/60 fill-[#5aa0ac]/20"
            style={{
              maskImage:
                "radial-gradient(ellipse at center, black 55%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 55%, transparent 85%)",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="mb-8 flex flex-col gap-2 text-center justify-center items-center">
            <div className="relative w-72 h-96 sm:w-96 sm:h-[500px]">
              <Stack
                randomRotation={false}
                sensitivity={200}
                sendToBackOnClick={true}
                cards={images.map((src, i) => (
                  <div key={i} className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`card-${i + 1}`}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                ))}
                autoplay={false}
                autoplayDelay={3000}
                pauseOnHover={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
