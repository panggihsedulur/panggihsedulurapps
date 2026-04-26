# IMPLEMENTATION PLAN - Kuisioner UKM Unsoed

Status plan disesuaikan dengan implementasi yang sudah ada di repo saat ini.

## Phase 1: Setup & Infrastructure

- [x] Setup struktur Next.js App Router
- [x] Setup Tailwind CSS
- [x] Setup Supabase client di src/lib/supabase.ts
- [x] Setup schema validasi (Zod) di src/lib/schema.ts
- [ ] Verifikasi environment variable di semua environment deploy

## Phase 2: Data Layer

- [x] src/lib/questions.ts
  - [x] Level 1 (5 pertanyaan utama)
  - [x] Level 2-3 branching
- [x] src/lib/ukm-data.ts
  - [x] Mapping kategori ke UKM
  - [x] Pre-filtering biodata
  - [x] Data UKM + priority
- [x] src/lib/quiz-helpers.ts
  - [x] Kalkulasi top kategori
  - [x] Kombinasi rekomendasi (scoring + pre-filter + branching)
  - [x] Save hasil ke Supabase

## Phase 3: Components

- [x] src/components/test/BiodataForm.tsx
- [x] src/components/test/QuestionCard.tsx
- [x] src/components/test/ProgressBar.tsx
- [x] src/components/test/UkmCard.tsx

## Phase 4: Pages

- [x] src/app/kuisioner/biodata/page.tsx
- [x] src/app/kuisioner/test/page.tsx
- [x] src/app/kuisioner/result/page.tsx
- [x] Backward compatibility route redirect
  - [x] src/app/biodata/page.tsx
  - [x] src/app/test/page.tsx
  - [x] src/app/result/page.tsx

## Phase 5: Integration & Quality

- [x] LocalStorage flow biodata/result
- [x] Insert ke tabel student_results
- [ ] End-to-end test flow nyata (biodata -> test -> result -> Supabase)
- [ ] Final copywriting polish untuk UI result dan CTA
- [ ] Konsolidasi lint warnings non-blocking pada komponen non-kuisioner

## Kategori Final (Implementasi)

1. Olahraga
2. Seni
3. Penalaran
4. Pecinta Alam
5. Sosial & Disiplin

## Catatan

- Dokumen ini menggantikan plan awal yang masih memakai route lama /biodata, /test, /result sebagai rute utama.
- Rute utama saat ini menggunakan prefix /kuisioner.
