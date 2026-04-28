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
      router.push("/kuisioner/test");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 text-white">
      <div className="max-w-2xl mx-auto mt-15">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-normal font-heading  text-center">
            Kuisioner Minat Bakat UKM
          </h1>
          <p className="text-white/70">
            Temukan UKM yang paling sesuai dengan minat dan bakatmu!
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 p-8 md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Data Pribadi
            </h2>
            <p className="text-white/60">
              Lengkapi informasi berikut untuk memulai kuisioner
            </p>
          </div>

          <BiodataForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="font-bold text-white mb-2">Informasi</h3>
          <ul className="text-sm text-white/80 space-y-2">
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
