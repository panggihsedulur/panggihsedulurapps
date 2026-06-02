"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { PaguyubanGrid } from "@/components/paguyuban/PaguyubanCard";
import {
  allPaguyuban,
  paguyubanProvinsiOptions,
} from "@/data/PaguyubanLogic";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function PaguyubanPage() {
  const [query, setQuery] = useState("");
  const [selectedProvinsi, setSelectedProvinsi] = useState("Semua Provinsi");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isCategoryOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryMenuRef.current &&
        !categoryMenuRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCategoryOpen]);

  const filteredPaguyuban = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();

    return allPaguyuban
      .filter((pg) => {
        const matchProvinsi =
          selectedProvinsi === "Semua Provinsi" ||
          pg.provinsi === selectedProvinsi;

        if (!matchProvinsi) return false;
        if (!trimmedQuery) return true;

        const haystack =
          `${pg.name ?? ""} ${pg.title} ${pg.category} ${pg.provinsi} ${pg.description}`.toLowerCase();
        return haystack.includes(trimmedQuery);
      })
      .sort((a, b) => a.priority - b.priority || a.title.localeCompare(b.title));
  }, [query, selectedProvinsi]);

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
            aguyuban
            <span
              className="font-edwardian text-5xl sm:text-6xl md:text-7xl mx-1 sm:mx-2"
              aria-hidden="true"
            >
              D
            </span>
            aerah
          </h1>
          <p className="max-w-3xl text-base text-white/85 sm:text-lg">
            Temukan paguyuban daerahmu di Unsoed. Sambung silaturahmi,
            perkuat kebersamaan, dan jadilah bagian dari keluarga besar
            mahasiswa perantau. Gunakan pencarian untuk menemukan paguyuban
            sesuai daerah asalmu.
          </p>

          <div className="mt-4 w-full max-w-3xl rounded-3xl bg-white/10 p-4 backdrop-blur-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black" />
                <input
                  type="text"
                  placeholder="Cari paguyuban daerahmu..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full rounded-2xl border border-white/40 bg-white/90 py-3 pl-12 pr-4 text-sm text-neutral-800 shadow-sm outline-none transition focus:border-white/70 focus:ring-2 focus:ring-white/40"
                />
              </label>

              <div className="relative sm:w-60" ref={categoryMenuRef}>
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={isCategoryOpen}
                  onClick={() => setIsCategoryOpen((prev) => !prev)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setIsCategoryOpen(false);
                  }}
                  className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 text-left text-sm font-medium text-neutral-800 shadow-sm outline-none transition hover:border-white/70 focus:border-white/80 focus:ring-2 focus:ring-white/50"
                >
                  <span className="truncate">{selectedProvinsi}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-neutral-500 transition ${
                      isCategoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  role="listbox"
                  aria-label="Pilih provinsi"
                  className={`absolute left-0 right-0 z-50 mt-2 max-h-64 overflow-y-auto rounded-2xl border border-white/70 bg-white/95 p-2 text-sm text-neutral-800 shadow-lg backdrop-blur-sm transition ${
                    isCategoryOpen
                      ? "pointer-events-auto scale-100 opacity-100"
                      : "pointer-events-none scale-95 opacity-0"
                  }`}
                >
                  {paguyubanProvinsiOptions.map((prov) => {
                    const isSelected = selectedProvinsi === prov;
                    return (
                      <button
                        key={prov}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          setSelectedProvinsi(prov);
                          setIsCategoryOpen(false);
                        }}
                        className={`w-full rounded-xl px-3 py-2 text-left transition hover:bg-neutral-100/80 ${
                          isSelected ? "bg-neutral-100 font-semibold" : ""
                        }`}
                      >
                        {prov}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
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
            <div className="inline-block rounded-2xl px-3 py-1 w-max">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gradient">
                Daftar Paguyuban
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
              {filteredPaguyuban.length} Paguyuban ditemukan
            </h2>
            <p className="text-neutral-600">
              Klik kartu untuk melihat deskripsi lengkap dan informasi kontak.
            </p>
          </div>

          {filteredPaguyuban.length > 0 ? (
            <PaguyubanGrid paguyubans={filteredPaguyuban} />
          ) : (
            <div className="rounded-2xl border border-pink-100 bg-white p-8 text-center text-neutral-600 shadow-sm">
              Tidak ada paguyuban yang sesuai. Coba kata kunci lain atau ganti
              daerah.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
