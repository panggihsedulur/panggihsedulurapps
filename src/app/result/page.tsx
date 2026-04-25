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
      router.push("/biodata");
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
        router.push("/biodata");
      }
    });
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Memproses hasil...</p>
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
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Celebration Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="text-6xl">🎉</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Selamat, {result.biodata.nama}!
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Kamu adalah{" "}
            <span className="font-bold text-blue-600">
              {getPersonalityTitle(highestCategory)}
            </span>
          </p>
          <div className="inline-block bg-linear-to-r from-blue-100 to-indigo-100 border-2 border-blue-500 rounded-lg px-6 py-3">
            <p className="text-lg font-semibold text-blue-900">
              Kategori Dominan:{" "}
              <span className="text-2xl">{highestCategory}</span>
            </p>
            <p className="text-sm text-blue-700 mt-1">
              Skor: {highestScore} dari 50 poin
            </p>
          </div>
        </div>

        {/* Score Distribution */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
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
                      ? "bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-md"
                      : "bg-gray-50 text-gray-800"
                  }`}
                >
                  <p
                    className={`text-sm font-medium mb-2 ${isTopKategori ? "text-blue-100" : ""}`}
                  >
                    {kategori}
                  </p>
                  <p
                    className={`text-3xl font-bold mb-2 ${isTopKategori ? "text-white" : "text-blue-600"}`}
                  >
                    {skor}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        isTopKategori ? "bg-white" : "bg-blue-500"
                      }`}
                      style={{ width: `${(skor / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            🎯 UKM Rekomendasi Untuk Kamu
          </h2>
          <p className="text-gray-600 mb-8">
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

        {/* Call to Action */}
        <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-8 text-center text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">Langkah Berikutnya</h3>
          <p className="mb-6 text-blue-100">
            Kunjungi booth UKM rekomendasi di acara Panggih Sedulur untuk
            mendapatkan kode rahasia dan hadiah menarik!
          </p>
          <div className="space-y-3">
            <p className="font-semibold">
              📍 Lokasi: Area UKM - Panggih Sedulur
            </p>
            <p className="font-semibold">⏰ Waktu: [Sesuai jadwal acara]</p>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Data Peserta</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Nama</p>
              <p className="font-semibold text-gray-800">
                {result.biodata.nama}
              </p>
            </div>
            <div>
              <p className="text-gray-600">NIM</p>
              <p className="font-semibold text-gray-800">
                {result.biodata.nim}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Fakultas</p>
              <p className="font-semibold text-gray-800">
                {result.biodata.fakultas}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Jurusan</p>
              <p className="font-semibold text-gray-800">
                {result.biodata.jurusan}
              </p>
            </div>
            {result.biodata.agama && (
              <div>
                <p className="text-gray-600">Agama</p>
                <p className="font-semibold text-gray-800">
                  {result.biodata.agama}
                </p>
              </div>
            )}
            {result.biodata.is_kipk && (
              <div>
                <p className="text-gray-600">Status</p>
                <p className="font-semibold text-green-600">Penerima KIP-K</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              localStorage.clear();
              router.push("/biodata");
            }}
            className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 px-8 py-3 rounded-lg font-medium transition"
          >
            ↻ Mulai Ulang
          </button>
          <button
            onClick={() => {
              // Bisa di-extend untuk share/download result
              alert("Fitur share akan segera tersedia!");
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            📤 Share Hasil
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-gray-600 text-sm">
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
