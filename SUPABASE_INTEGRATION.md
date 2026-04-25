<!-- BEGIN:SUPABASE-SETUP -->

# 🎯 Setup Supabase + Zod — Model A

Dokumentasi integrasi Supabase dengan validasi Zod untuk kuisioner UKM.

---

## 📁 File Structure yang Sudah Dibuat

```
src/lib/
├── supabase.ts          ← Supabase client
├── schema.ts            ← Zod schemas + type definitions
└── quiz-helpers.ts      ← Helper functions (save, pre-filter, scoring)
```

---

## 📋 Checklist Implementasi

- [x] `lib/supabase.ts` - Client setup
- [x] `lib/schema.ts` - Zod schemas (Biodata, QuizResult)
- [x] `lib/quiz-helpers.ts` - Helper functions (saveQuizResult, getPreFilteredUKM, etc)
- [ ] `components/test/BiodataForm.tsx` - Form dengan validasi Zod
- [ ] `app/biodata/page.tsx` - Halaman biodata
- [ ] `app/test/page.tsx` - Halaman kuis + scoring
- [ ] `app/result/page.tsx` - Halaman hasil + rekomendasi

---

## 🔌 Cara Pakai di Komponen

### 1️⃣ BiodataForm Component

```tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiodataSchema, type Biodata } from "@/lib/schema";
import { useRouter } from "next/navigation";

export function BiodataForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Biodata>({
    resolver: zodResolver(BiodataSchema),
  });

  const onSubmit = (data: Biodata) => {
    // Simpan ke localStorage atau state management
    localStorage.setItem("biodata", JSON.stringify(data));

    // Redirect ke halaman kuis
    router.push("/test");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Input fields dengan error handling */}
      <input {...register("nama")} placeholder="Nama Lengkap" />
      {errors.nama && <span>{errors.nama.message}</span>}

      <input {...register("nim")} placeholder="NIM" />
      {errors.nim && <span>{errors.nim.message}</span>}

      {/* ... field lainnya ... */}

      <button type="submit">Lanjut ke Kuis</button>
    </form>
  );
}
```

### 2️⃣ Test Page (Scoring + Save)

```tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  saveQuizResult,
  getTopKategori,
  getPreFilteredUKM,
} from "@/lib/quiz-helpers";
import { initializeSkor, type Biodata, type Kategori } from "@/lib/schema";

export default function TestPage() {
  const router = useRouter();
  const [biodata, setBiodata] = useState<Biodata | null>(null);
  const [skor, setSkor] = useState<Record<string, number>>({});

  // Load biodata dari localStorage
  useEffect(() => {
    const stored = localStorage.getItem("biodata");
    if (stored) {
      setBiodata(JSON.parse(stored));
      setSkor(initializeSkor());
    }
  }, []);

  // Handle jawaban kuis
  const handleAnswer = (kategori: Kategori, weight: number) => {
    setSkor((prev) => ({
      ...prev,
      [kategori]: (prev[kategori] || 0) + weight,
    }));
  };

  // Submit kuis
  const handleSubmit = async () => {
    if (!biodata) return;

    const topKategori = getTopKategori(skor, 2);
    const preFiltered = getPreFilteredUKM(
      biodata.agama,
      biodata.is_kipk,
      biodata.fakultas,
    );

    // TODO: Generate rekomendasi_ukm dari lib/ukm-data.ts berdasarkan topKategori
    const rekomendasi_ukm = [...preFiltered, ...topKategori]; // Placeholder

    const result = {
      biodata,
      skor_kategori: skor,
      top_kategori: topKategori,
      rekomendasi_ukm: rekomendasi_ukm.slice(0, 3), // Top 3
    };

    // Simpan ke Supabase
    const { success, error } = await saveQuizResult(result);
    if (success) {
      localStorage.setItem("quizResult", JSON.stringify(result));
      router.push("/result");
    } else {
      alert("Gagal menyimpan: " + error);
    }
  };

  return (
    <div>
      {/* Render questions */}
      {/* Scoring logic */}
      <button onClick={handleSubmit}>Submit & Lihat Hasil</button>
    </div>
  );
}
```

### 3️⃣ Result Page

```tsx
"use client";
import { useEffect, useState } from "react";
import { type QuizResult } from "@/lib/schema";

export default function ResultPage() {
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("quizResult");
    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  if (!result) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hasil Kuis Kamu</h1>
      <p>Top Kategori: {result.top_kategori.join(", ")}</p>
      <h2>Rekomendasi UKM:</h2>
      <ul>
        {result.rekomendasi_ukm.map((ukm) => (
          <li key={ukm}>{ukm}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 🚀 Dependency yang Diperlukan

Pastikan sudah terinstall:

```bash
npm install zod @supabase/supabase-js react-hook-form @hookform/resolvers
```

---

## 📝 Notes

1. **Biodata disimpan di localStorage** saat user submit di halaman `/biodata`
2. **Scoring terjadi di halaman `/test`** saat user menjawab kuis
3. **Pada submit**, data dikirim ke Supabase via `saveQuizResult()`
4. **Result page menampilkan** data dari localStorage
5. **Pre-filtering** otomatis diterapkan di `getPreFilteredUKM()`

---

## ✅ Next Steps

1. Buat `lib/ukm-data.ts` — mapping kategori → UKM recommendations
2. Buat `lib/questions.ts` — semua soal Level 1-3
3. Implementasi komponen BiodataForm, QuestionCard, UkmCard
4. Buat halaman `/biodata`, `/test`, `/result`
5. Testing end-to-end di Supabase dashboard

<!-- END:SUPABASE-SETUP -->
