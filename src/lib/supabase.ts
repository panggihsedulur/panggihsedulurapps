import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase credentials in environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type StudentResult = {
  id?: string;
  created_at?: string;
  nama: string;
  nim: string;
  fakultas: string;
  jurusan: string;
  agama?: string;
  is_kipk: boolean;
  skor_kategori: Record<string, number>;
  rekomendasi_ukm: string[];
  top_kategori: string[];
};
