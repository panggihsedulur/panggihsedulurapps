# 📋 IMPLEMENTATION PLAN - Kuisioner UKM Unsoed

> Berdasarkan: KuisionerLogic.md + RancanganLogikaKuis.md

---

## 🎯 PHASE 1: SETUP & INFRASTRUCTURE

- [ ] **Setup Supabase Database**
  - [ ] Buat tabel `student_results` dengan schema
  - [ ] Setup authentication (opsional, bisa pakai UUID)
  - [ ] Create `supabase.ts` client

- [ ] **Setup Next.js Project Structure**
  - [ ] Verifikasi folder structure
  - [ ] Install dependencies: `shadcn/ui`, `lucide-react`, `@supabase/supabase-js`
  - [ ] Verifikasi Tailwind CSS

---

## 📝 PHASE 2: DATA LAYER (Logika Kuisioner)

- [ ] **Buat `lib/questions.ts`**
  - [ ] Level 1: 5 pertanyaan utama (5 kategori)
  - [ ] Level 2-3: Pertanyaan percabangan untuk setiap kategori
  - [ ] Semua detail dari RancanganLogikaKuis.md

- [ ] **Buat `lib/ukm-data.ts`**
  - [ ] Mapping kategori → UKM recommendations
  - [ ] Pre-filtering rules (agama, KIP-K, fakultas)
  - [ ] Deskripsi singkat tiap UKM

- [ ] **Buat `lib/calculate.ts`**
  - [ ] Scoring logic (akumulasi poin per kategori)
  - [ ] Fungsi mencari top 2 kategori
  - [ ] Fungsi mapping kategori → UKM recommendations
  - [ ] Fungsi apply pre-filtering berdasarkan biodata

---

## 🎨 PHASE 3: COMPONENTS

- [ ] **Buat `components/test/BiodataForm.tsx`**
  - [ ] Form: nama, NIM, fakultas, jurusan, agama, status KIP-K
  - [ ] Simpan ke state/localStorage
  - [ ] Validasi input

- [ ] **Buat `components/test/QuestionCard.tsx`**
  - [ ] Display pertanyaan + pilihan
  - [ ] Handle click → update score
  - [ ] Dynamic rendering berdasarkan kategori dominan (Level 2-3)

- [ ] **Buat `components/test/ProgressBar.tsx`**
  - [ ] Show progress kuisioner (x dari total pertanyaan)

- [ ] **Buat `components/test/UkmCard.tsx`**
  - [ ] Display rekomendasi UKM
  - [ ] Tampilkan badge/description

---

## 🏠 PHASE 4: PAGES

- [ ] **`app/page.tsx` (Landing Page)**
  - [ ] CTA button → `/biodata`

- [ ] **`app/biodata/page.tsx` (Biodata Form)**
  - [ ] Render BiodataForm
  - [ ] Redirect ke `/test` setelah submit

- [ ] **`app/test/page.tsx` (Quiz Page)**
  - [ ] Render QuestionCard + ProgressBar
  - [ ] Navigate Level 1 → Level 2/3 berdasarkan score
  - [ ] Submit → calculate score + save to Supabase → redirect `/result`

- [ ] **`app/result/page.tsx` (Result Page)**
  - [ ] Fetch data dari session/localStorage
  - [ ] Tampilkan top kategori
  - [ ] Tampilkan 2-3 UKM rekomendasi dengan UkmCard
  - [ ] Styling hasil

---

## 🔧 PHASE 5: INTEGRASI & DEPLOYMENT

- [ ] **State Management**
  - [ ] Setup Zustand atau Context untuk global biodata + score
  - [ ] Atau gunakan localStorage untuk simplicity

- [ ] **Supabase Integration**
  - [ ] Implement insert ke `student_results` di `/test`

- [ ] **Testing & Refinement**
  - [ ] End-to-end test seluruh flow
  - [ ] Mobile responsiveness check
  - [ ] Animation & UX polish

---

## 📊 PRIORITAS IMPLEMENTASI (Recommended Order)

```
1. Setup Supabase + struktur folder
   ↓
2. lib/questions.ts (semua soal)
   ↓
3. lib/ukm-data.ts (mapping UKM)
   ↓
4. lib/calculate.ts (scoring logic)
   ↓
5. BiodataForm + QuestionCard component
   ↓
6. /biodata page
   ↓
7. /test page (quiz logic)
   ↓
8. /result page
   ↓
9. Supabase save + styling final
```

---

## 📌 NOTES

### KATEGORI UTAMA (5)

1. **Seni** - musik, seni, pertunjukan
2. **Olahraga** - bola, beladiri, raket, catur
3. **Penalaran & Keilmuan** - riset, debat, jurnalisme, robotik
4. **Pecinta Alam** - hiking, panjat tebing, arum jeram
5. **Kemanusiaan & Sosial** - medis, keamanan, pramuka, relawan

### PRE-FILTERING (Biodata)

- Agama: Islam → UKKI, Protestan → PMKP, Katolik → UMAKA
- KIP-K: "Ya" → Himabisi
- Fakultas Kesehatan → CIMSA (boost)

### SCORING SYSTEM

- Setiap jawaban Level 1: +10 poin ke kategori tertentu
- Top kategori → Level 2/3 branching
- Hasil akhir: 2-3 UKM terbaik + pre-filtered recommendations

---

## 🚀 NEXT STEP

Mana yang ingin dikerjakan duluan?

- [ ] Setup Supabase + struktur folder
- [ ] lib/questions.ts
- [ ] lib/ukm-data.ts
- [ ] lib/calculate.ts
- [ ] Components
- [ ] Pages
