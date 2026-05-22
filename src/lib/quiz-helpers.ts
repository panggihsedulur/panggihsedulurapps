import { supabase, type StudentResult } from "./supabase";
import { QuizResult, QuizResultSchema } from "./schema";
import {
  getCombinedRecommendations,
  getRecommendedUKM,
  type UKM,
} from "./ukm-data";

type SerializedError = {
  message: string;
  meta?: Record<string, unknown>;
};

function serializeUnknownError(error: unknown): SerializedError {
  if (error == null) {
    return { message: "Unknown error (null/undefined)", meta: { error } };
  }

  if (typeof error === "string") {
    return { message: error };
  }

  if (error instanceof Error) {
    return {
      message: error.message || "Unknown error",
      meta: {
        name: error.name,
        stack: error.stack,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cause: (error as any).cause,
      },
    };
  }

  if (typeof error === "object") {
    const meta: Record<string, unknown> = {};
    // Common Supabase/PostgREST fields
    for (const key of [
      "message",
      "details",
      "hint",
      "code",
      "status",
      "statusText",
    ]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (key in (error as any)) meta[key] = (error as any)[key];
    }

    // In some consoles (and across Next boundaries) these error objects render as `{}`
    // because their fields are non-enumerable. Capture own property names explicitly.
    try {
      const ownKeys = Object.getOwnPropertyNames(error);
      for (const key of ownKeys) {
        if (key in meta) continue;
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          meta[key] = (error as any)[key];
        } catch {
          // ignore unreadable props
        }
      }
    } catch {
      // ignore
    }

    const message =
      typeof meta.message === "string" && meta.message.trim()
        ? meta.message
        : "Supabase request failed";

    return { message, meta };
  }

  return { message: String(error), meta: { error } };
}

function formatSupabaseError(error: unknown): string {
  const serialized = serializeUnknownError(error);
  const meta = serialized.meta ?? {};
  const parts: string[] = [serialized.message];

  const code = typeof meta.code === "string" ? meta.code : undefined;
  const details = typeof meta.details === "string" ? meta.details : undefined;
  const hint = typeof meta.hint === "string" ? meta.hint : undefined;
  const status =
    typeof meta.status === "number" || typeof meta.status === "string"
      ? String(meta.status)
      : undefined;

  if (code) parts.push(`code=${code}`);
  if (status) parts.push(`status=${status}`);
  if (details) parts.push(`details=${details}`);
  if (hint) parts.push(`hint=${hint}`);

  return parts.join(" | ");
}

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
      // Make the error actionable in console (otherwise it often prints as `{}`)
      const serialized = serializeUnknownError(error);
      const meta = serialized.meta ?? {};
      // If meta.message is undefined it can overwrite `message` below, and Next's
      // console overlay will stringify it as `{}`. Ensure message always wins.
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { message: _metaMessage, ...metaWithoutMessage } = meta;
      console.error("Supabase insert error:", {
        ...metaWithoutMessage,
        message: serialized.message,
      });
      return { success: false, error: formatSupabaseError(error) };
    }

    console.log("Data berhasil disimpan");
    return { success: true };
  } catch (error) {
    // This catch includes validation (Zod) and any unexpected runtime errors.
    const serialized = serializeUnknownError(error);
    const meta = serialized.meta ?? {};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { message: _metaMessage, ...metaWithoutMessage } = meta;
    console.error("saveQuizResult error:", {
      ...metaWithoutMessage,
      message: serialized.message,
    });
    return { success: false, error: serialized.message };
  }
}

/**
 * Get recommended UKM berdasarkan top kategori dari scoring
 * Integrasi dengan ukm-data.ts untuk recommendation logic
 */
export function getRecommendedUKMNames(
  topKategori: string[],
  limit?: number,
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
  limit?: number,
): string[] {
  const combined = getCombinedRecommendations(
    topKategori,
    agama,
    is_kipk,
    fakultas,
    branchRecommendations,
  );
  return limit
    ? combined.slice(0, limit).map((ukm) => ukm.name)
    : combined.map((ukm) => ukm.name);
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
  limit?: number,
): UKM[] {
  const combined = getCombinedRecommendations(
    topKategori,
    agama,
    is_kipk,
    fakultas,
    branchRecommendations,
  );
  return limit ? combined.slice(0, limit) : combined;
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
