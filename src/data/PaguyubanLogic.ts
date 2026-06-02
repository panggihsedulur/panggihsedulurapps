/**
 * Paguyuban Daerah Data & Mapping
 * Extracted from UkmPaguyubanData — only items with type: "Paguyuban"
 */

import {
  fullUkmAndPaguyubanData,
  type ExpandableCardItem,
} from "@/data/UkmPaguyubanData";

export type Paguyuban = ExpandableCardItem & {
  type: "Paguyuban";
  priority: number;
  /** Derived province name */
  provinsi: string;
};

/**
 * Mapping: category (daerah/kota) → nama provinsi
 * Tambahkan baris baru jika ada paguyuban daerah baru.
 */
export const daerahToProvinsi: Record<string, string> = {
  // Jawa Barat
  Bandung: "Jawa Barat",
  Bekasi: "Jawa Barat",
  Bogor: "Jawa Barat",
  Ciamis: "Jawa Barat",
  Cirebon: "Jawa Barat",
  Indramayu: "Jawa Barat",
  Kuningan: "Jawa Barat",
  Majalengka: "Jawa Barat",
  Tasikmalaya: "Jawa Barat",

  // Jawa Tengah
  Banjarnegara: "Jawa Tengah",
  Cilacap: "Jawa Tengah",
  Jepara: "Jawa Tengah",
  Kebumen: "Jawa Tengah",
  Magelang: "Jawa Tengah",
  "Pekalongan-Batang": "Jawa Tengah",
  Pemalang: "Jawa Tengah",
  Purbalingga: "Jawa Tengah",
  Purworejo: "Jawa Tengah",
  Surakarta: "Jawa Tengah",

  // Jawa Timur
  "Jawa Timur": "Jawa Timur",

  // DKI Jakarta
  Jakarta: "DKI Jakarta",

  // Banten
  Banten: "Banten",

  // Lampung
  Lampung: "Lampung",

  // Sumatera Barat
  Minang: "Sumatera Barat",

  // Sumatera Utara
  "Sumatera Utara": "Sumatera Utara",

  // Sulawesi
  Sulawesi: "Sulawesi",

  // Papua
  Papua: "Papua",
};

/** Fallback jika daerah belum ada di mapping */
const resolveProvinsi = (category: string): string =>
  daerahToProvinsi[category] ?? "Lainnya";

// All paguyuban items (type === "Paguyuban"), enriched with provinsi field
export const allPaguyuban: Paguyuban[] = fullUkmAndPaguyubanData
  .filter((item): item is Paguyuban => item.type === "Paguyuban")
  .map((item, index) => ({
    ...item,
    priority: index + 1,
    provinsi: resolveProvinsi(item.category),
  }));

// Unique province list, sorted alphabetically
export const paguyubanProvinsi: string[] = Array.from(
  new Set(allPaguyuban.map((p) => p.provinsi)),
).sort((a, b) => a.localeCompare(b));

export const paguyubanProvinsiOptions = [
  "Semua Provinsi",
  ...paguyubanProvinsi,
];
