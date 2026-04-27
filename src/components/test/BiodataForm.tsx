"use client";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BiodataFormValues>({
    resolver: zodResolver(BiodataSchema),
    defaultValues: {
      is_kipk: false,
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit(BiodataSchema.parse(values)))}
      className="space-y-6 max-w-2xl mx-auto"
    >
      {/* Nama */}
      <div>
        <label
          htmlFor="nama"
          className="block text-sm font-bold text-white/90 mb-2"
        >
          Nama Lengkap *
        </label>
        <input
          id="nama"
          {...register("nama")}
          placeholder="Masukkan nama lengkap"
          className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-white/5 text-white placeholder:text-white/30 backdrop-blur-sm transition-all focus:bg-white/10"
        />
        {errors.nama && (
          <p className="text-rose-400 text-xs font-medium mt-1.5 ml-1">
            ⚠ {errors.nama.message}
          </p>
        )}
      </div>

      {/* NIM */}
      <div>
        <label
          htmlFor="nim"
          className="block text-sm font-bold text-white/90 mb-2"
        >
          NIM *
        </label>
        <input
          id="nim"
          {...register("nim")}
          placeholder="Masukkan NIM"
          className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-white/5 text-white placeholder:text-white/30 backdrop-blur-sm transition-all focus:bg-white/10"
        />
        {errors.nim && (
          <p className="text-rose-400 text-xs font-medium mt-1.5 ml-1">
            ⚠ {errors.nim.message}
          </p>
        )}
      </div>

      {/* Fakultas */}
      <div>
        <label
          htmlFor="fakultas"
          className="block text-sm font-bold text-white/90 mb-2"
        >
          Fakultas *
        </label>
        <select
          id="fakultas"
          {...register("fakultas")}
          className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-white/5 text-white backdrop-blur-sm transition-all focus:bg-white/10 appearance-none [&>option]:bg-slate-900 [&>option]:text-white"
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
          <p className="text-rose-400 text-xs font-medium mt-1.5 ml-1">
            ⚠ {errors.fakultas.message}
          </p>
        )}
      </div>

      {/* Jurusan */}
      <div>
        <label
          htmlFor="jurusan"
          className="block text-sm font-bold text-white/90 mb-2"
        >
          Jurusan/Program Studi *
        </label>
        <input
          id="jurusan"
          {...register("jurusan")}
          placeholder="Masukkan jurusan/program studi"
          className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-white/5 text-white placeholder:text-white/30 backdrop-blur-sm transition-all focus:bg-white/10"
        />
        {errors.jurusan && (
          <p className="text-rose-400 text-xs font-medium mt-1.5 ml-1">
            ⚠ {errors.jurusan.message}
          </p>
        )}
      </div>

      {/* Agama */}
      <div>
        <label
          htmlFor="agama"
          className="block text-sm font-bold text-white/90 mb-2"
        >
          Agama (Opsional)
        </label>
        <select
          id="agama"
          {...register("agama")}
          className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-white/5 text-white backdrop-blur-sm transition-all focus:bg-white/10 appearance-none [&>option]:bg-slate-900 [&>option]:text-white"
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
          <p className="text-rose-400 text-xs font-medium mt-1.5 ml-1">
            ⚠ {errors.agama.message}
          </p>
        )}
      </div>

      {/* KIP-K */}
      <div className="flex items-center gap-3">
        <input
          id="is_kipk"
          type="checkbox"
          {...register("is_kipk")}
          className="w-5 h-5 accent-cyan-500"
        />
        <label
          htmlFor="is_kipk"
          className="text-sm font-medium text-white/70 cursor-pointer"
        >
          Penerima Beasiswa KIP-K / Bidikmisi (Opsional)
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white py-7 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-cyan-900/40 active:scale-[0.98] mt-4"
      >
        {isLoading ? "Memproses..." : "Lanjut ke Kuis →"}
      </Button>

      <p className="text-xs text-white/30 text-center italic">
        * Wajib diisi | Data anda aman dan hanya untuk keperluan statistik UKM
      </p>
    </form>
  );
}
