# Panggih Sedulur Apps

Web app kuisioner minat bakat UKM dan paguyuban UNSOED.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (penyimpanan hasil kuis)
- Zod + React Hook Form (validasi biodata)

## Jalankan Lokal

```bash
npm install
npm run dev
```

Jika port 3000 sudah dipakai, Next.js otomatis pindah ke port lain.

## Environment Variable

Buat file .env.local:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
NEXT_PUBLIC_SITE_URL=https://www.panggihsedulur.bem-unsoed.com
```

## Rute Utama

- / -> landing page
- /beranda -> hero/beranda
- /kuisioner -> masuk ke biodata
- /kuisioner/biodata -> form biodata
- /kuisioner/test -> kuis level 1 + branching
- /kuisioner/result -> hasil rekomendasi

Kompatibilitas rute lama tetap ada:

- /biodata -> redirect ke /kuisioner/biodata
- /test -> redirect ke /kuisioner/test
- /result -> redirect ke /kuisioner/result

## Alur Sistem

1. User isi biodata di /kuisioner/biodata.
2. Biodata disimpan ke localStorage.
3. User menjawab 5 soal level 1 untuk scoring kategori.
4. Sistem lanjut ke pertanyaan branching sesuai kategori dominan.
5. Rekomendasi final digabung dari:
   - hasil scoring
   - pre-filter biodata (agama, KIP-K, fakultas)
   - hasil branching
6. Hasil disimpan ke tabel Supabase student_results.
7. Halaman hasil menampilkan kategori dominan, skor, dan rekomendasi UKM.

## Referensi Dokumen

- RancanganLogikaKuis.md -> logika kuis dan branching final
- UKM_DATA_REFERENCE.md -> data UKM dan helper rekomendasi
- SUPABASE_INTEGRATION.md -> setup dan integrasi Supabase
- IMPLEMENTATION_PLAN.md -> status implementasi saat ini
