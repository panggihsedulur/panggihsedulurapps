---

# 🚀 PROJECT KUISIONER MINAT BAKAT UKM UNSOED

*(Next.js + shadcn/ui + Supabase)*

---

## 🧩 1. Tech Stack Utama

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
  - Button, Card, Progress, Radio Group, Input, Form

- **Backend & Database**: Supabase
- **State Management**:
  - Default: `useState`, `useMemo`
  - Opsional: Zustand (untuk global state biodata)

- **Icon**: Lucide React

---

## 📁 2. Struktur Folder

```bash
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Landing Page
│   ├── biodata/
│   │   └── page.tsx         # Form biodata
│   ├── test/
│   │   └── page.tsx         # Halaman kuisioner
│   └── result/
│       └── page.tsx         # Hasil rekomendasi

├── components/
│   ├── ui/                  # shadcn/ui
│   └── test/
│       ├── BiodataForm.tsx
│       ├── QuestionCard.tsx
│       ├── ProgressBar.tsx
│       └── UkmCard.tsx

├── lib/
│   ├── supabase.ts
│   ├── questions.ts
│   ├── ukm-data.ts
│   ├── calculate.ts
│   └── utils.ts
```

---

## 🧠 3. Model Data (Kategori & Pertanyaan)

### 🎯 Kategori Utama

- **Seni**
- **Olahraga**
- **Penalaran & Keilmuan**
- **Kerohanian**
- **Bela Negara / Sosial**

---

### 📌 Contoh Struktur Pertanyaan

```ts
export const questions = [
  {
    id: 1,
    text: "Di waktu luang, kegiatan apa yang paling sering atau ingin Anda lakukan?",
    options: [
      {
        text: "Berolahraga atau aktivitas fisik",
        weight: {
          Olahraga: 2,
          Seni: 0,
          Penalaran: 0,
          Kerohanian: 0,
          BelaNegara: 0,
        },
      },
      {
        text: "Membaca, diskusi, atau menulis",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 2,
          Kerohanian: 0,
          BelaNegara: 0,
        },
      },
      {
        text: "Musik, seni, atau pementasan",
        weight: {
          Olahraga: 0,
          Seni: 2,
          Penalaran: 0,
          Kerohanian: 0,
          BelaNegara: 0,
        },
      },
    ],
  },
];
```

---

## 🗄️ 4. Skema Database (Supabase)

**Tabel: `student_results`**

| Kolom           | Tipe      | Keterangan                        |
| --------------- | --------- | --------------------------------- |
| id              | uuid (PK) | ID unik                           |
| created_at      | timestamp | Waktu input                       |
| nama            | text      | Nama mahasiswa                    |
| nim             | text      | NIM                               |
| fakultas        | text      | Fakultas                          |
| jurusan         | text      | Jurusan                           |
| skor_kategori   | jsonb     | Contoh: `{Seni: 10, Olahraga: 5}` |
| rekomendasi_ukm | text[]    | Array UKM                         |

---

## 🔄 5. Alur Logika Sistem

### 1. Input Biodata

- User isi di `/biodata`
- Disimpan ke:
  - Zustand / localStorage

---

### 2. Inisialisasi Skor

```ts
const skor = {
  Olahraga: 0,
  Seni: 0,
  Penalaran: 0,
  Kerohanian: 0,
  BelaNegara: 0,
};
```

---

### 3. Menjawab Kuisioner

- Setiap pilihan → tambahkan `weight` ke skor

```ts
skor[kategori] += value;
```

---

### 4. Kalkulasi Hasil

- Ambil **Top 1–2 kategori tertinggi**
- Mapping ke UKM dari `ukm-data.ts`

Contoh:

```ts
const ukmMap = {
  Seni: ["PSM GBS", "USMAN", "SAKTA"],
  Olahraga: ["UBB", "UFC", "Bola Voli"],
};
```

---

### 5. Simpan ke Supabase

```ts
await supabase.from("student_results").insert({
  nama,
  nim,
  fakultas,
  jurusan,
  skor_kategori: skor,
  rekomendasi_ukm: hasil,
});
```

---

### 6. Tampilkan Hasil

Redirect ke `/result`:

- Tampilkan:
  - Top kategori
  - 2–3 UKM rekomendasi
  - Deskripsi singkat

---

## 🧩 6. Integrasi Logika Matchmaking (Versi Lengkap)

### 🔹 Pre-Filtering (Biodata)

Langsung inject rekomendasi tambahan:

- Islam → UKKI
- Protestan → PMKP
- Katolik → UMAKA
- KIP-K → Himabisi
- Fakultas Kesehatan → CIMSA

👉 Ini **tidak menggantikan hasil**, tapi jadi **boost/rekomendasi tambahan**

---

### 🔹 Level 1 (Scoring Utama)

- 5 pertanyaan × bobot kategori
- Hasil = kategori dominan

---

### 🔹 Level 2–3 (Branching Logic)

Setelah kategori dominan ketemu:

#### Contoh: Olahraga

- Tim → Sepak bola / Basket / Voli
- Bela diri → Taekwondo / Silat
- Raket → Badminton / Tennis
- Strategi → Catur

#### Contoh: Seni

- Vokal → PSM
- Musik → Marching Band
- Teater / Tari / Film

👉 Ini bisa dibuat:

- **Dynamic question rendering**
- Berdasarkan `currentCategory`

---

## 🎨 7. Komponen UI Utama

- `BiodataForm` → Input user
- `QuestionCard` → Render soal
- `ProgressBar` → Progress kuisioner
- `UkmCard` → Hasil rekomendasi

---

## 🧠 8. Flow State (Simple)

```txt
Landing → Biodata → Quiz → Calculate → Save DB → Result
```

---

## 🏁 9. Output Result Screen

Contoh:

> 🎉 **Kamu adalah Si Strategis Intelektual!**
>
> Berdasarkan jawabanmu, kamu cocok di:
>
> - SEF
> - FPCI
>
> 💡 Kunjungi booth mereka dan ambil kode rahasia!

---

## ⚡ 10. Upgrade (Opsional tapi Powerful)

- 🔥 Progress animation
- 🎯 Badge personality (Gamification)
- 📊 Chart hasil (pie chart kategori)
- 🧠 Adaptive question (AI-like branching)
- 📱 Mobile-first UI (penting untuk booth)

---

## 🧩 Kesimpulan

Project ini terdiri dari 3 inti:

1. **Input & State (Frontend)**
2. **Logic Matching (Scoring + Branching)**
3. **Persistence (Supabase)**

---
