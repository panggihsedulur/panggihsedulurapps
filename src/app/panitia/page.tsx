import { GridPattern } from "@/components/ui/grid-pattern";
import Stack from "@/component/Stack";
import Image from "next/image";
export default function Panitia() {
  const divisions = [
    {
      name: "Steering Commite",
      images: Array.from({ length: 2 }, (_, i) => `/panitia/sc${2 - i}.webp`),
    },
    {
      name: "Project Officer",
      images: ["/panitia/po.webp"],
    },
    {
      name: "Divisi Sekretaris",
      images: Array.from({ length: 3 }, (_, i) => `/panitia/se${3 - i}.webp`),
    },
    {
      name: "Divisi IT",
      images: Array.from({ length: 5 }, (_, i) => `/panitia/it${5 - i}.webp`),
    },
    {
      name: "Divisi Bendahara",
      images: Array.from({ length: 3 }, (_, i) => `/panitia/be${3 - i}.webp`),
    },
    {
      name: "Divisi Humpub",
      images: Array.from({ length: 24 }, (_, i) => `/panitia/hu${24 - i}.webp`),
    },
    {
      name: "Divisi Acara",
      images: Array.from({ length: 13 }, (_, i) => `/panitia/ac${13 - i}.webp`),
    },
    {
      name: "Divisi Usdakom",
      images: Array.from({ length: 10 }, (_, i) => `/panitia/us${10 - i}.webp`),
    },
    {
      name: "Divisi ATP",
      images: Array.from({ length: 12 }, (_, i) => `/panitia/at${12 - i}.webp`),
    },
    {
      name: "Divisi Sponsorship",
      images: Array.from({ length: 10 }, (_, i) => `/panitia/sp${10 - i}.webp`),
    },
    {
      name: "Divisi Lapangan",
      images: Array.from({ length: 14 }, (_, i) => `/panitia/la${14 - i}.webp`),
    },
    {
      name: "Divisi Medis",
      images: Array.from({ length: 7 }, (_, i) => `/panitia/me${7 - i}.webp`),
    },
    {
      name: "Divisi Desain & Dokumentasi",
      images: Array.from({ length: 12 }, (_, i) => `/panitia/dd${12 - i}.webp`),
    },
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
        <div className="relative z-10 mx-auto max-w-[90rem] px-4 py-16 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-20 justify-items-center">
            {divisions.map((divisi, index) => {
              let gridClass = "sm:col-span-1 lg:col-span-2";
              const itemsInLastRow = (divisions.length - 2) % 3;

              if (index < 2) {
                gridClass = "sm:col-span-1 lg:col-span-3";
              } else if (itemsInLastRow === 1 && index === divisions.length - 1) {
                gridClass = "sm:col-span-1 lg:col-span-2 lg:col-start-3";
              } else if (itemsInLastRow === 2 && index === divisions.length - 2) {
                gridClass = "sm:col-span-1 lg:col-span-2 lg:col-start-2";
              }

              if (divisions.length % 2 === 1 && index === divisions.length - 1) {
                gridClass = gridClass.replace("sm:col-span-1", "sm:col-span-2");
              }

              return (
                <div
                  key={index}
                  className={`flex flex-col gap-6 text-center items-center w-full ${gridClass}`}
                >
                  <h3 className="text-2xl font-semibold text-[#5aa0ac]">
                    {divisi.name}
                  </h3>
                  <div className="relative w-64 sm:w-72 aspect-[2079/3213]">
                    <Stack
                      randomRotation={true}
                      sensitivity={200}
                      sendToBackOnClick={true}
                      cards={divisi.images.map((src, i) => (
                        <div
                          key={i}
                          className="relative w-full h-full shadow-md rounded-xl overflow-hidden bg-white"
                        >
                          <Image
                            src={src}
                            alt={`${divisi.name} card ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                      autoplay={false}
                      autoplayDelay={3000}
                      pauseOnHover={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
