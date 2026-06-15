"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiodataSchema, type Biodata } from "@/lib/schema";
import { Button } from "@/components/ui/button";

interface BiodataFormProps {
  onSubmit: (data: Biodata) => void;
  isLoading?: boolean;
}

type BiodataFormValues = z.input<typeof BiodataSchema>;

export function BiodataForm({ onSubmit, isLoading = false }: BiodataFormProps) {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<BiodataFormValues>({
    resolver: zodResolver(BiodataSchema),
    defaultValues: {
      is_kipk: false,
    },
  });

  const handleNext = async (fieldsToValidate: (keyof BiodataFormValues)[]) => {
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit(BiodataSchema.parse(values)))}
      className="max-w-2xl mx-auto"
    >
      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`flex items-center ${s < 3 ? "w-full" : ""}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 transition-all duration-300 ${
                step >= s
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-black/5 text-black/50"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`h-1 w-full mx-2 rounded transition-all duration-300 ${
                  step > s ? "bg-cyan-500" : "bg-black/10"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white/80 border border-black/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <h3 className="text-xl font-bold text-black mb-1">
                Identitas Diri
              </h3>
              <p className="text-black/60 text-sm mb-6">
                Lengkapi data diri dan kontak Anda.
              </p>
            </div>

            {/* Nama */}
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-bold text-black mb-2"
              >
                Nama Lengkap *
              </label>
              <input
                id="nama"
                {...register("nama")}
                placeholder="Masukkan nama lengkap"
                className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-black/5 text-black placeholder:text-gray-600 backdrop-blur-sm transition-all focus:bg-white"
              />
              {errors.nama && (
                <p className="text-rose-500 text-xs font-medium mt-1.5 ml-1">
                  ⚠ {errors.nama.message}
                </p>
              )}
            </div>

            {/* NIM */}
            <div>
              <label
                htmlFor="nim"
                className="block text-sm font-bold text-black mb-2"
              >
                NIM *
              </label>
              <input
                id="nim"
                {...register("nim")}
                placeholder="Masukkan NIM"
                className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-black/5 text-black placeholder:text-gray-600 backdrop-blur-sm transition-all focus:bg-white"
              />
              {errors.nim && (
                <p className="text-rose-500 text-xs font-medium mt-1.5 ml-1">
                  ⚠ {errors.nim.message}
                </p>
              )}
            </div>

            {/* Nomor HP */}
            <div>
              <label
                htmlFor="no_hp"
                className="block text-sm font-bold text-black mb-2"
              >
                Nomor HP / WhatsApp *
              </label>
              <input
                id="no_hp"
                {...register("no_hp")}
                placeholder="Contoh: 081234567890"
                className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-black/5 text-black placeholder:text-gray-600 backdrop-blur-sm transition-all focus:bg-white"
              />
              {errors.no_hp && (
                <p className="text-rose-500 text-xs font-medium mt-1.5 ml-1">
                  ⚠ {errors.no_hp.message}
                </p>
              )}
            </div>

            <Button
              type="button"
              onClick={() => handleNext(["nama", "nim", "no_hp"])}
              className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-lg shadow-cyan-500/30 py-6 rounded-xl font-bold text-lg transition-all"
            >
              Selanjutnya →
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <h3 className="text-xl font-bold text-black mb-1">
                Data Akademik
              </h3>
              <p className="text-black/60 text-sm mb-6">
                Informasi studi Anda di kampus.
              </p>
            </div>

            {/* Fakultas */}
            <div>
              <label
                htmlFor="fakultas"
                className="block text-sm font-bold text-black mb-2"
              >
                Fakultas *
              </label>
              <select
                id="fakultas"
                {...register("fakultas")}
                className="w-full px-4 py-3 border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-black/5 text-black backdrop-blur-sm transition-all focus:bg-white appearance-none [&>option]:bg-white [&>option]:text-black"
              >
                <option value="">-- Pilih Fakultas --</option>
                <option value="Teknik">Teknik</option>
                <option value="Pertanian">Pertanian</option>
                <option value="Kesehatan">Kesehatan</option>
                <option value="Kedokteran">Kedokteran</option>
                <option value="Hukum">Hukum</option>
                <option value="Ekonomi dan Bisnis">Ekonomi dan Bisnis</option>
                <option value="Ilmu Sosial dan Ilmu Politik">
                  Ilmu Sosial dan Ilmu Politik
                </option>
                <option value="Pendidikan dan Ilmu Perilaku">
                  Pendidikan dan Ilmu Perilaku
                </option>
              </select>
              {errors.fakultas && (
                <p className="text-rose-500 text-xs font-medium mt-1.5 ml-1">
                  ⚠ {errors.fakultas.message}
                </p>
              )}
            </div>

            {/* Jurusan */}
            <div>
              <label
                htmlFor="jurusan"
                className="block text-sm font-bold text-black mb-2"
              >
                Jurusan/Program Studi *
              </label>
              <input
                id="jurusan"
                {...register("jurusan")}
                placeholder="Masukkan jurusan/program studi"
                className="w-full px-4 py-3 border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-black/5 text-black placeholder:text-black/40 backdrop-blur-sm transition-all focus:bg-white"
              />
              {errors.jurusan && (
                <p className="text-rose-500 text-xs font-medium mt-1.5 ml-1">
                  ⚠ {errors.jurusan.message}
                </p>
              )}
            </div>

            {/* KIP-K */}
            <div className="flex items-center gap-3 p-4 border border-black/10 rounded-xl bg-black/5">
              <input
                id="is_kipk"
                type="checkbox"
                {...register("is_kipk")}
                className="w-5 h-5 accent-cyan-500 cursor-pointer"
              />
              <label
                htmlFor="is_kipk"
                className="text-sm font-medium text-black cursor-pointer"
              >
                Penerima Beasiswa KIP-K / Bidikmisi
              </label>
            </div>

            <div className="flex gap-4 pt-2">
              <Button
                type="button"
                onClick={handlePrev}
                variant="outline"
                className="w-1/3 border-black/20 text-black hover:bg-black/5 py-6 rounded-xl bg-transparent"
              >
                ← Kembali
              </Button>
              <Button
                type="button"
                onClick={() => handleNext(["fakultas", "jurusan"])}
                className="w-2/3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-lg shadow-cyan-500/30 py-6 rounded-xl font-bold text-lg transition-all"
              >
                Selanjutnya →
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <h3 className="text-xl font-bold text-black mb-1">
                Informasi Tambahan
              </h3>
              <p className="text-black/60 text-sm mb-6">
                Untuk rekomendasi UKM/Paguyuban yang lebih akurat (Opsional).
              </p>
            </div>

            {/* Agama */}
            <div>
              <label
                htmlFor="agama"
                className="block text-sm font-bold text-black mb-2"
              >
                Agama (Opsional)
              </label>
              <select
                id="agama"
                {...register("agama")}
                className="w-full px-4 py-3 border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-black/5 text-black backdrop-blur-sm transition-all focus:bg-white appearance-none [&>option]:bg-white [&>option]:text-black"
              >
                <option value="">-- Tidak Dipilih --</option>
                <option value="Islam">Islam</option>
                <option value="Kristen Protestan">Kristen Protestan</option>
                <option value="Kristen Katolik">Kristen Katolik</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddha">Buddha</option>
                <option value="Konghucu">Konghucu</option>
              </select>
              {errors.agama && (
                <p className="text-rose-500 text-xs font-medium mt-1.5 ml-1">
                  ⚠ {errors.agama.message}
                </p>
              )}
            </div>

            {/* Asal Daerah / Paguyuban */}
            <div>
              <label
                htmlFor="asal_daerah"
                className="block text-sm font-bold text-black mb-2"
              >
                Asal Daerah / Paguyuban (Opsional)
              </label>
              <select
                id="asal_daerah"
                {...register("asal_daerah")}
                className="w-full px-4 py-3 border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-black/5 text-black backdrop-blur-sm transition-all focus:bg-white appearance-none [&>option]:bg-white [&>option]:text-black [&>optgroup]:bg-slate-100 [&>optgroup]:text-cyan-700 [&>optgroup]:font-bold"
              >
                <option value="">-- Tidak Dipilih / Lainnya --</option>
                <optgroup label="Tingkat Provinsi / Pulau">
                  <option value="Jawa Timur">Jawa Timur</option>
                  <option value="Lampung">Lampung</option>
                  <option value="Papua">Papua</option>
                  <option value="Sulawesi">Sulawesi</option>
                  <option value="Banten">Banten</option>
                  <option value="Sumatera Utara">Sumatera Utara</option>
                  <option value="Jakarta">DKI Jakarta</option>
                </optgroup>
                <optgroup label="Tingkat Karesidenan / Gabungan">
                  <option value="Pekalongan-Batang">Pekalongan-Batang</option>
                  <option value="Surakarta">Surakarta Raya</option>
                </optgroup>
                <optgroup label="Tingkat Kabupaten / Kota">
                  <option value="Majalengka">Majalengka</option>
                  <option value="Bekasi">Bekasi</option>
                  <option value="Kuningan">Kuningan</option>
                  <option value="Ciamis">Ciamis</option>
                  <option value="Jepara">Jepara</option>
                  <option value="Magelang">Magelang</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Purworejo">Purworejo</option>
                  <option value="Cilacap">Cilacap</option>
                  <option value="Banjarnegara">Banjarnegara</option>
                  <option value="Cirebon">Cirebon</option>
                  <option value="Kebumen">Kebumen</option>
                  <option value="Purbalingga">Purbalingga</option>
                  <option value="Tasikmalaya">Tasikmalaya</option>
                  <option value="Indramayu">Indramayu</option>
                  <option value="Bogor">Bogor</option>
                  <option value="Pemalang">Pemalang</option>
                  <option value="Karawang">Karawang</option>
                  <option value="Sukabumi">Sukabumi</option>
                </optgroup>
                <optgroup label="Etnis / Budaya">
                  <option value="Minang">Minang</option>
                </optgroup>
              </select>
              {errors.asal_daerah && (
                <p className="text-rose-500 text-xs font-medium mt-1.5 ml-1">
                  ⚠ {errors.asal_daerah.message}
                </p>
              )}
            </div>

            <div className="flex gap-4 pt-2">
              <Button
                type="button"
                onClick={handlePrev}
                variant="outline"
                className="w-1/3 border-black/20 text-black hover:bg-black/5 hover:text-black py-6 rounded-xl bg-transparent"
              >
                ← Kembali
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-2/3 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white py-6 rounded-xl font-bold text-lg transition-all shadow-xl shadow-cyan-900/40 active:scale-[0.98]"
              >
                {isLoading ? "Memproses..." : "Mulai Kuis 🚀"}
              </Button>
            </div>
          </div>
        )}
      </div>

      <p className="text-xs text-black/40 text-center italic mt-6">
        * Wajib diisi | Data anda aman dan hanya untuk keperluan statistik UKM
      </p>
    </form>
  );
}
