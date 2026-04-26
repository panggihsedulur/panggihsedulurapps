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
    biodata/page.tsx   # redirect legacy
    test/page.tsx      # redirect legacy
    result/page.tsx    # redirect legacy
  components/test/
    BiodataForm.tsx
    QuestionCard.tsx
    ProgressBar.tsx
    UkmCard.tsx
  lib/
    schema.ts
    questions.ts
    ukm-data.ts
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
4. Sistem ambil kategori dominan, lalu menampilkan branching level 2/3.
5. Sistem gabungkan rekomendasi dari:
   - pre-filter biodata
   - hasil branching
   - fallback top kategori scoring
6. Data hasil disimpan ke Supabase tabel student_results.
7. User diarahkan ke /kuisioner/result.

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
- lib/ukm-data.ts: data UKM + pre-filter rules + helper rekomendasi
- lib/quiz-helpers.ts: helper submit, top kategori, kombinasi rekomendasi
- lib/supabase.ts: client Supabase dan type StudentResult

## 7. Status

- Alur biodata -> test -> result sudah terimplementasi.
- Branching question sudah aktif.
- Penyimpanan hasil ke Supabase sudah terimplementasi.
- Rute lama tetap didukung via redirect agar kompatibel.
