"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiodataForm } from "@/components/test/BiodataForm";
import { type Biodata } from "@/lib/schema";

export default function BiodataPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: Biodata) => {
    setIsLoading(true);

    try {
      // Simpan ke localStorage
      localStorage.setItem("biodata", JSON.stringify(data));

      // Redirect ke halaman kuis
      router.push("/test");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Kuisioner Minat Bakat UKM
          </h1>
          <p className="text-gray-600">
            Temukan UKM yang paling sesuai dengan minat dan bakatmu!
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Data Pribadi
            </h2>
            <p className="text-gray-600">
              Lengkapi informasi berikut untuk memulai kuisioner
            </p>
          </div>

          <BiodataForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">ℹ️ Informasi</h3>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>✓ Kuisioner ini gratis dan tidak memiliki nilai akademik</li>
            <li>✓ Hasil rekomendasi berdasarkan minat dan preferensimu</li>
            <li>✓ Data disimpan untuk keperluan statistik UKM</li>
            <li>✓ Estimasi waktu: 5-10 menit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
