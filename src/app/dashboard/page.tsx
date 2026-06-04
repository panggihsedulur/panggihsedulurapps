import { supabase } from "@/lib/supabase";
import DashboardClient from "./DashboardClient";

export const revalidate = 0; // Disable cache for this page so it always fetches latest

export default async function DashboardPage() {
  const { data, error } = await supabase
    .from("student_results")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
        <div className="bg-red-50 text-red-500 p-6 rounded-xl shadow-sm border border-red-100 max-w-lg w-full">
          <h2 className="font-bold text-lg mb-2">Gagal mengambil data</h2>
          <p className="text-sm font-mono break-all">{error.message}</p>
          <p className="text-sm mt-4 text-gray-600">
            *Pastikan tabel `student_results` sudah memiliki pengaturan RLS (Row Level Security) yang mengizinkan akses READ (SELECT), atau matikan RLS sementara untuk tabel tersebut.
          </p>
        </div>
      </div>
    );
  }

  return <DashboardClient results={data || []} />;
}
