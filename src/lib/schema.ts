import { z } from "zod";

/**
 * Biodata Form Schema
 * Validasi input dari halaman /kuisioner/biodata
 */
export const BiodataSchema = z.object({
  nama: z
    .string()
    .min(3, "Nama minimal 3 karakter")
    .max(100, "Nama maksimal 100 karakter")
    .trim(),
  nim: z
    .string()
    .min(9, "NIM harus 9 karakter")
    .max(9, "NIM harus 9 karakter")
    .trim(),
  fakultas: z.string().min(3, "Pilih fakultas").trim(),
  jurusan: z.string().min(3, "Pilih jurusan").trim(),
  agama: z
    .enum([
      "Islam",
      "Kristen Protestan",
      "Kristen Katolik",
      "Hindu",
      "Buddha",
      "Konghucu",
    ])
    .optional(),
  is_kipk: z.boolean().default(false),
});

export type Biodata = z.infer<typeof BiodataSchema>;

/**
 * Quiz Result Schema
 * Validasi hasil scoring dan rekomendasi
 */
export const QuizResultSchema = z.object({
  biodata: BiodataSchema,
  skor_kategori: z
    .record(z.string(), z.number())
    .refine((obj) => Object.keys(obj).length > 0, "Scoring kategori harus ada"),
  top_kategori: z
    .array(z.string())
    .min(1, "Minimal ada 1 kategori top")
    .max(2, "Maksimal 2 kategori top"),
  rekomendasi_ukm: z
    .array(z.string())
    .min(1, "Minimal ada 1 rekomendasi UKM")
    .max(5, "Maksimal 5 rekomendasi UKM"),
});

export type QuizResult = z.infer<typeof QuizResultSchema>;

/**
 * Kategori Utama (sesuai RancanganLogikaKuis.md)
 */
export const KATEGORI_UTAMA = [
  "Olahraga",
  "Seni",
  "Penalaran",
  "Pecinta Alam",
  "Sosial & Disiplin",
] as const;

export type Kategori = (typeof KATEGORI_UTAMA)[number];

/**
 * Helper: Initialize skor dengan 0 untuk semua kategori
 */
export const initializeSkor = (): Record<Kategori, number> => ({
  Olahraga: 0,
  Seni: 0,
  Penalaran: 0,
  "Pecinta Alam": 0,
  "Sosial & Disiplin": 0,
});
