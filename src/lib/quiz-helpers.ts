import { supabase, type StudentResult } from "./supabase";
import { QuizResult, QuizResultSchema } from "./schema";
import {
  getCombinedRecommendations,
  getRecommendedUKM,
  type UKM,
} from "./ukm-data";

/**
 * Simpan hasil kuis ke Supabase
 * Gunakan di halaman /kuisioner/test setelah submit
 */
export async function saveQuizResult(
  data: QuizResult,
): Promise<{ success: boolean; error?: string }> {
  try {
    // Validasi dengan Zod
    const validated = QuizResultSchema.parse(data);

    // Format data sesuai tabel student_results
    const payload: StudentResult = {
      nama: validated.biodata.nama,
      nim: validated.biodata.nim,
      fakultas: validated.biodata.fakultas,
      jurusan: validated.biodata.jurusan,
      agama: validated.biodata.agama,
      is_kipk: validated.biodata.is_kipk,
      skor_kategori: validated.skor_kategori,
      rekomendasi_ukm: validated.rekomendasi_ukm,
      top_kategori: validated.top_kategori,
    };

    // Insert ke Supabase
    const { error } = await supabase.from("student_results").insert([payload]);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    console.log("Data berhasil disimpan");
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Validation error:", error.message);
      return { success: false, error: error.message };
    }
    return { success: false, error: "Unknown error occurred" };
  }
}

/**
 * Get recommended UKM berdasarkan top kategori dari scoring
 * Integrasi dengan ukm-data.ts untuk recommendation logic
 */
export function getRecommendedUKMNames(
  topKategori: string[],
  limit: number = 3,
): string[] {
  const recommended = getRecommendedUKM(topKategori, limit);
  return recommended.map((ukm) => ukm.name);
}

/**
 * Get combined recommendations: scoring + pre-filtering biodata
 * Sesuai RancanganLogikaKuis.md section 1 & Level 1-3
 */
export function getCombinedRecommendationNames(
  topKategori: string[],
  agama?: string,
  is_kipk?: boolean,
  fakultas?: string,
  branchRecommendations: string[] = [],
  limit: number = 3,
): string[] {
  const combined = getCombinedRecommendations(
    topKategori,
    agama,
    is_kipk,
    fakultas,
    branchRecommendations,
  );
  return combined.slice(0, limit).map((ukm) => ukm.name);
}

/**
 * Get full UKM objects untuk hasil yang lebih detail
 * Bisa digunakan di result page untuk tampilkan deskripsi lengkap
 */
export function getCombinedRecommendationObjects(
  topKategori: string[],
  agama?: string,
  is_kipk?: boolean,
  fakultas?: string,
  branchRecommendations: string[] = [],
  limit: number = 3,
): UKM[] {
  return getCombinedRecommendations(
    topKategori,
    agama,
    is_kipk,
    fakultas,
    branchRecommendations,
  ).slice(0, limit);
}

/**
 * Helper: Ambil top N kategori berdasarkan skor
 */
export function getTopKategori(
  skor_kategori: Record<string, number>,
  topN: number = 2,
): string[] {
  return Object.entries(skor_kategori)
    .sort(([, a], [, b]) => b - a)
    .slice(0, topN)
    .map(([kategori]) => kategori);
}
