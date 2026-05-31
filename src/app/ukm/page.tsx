"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { UkmGrid } from "@/components/ukm/UkmCard";
import { ukmByCategory, type UKM } from "@/data/UkmLogic";

const categoryMatchers: Record<string, (category: string) => boolean> = {
  Olahraga: (category) => category.startsWith("Olahraga"),
  Seni: (category) => category.startsWith("Seni"),
  Penalaran: (category) => category.startsWith("Penalaran"),
  "Pecinta Alam": (category) => category.startsWith("Alam"),
  "Sosial & Disiplin": (category) => category.startsWith("Sosial"),
  Kerohanian: (category) => category.startsWith("Kerohanian"),
  Khusus: (category) =>
    category.startsWith("Khusus") || category.startsWith("Beasiswa"),
};

const categoryOptions = ["Semua Kategori", ...Object.keys(ukmByCategory)];

export default function UkmPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");

  const allUkm = useMemo<UKM[]>(() => {
    const uniqueMap = new Map<string, UKM>();
    for (const group of Object.values(ukmByCategory)) {
      for (const ukm of group) {
        if (!uniqueMap.has(ukm.id)) {
          uniqueMap.set(ukm.id, ukm);
        }
      }
    }
    return Array.from(uniqueMap.values());
  }, []);

  const filteredUkm = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    const matchCategory =
      selectedCategory === "Semua Kategori"
        ? () => true
        : categoryMatchers[selectedCategory] ||
          ((category: string) =>
            category.toLowerCase().includes(selectedCategory.toLowerCase()));

    const filtered = allUkm.filter((ukm) => {
      if (!matchCategory(ukm.category)) return false;
      if (!trimmedQuery) return true;

      const haystack = `${ukm.name} ${ukm.title} ${ukm.category}`.toLowerCase();
      return haystack.includes(trimmedQuery);
    });

    const uniqueMap = new Map<string, UKM>();
    for (const ukm of filtered) {
      if (!uniqueMap.has(ukm.id)) {
        uniqueMap.set(ukm.id, ukm);
      }
    }

    return Array.from(uniqueMap.values()).sort(
      (a, b) => a.priority - b.priority || a.name.localeCompare(b.name),
    );
  }, [allUkm, query, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#fef6f9]">
      <section className="relative overflow-hidden bg-[url('/bghero.webp')] bg-cover bg-center px-4 pb-16 pt-16 text-white sm:px-6">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-10 top-8 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto mt-15 flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1
            id="intro-heading"
            aria-label="Apa itu Panggih Sedulur"
            className="text-2xl font-semibold tracking-tighter text-center sm:text-3xl md:text-4xl"
          >
            <span
              className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
              aria-hidden="true"
            >
              U
            </span>
            nit
            <span
              className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
              aria-hidden="true"
            >
              K
            </span>
            egiatan
            <span
              className="font-edwardian text-5xl sm:text-6xl md:text-7xl mr-1 sm:mr-2"
              aria-hidden="true"
            >
              M
            </span>
            ahasiswa
          </h1>
          <p className="max-w-3xl text-base text-white/85 sm:text-lg">
            Temukan UKM yang cocok dengan minatmu, mulai dari olahraga, seni,
            penalaran, hingga kegiatan sosial. Gunakan pencarian untuk melihat
            detail UKM beserta kontak pengurusnya.
          </p>

          <div className="mt-4 w-full max-w-3xl rounded-3xl bg-white/10 p-4 backdrop-blur-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-300" />
                <input
                  type="text"
                  placeholder="Cari UKM yang kamu minati..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full rounded-2xl border border-white/40 bg-white/90 py-3 pl-12 pr-4 text-sm text-neutral-800 shadow-sm outline-none transition focus:border-white/70 focus:ring-2 focus:ring-white/40"
                />
              </label>

              <label className="relative sm:w-56">
                <select
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  className="w-full appearance-none rounded-2xl border border-white/40 bg-white/90 px-4 py-3 text-sm text-neutral-800 shadow-sm outline-none transition focus:border-white/70 focus:ring-2 focus:ring-white/40"
                >
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500">
                  v
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-8 flex flex-col gap-2 text-center justify-center items-center">
          <div className="bg- inline-block rounded-2xl px-3 py-1  w-max">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gradient">
              Daftar UKM
            </p>
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            {filteredUkm.length} UKM ditemukan
          </h2>
          <p className="text-neutral-600">
            Klik kartu untuk melihat deskripsi lengkap dan informasi kontak.
          </p>
        </div>

        {filteredUkm.length > 0 ? (
          <UkmGrid ukms={filteredUkm} showRank={false} />
        ) : (
          <div className="rounded-2xl border border-pink-100 bg-white p-8 text-center text-neutral-600 shadow-sm">
            Tidak ada UKM yang sesuai. Coba kata kunci lain atau ganti kategori.
          </div>
        )}
      </section>
    </div>
  );
}
