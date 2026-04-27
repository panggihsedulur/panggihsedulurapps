"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UkmGrid } from "@/components/test/UkmCard";
import { type QuizResult } from "@/lib/schema";
import { type UKM } from "@/lib/ukm-data";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [ukmObjects, setUkmObjects] = useState<UKM[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load hasil dari localStorage
  useEffect(() => {
    const storedResult = localStorage.getItem("quizResult");
    const storedUKMs = localStorage.getItem("recommendedUKMs");

    if (!storedResult || !storedUKMs) {
      router.push("/kuisioner/biodata");
      return;
    }

    queueMicrotask(() => {
      try {
        const parsedResult = JSON.parse(storedResult) as QuizResult;
        const parsedUKMs = JSON.parse(storedUKMs) as UKM[];

        setResult(parsedResult);
        setUkmObjects(parsedUKMs);
        setIsLoading(false);
      } catch (err) {
        console.error("Error parsing result:", err);
        router.push("/kuisioner/biodata");
      }
    });
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
          <p className="text-white/80">Memproses hasil...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  const scoreMap = result.skor_kategori as Record<string, number>;

  // Calculate highest score kategori
  const highestCategory = result.top_kategori[0] || "Penalaran";
  const highestScore = scoreMap[highestCategory] || 0;

  // Get personality description based on top kategori
  const getPersonalityTitle = (kategori: string): string => {
    const titles: Record<string, string> = {
      Olahraga: "Si Atlet Sejati",
      Seni: "Si Kreator Berbakat",
      Penalaran: "Si Intelektual Strategis",
      "Pecinta Alam": "Si Penjelajah Petualang",
      "Sosial & Disiplin": "Si Pemimpin Humanis",
    };
    return titles[kategori] || "Si Punya Potensi Besar";
  };

  return (
    <div className="min-h-screen py-10 px-4 text-white">
      <div className="max-w-6xl mx-auto mt-15">
        {/* Celebration Header */}
        <div className="text-center mb-12">
          <div className="mb-6"></div>
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Selamat, {result.biodata.nama}!
          </h1>
          <p className="text-xl text-white/80 mb-4">
            Kamu adalah{" "}
            <span className="font-bold text-white">
              {getPersonalityTitle(highestCategory)}
            </span>
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 shadow-xl">
            <p className="text-lg font-semibold text-white">
              Kategori Dominan:{" "}
              <span className="text-2xl">{highestCategory}</span>
            </p>
            <p className="text-sm text-white/70 mt-1">
              Skor: {highestScore} dari 50 poin
            </p>
          </div>
        </div>

        {/* Score Distribution */}

        {/* Recommendations */}
        <div className="mb-12 ">
          <h2 className="text-3xl font-extrabold text-white mb-2 text-center">
            UKM Rekomendasi Untuk Kamu
          </h2>
          <p className="text-white/70 mb-8 text-center">
            Berdasarkan hasil kuisioner, berikut adalah UKM yang paling sesuai
            dengan minat dan bakatmu:
          </p>

          {ukmObjects.length > 0 ? (
            <UkmGrid ukms={ukmObjects} showRank={true} />
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <p className="text-yellow-800">
                Tidak ada rekomendasi UKM yang tersedia saat ini.
              </p>
            </div>
          )}
        </div>
        <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/10 p-8 mb-12">
          <h2 className="text-2xl font-extrabold text-white mb-6">
            Distribusi Poin Kategori
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {Object.entries(scoreMap).map(([kategori, skor]) => {
              const isTopKategori = result.top_kategori.includes(kategori);
              return (
                <div
                  key={kategori}
                  className={`p-4 rounded-lg text-center transition-all ${
                    isTopKategori
                      ? "bg-white/20 text-white shadow-lg border border-white/30"
                      : "bg-black/20 text-white/70 border border-white/10"
                  }`}
                >
                  <p
                    className={`text-sm font-medium mb-2 ${isTopKategori ? "text-white" : ""}`}
                  >
                    {kategori}
                  </p>
                  <p
                    className={`text-3xl font-bold mb-2 ${isTopKategori ? "text-white" : "text-white/90"}`}
                  >
                    {skor}
                  </p>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        isTopKategori ? "bg-cyan-400" : "bg-white/40"
                      }`}
                      style={{ width: `${(skor / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-900/40 to-emerald-900/40 backdrop-blur-lg rounded-[2rem] shadow-2xl border border-white/10 p-8 text-center text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">Langkah Berikutnya</h3>
          <p className="mb-6 text-white/80">
            Kunjungi booth UKM rekomendasi di acara Panggih Sedulur untuk
            mendapatkan kode rahasia dan hadiah menarik!
          </p>
          <div className="space-y-3">
            <p className="font-semibold text-cyan-200">
              📍 Lokasi: Area UKM - Panggih Sedulur
            </p>
            <p className="font-semibold text-cyan-200">⏰ Waktu: [Sesuai jadwal acara]</p>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-xl border border-white/10 p-6 mb-8">
          <h3 className="text-lg font-bold text-white mb-4">
            Data Peserta
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-white/60">Nama</p>
              <p className="font-semibold text-white">
                {result.biodata.nama}
              </p>
            </div>
            <div>
              <p className="text-white/60">NIM</p>
              <p className="font-semibold text-white">
                {result.biodata.nim}
              </p>
            </div>
            <div>
              <p className="text-white/60">Fakultas</p>
              <p className="font-semibold text-white">
                {result.biodata.fakultas}
              </p>
            </div>
            <div>
              <p className="text-white/60">Jurusan</p>
              <p className="font-semibold text-white">
                {result.biodata.jurusan}
              </p>
            </div>
            {result.biodata.agama && (
              <div>
                <p className="text-white/60">Agama</p>
                <p className="font-semibold text-white">
                  {result.biodata.agama}
                </p>
              </div>
            )}
            {result.biodata.is_kipk && (
              <div>
                <p className="text-white/60">Status</p>
                <p className="font-semibold text-emerald-400">Penerima KIP-K</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              localStorage.clear();
              router.push("/kuisioner/biodata");
            }}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition backdrop-blur-sm"
          >
            ↻ Mulai Ulang
          </button>
          <button
            onClick={() => {
              // Bisa di-extend untuk share/download result
              alert("Fitur share akan segera tersedia!");
            }}
            className="bg-[#0d4d4d] hover:bg-[#0a3a3a] text-white px-8 py-3 rounded-xl font-bold transition shadow-[0_4px_0_0_#052b2b]"
          >
            📤 Share Hasil
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-white/50 text-sm">
          <p>
            Data kamu telah disimpan untuk keperluan statistik UKM Universitas
            Jenderal Soedirman
          </p>
          <p className="mt-2">
            Terima kasih telah mengikuti Kuisioner Minat Bakat UKM! 🙏
          </p>
        </div>
      </div>
    </div>
  );
}
