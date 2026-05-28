# PROJECT KUISIONER MINAT BAKAT UKM UNSOED

Dokumen ini adalah ringkasan implementasi yang sudah berjalan di kode.

## 1. Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Form + Validasi: React Hook Form + Zod
- Database: Supabase
- Bahasa: TypeScript

## 2. Struktur Implementasi Aktual

```bash
src/
  app/
    kuisioner/
      biodata/page.tsx
      test/page.tsx
      result/page.tsx
  components/test/
    BiodataForm.tsx
    QuestionCard.tsx
    ProgressBar.tsx
    UkmCard.tsx
  data/
    schema.ts
    questions.ts
    UkmLogic.ts
    quiz-helpers.ts
    supabase.ts
```

## 3. Kategori Utama (Sesuai Kode)

Kategori pada scoring level 1:

- Olahraga
- Seni
- Penalaran
- Pecinta Alam
- Sosial & Disiplin

Catatan:

- Kerohanian dan kategori khusus tidak jadi kategori scoring level 1.
- Kerohanian/KIP-K/Fakultas diterapkan sebagai pre-filter biodata.

## 4. Alur Logika

1. User isi biodata di /kuisioner/biodata.
2. Biodata disimpan di localStorage.
3. User menjawab 5 soal level 1 (scoring kategori).
4. Sistem ambil top kategori (maks 2 kategori) dari hasil scoring level 1.
5. Sistem menampilkan branching level 2/3 untuk setiap kategori top (berurutan), jika pertanyaannya tersedia.
6. Sistem gabungkan rekomendasi dari:
   - hasil branching (paling spesifik dari jawaban user)
   - pre-filter biodata (agama/KIP-K/fakultas)
   - fallback scoring hanya jika tidak ada hasil branching dan tidak ada hasil pre-filter
7. Data hasil disimpan ke Supabase tabel student_results.
8. User diarahkan ke /kuisioner/result.

## 5. Skema Data Hasil

Payload yang dikirim ke Supabase:

```ts
{
  (nama,
    nim,
    fakultas,
    jurusan,
    agama,
    is_kipk,
    skor_kategori,
    rekomendasi_ukm,
    top_kategori);
}
```

## 6. Mapping Modul

- lib/schema.ts: schema biodata, schema hasil, kategori utama
- lib/questions.ts: level 1 + branching level 2/3
- data/UkmLogic.ts: data UKM + pre-filter rules + helper rekomendasi
- lib/quiz-helpers.ts: helper submit, top kategori, kombinasi rekomendasi
- lib/supabase.ts: client Supabase dan type StudentResult

## 7. Status

- Alur biodata -> test -> result sudah terimplementasi.
- Branching question sudah aktif.
- Penyimpanan hasil ke Supabase sudah terimplementasi.
- Route kuisioner hanya menggunakan prefix /kuisioner.
