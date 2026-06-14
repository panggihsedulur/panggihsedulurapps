"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiodataForm } from "@/components/forms/BiodataForm";
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
    <div className="min-h-screen py-10 px-4 text-black">
      <div className="max-w-2xl mx-auto mt-15">
        {/* Form Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[1rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-black/10 p-8 md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold text-black mb-2">
              Data Pribadi
            </h2>
            <p className="text-black/70">
              Lengkapi informasi berikut untuk memulai kuisioner
            </p>
          </div>

          <BiodataForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
