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
        <label htmlFor="nama" className="block text-sm font-medium mb-2">
          Nama Lengkap *
        </label>
        <input
          id="nama"
          {...register("nama")}
          placeholder="Masukkan nama lengkap"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.nama && (
          <p className="text-red-500 text-sm mt-1">{errors.nama.message}</p>
        )}
      </div>

      {/* NIM */}
      <div>
        <label htmlFor="nim" className="block text-sm font-medium mb-2">
          NIM *
        </label>
        <input
          id="nim"
          {...register("nim")}
          placeholder="Masukkan NIM"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.nim && (
          <p className="text-red-500 text-sm mt-1">{errors.nim.message}</p>
        )}
      </div>

      {/* Fakultas */}
      <div>
        <label htmlFor="fakultas" className="block text-sm font-medium mb-2">
          Fakultas *
        </label>
        <select
          id="fakultas"
          {...register("fakultas")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <p className="text-red-500 text-sm mt-1">{errors.fakultas.message}</p>
        )}
      </div>

      {/* Jurusan */}
      <div>
        <label htmlFor="jurusan" className="block text-sm font-medium mb-2">
          Jurusan/Program Studi *
        </label>
        <input
          id="jurusan"
          {...register("jurusan")}
          placeholder="Masukkan jurusan/program studi"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.jurusan && (
          <p className="text-red-500 text-sm mt-1">{errors.jurusan.message}</p>
        )}
      </div>

      {/* Agama */}
      <div>
        <label htmlFor="agama" className="block text-sm font-medium mb-2">
          Agama (Opsional)
        </label>
        <select
          id="agama"
          {...register("agama")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <p className="text-red-500 text-sm mt-1">{errors.agama.message}</p>
        )}
      </div>

      {/* KIP-K */}
      <div className="flex items-center gap-3">
        <input
          id="is_kipk"
          type="checkbox"
          {...register("is_kipk")}
          className="w-5 h-5 accent-blue-500"
        />
        <label htmlFor="is_kipk" className="text-sm font-medium cursor-pointer">
          Penerima Beasiswa KIP-K / Bidikmisi (Opsional)
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
      >
        {isLoading ? "Loading..." : "Lanjut ke Kuis"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        * Wajib diisi | Data anda akan disimpan untuk keperluan statistik UKM
      </p>
    </form>
  );
}
