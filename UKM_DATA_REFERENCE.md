<!-- BEGIN:UKM-DATA-REFERENCE -->

# 📚 UKM Data & Recommendation System

Dokumentasi lengkap tentang `lib/ukm-data.ts` dan cara kerja sistem rekomendasi UKM.

---

## 🎯 Konsep Dasar

Sistem rekomendasi UKM bekerja dengan 3 level:

```
┌──────────────────────────────────────────────────────┐
│ LEVEL 1: SCORING KUIS (5 Kategori Utama)           │
│ - Olahraga                                           │
│ - Seni                                               │
│ - Penalaran                                          │
│ - Pecinta Alam                                       │
│ - Sosial & Disiplin                                  │
└────────────────────┬─────────────────────────────────┘
                     │
        ┌────────────▼────────────┐
        │ Top 2 Kategori Tertinggi │
        └────────────┬────────────┘
                     │
┌────────────────────▼─────────────────────────────────┐
│ LEVEL 2: PRE-FILTERING BIODATA                       │
│ - Agama (Islam→UKKI, Protestan→PMKP, dll)           │
│ - KIP-K (Ya → Himabisi)                             │
│ - Fakultas (Kesehatan → CIMSA)                      │
└────────────────────┬─────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────┐
│ LEVEL 3: FINAL RECOMMENDATION                        │
│ - Combine scoring + pre-filtering                    │
│ - Deduplicate & sort by priority                     │
│ - Top 3 UKM final untuk user                        │
└──────────────────────────────────────────────────────┘
```

---

## 📊 UKM Organization

### Struktur File

```
lib/ukm-data.ts
├── Interface UKM
├── Pre-filtering Rules (agama, KIP-K, fakultas)
├── Kategori Arrays:
│   ├── olahragaUKM (13 UKM)
│   ├── seniUKM (6 UKM)
│   ├── penaranUKM (6 UKM)
│   ├── alamBebasUKM (4 UKM)
│   ├── sosialUKM (6 UKM)
│   ├── kerohanianUKM (3 UKM - special)
│   └── khususUKM (2 UKM - special)
├── Master Maps
└── Helper Functions
```

### Kategori Scoring (5)

#### 1. OLAHRAGA (13 UKM)

- **Tim Sports**: UFC, UBB, Bola Voli, Hand Ball
- **Bela Diri**: Taekwondo, PSHT, Merpati Putih, BKC, KEMPO, Gokasi
- **Raket**: Bulutangkis, Tenis Meja, Tenis Lapangan
- **Strategi**: Catur

#### 2. SENI (6 UKM)

- **Vokal**: PSM GBS
- **Musik**: MBBPS
- **Teater**: USMAN
- **Tari**: SAKTA
- **Film**: UFU
- **Budaya Populer**: Jejepangan Kazoku 1963

#### 3. PENALARAN (6 UKM)

- **Riset**: UKMPR
- **Bahasa**: SEF
- **Diplomasi**: FPCI
- **Kepemimpinan Global**: AIESEC
- **Jurnalistik**: LPM Sketsa
- **Teknologi**: Soedirman Robotic Team

#### 4. PECINTA ALAM (4 UKM)

- **Hiking**: UPL MPA
- **Panjat**: Panjat Tebing
- **Air**: Arung Jeram
- **Kepanduan**: Racana Soedirman

#### 5. SOSIAL & DISIPLIN (6 UKM)

- **Medis**: KSR-PMI
- **Bela Negara**: MENWA
- **Relawan**: Racana Soedirman
- **Kemanusiaan**: Muda Bersinar
- **Internasional**: AIESEC
- **Kesehatan**: CIMSA

### Kategori Spesial (Pre-filtering)

#### KEROHANIAN (3 UKM)

- UKKI (Islam)
- PMKP (Kristen Protestan)
- UMAKA (Kristen Katolik)

#### KHUSUS (2 UKM)

- Himabisi (KIP-K)
- CIMSA (Fakultas Kesehatan)

---

## 🔧 Interface & Types

```typescript
interface UKM {
  id: string; // e.g., "ukm-104"
  name: string; // e.g., "UFC"
  title: string; // e.g., "Unsoed Football Club"
  category: string; // e.g., "Olahraga - Tim"
  description: string; // Detail UKM
  priority: number; // 1 (highest) - sorting dalam kategori
}
```

---

## 🚀 Helper Functions

### 1. `getUKMById(id: string): UKM | undefined`

Cari UKM berdasarkan ID atau nama.

```typescript
import { getUKMById } from "@/lib/ukm-data";

const ukm = getUKMById("ukm-104");
// or
const ukm = getUKMById("UFC");

console.log(ukm?.name); // "UFC"
```

### 2. `getRecommendedUKM(topKategori: string[], limit: number = 3): UKM[]`

Dapatkan rekomendasi UKM hanya berdasarkan scoring (tanpa pre-filtering).

```typescript
import { getRecommendedUKM } from "@/lib/ukm-data";

const topKategori = ["Olahraga", "Seni"];
const recommendations = getRecommendedUKM(topKategori, 3);

// Output:
// [
//   { id: 'ukm-104', name: 'UFC', priority: 1, ... },
//   { id: 'ukm-092', name: 'Bola Voli', priority: 3, ... },
//   { id: 'ukm-093', name: 'PSM GBS', priority: 1, ... }
// ]
```

### 3. `getCombinedRecommendations(topKategori, agama?, is_kipk?, fakultas?): UKM[]`

Dapatkan rekomendasi UKM gabungan: scoring + pre-filtering biodata.

```typescript
import { getCombinedRecommendations } from '@/lib/ukm-data'

const recommendations = getCombinedRecommendations(
  topKategori: ['Olahraga', 'Seni'],
  agama: 'Islam',
  is_kipk: true,
  fakultas: 'Kesehatan'
)

// Output termasuk:
// - Top UKM dari Olahraga & Seni
// - + UKKI (dari agama Islam)
// - + Himabisi (dari KIP-K)
// - + CIMSA (dari fakultas kesehatan)
// - Deduplicated & sorted by priority
```

---

## 📝 Pre-filtering Rules

Tersimpan dalam `preFilteringRules` object:

```typescript
export const preFilteringRules = {
  agama: {
    Islam: ["UKKI"],
    "Kristen Protestan": ["PMKP"],
    "Kristen Katolik": ["UMAKA"],
  },
  kipk: {
    true: ["Himabisi"],
  },
  fakultas: {
    Kesehatan: ["CIMSA"],
    Kedokteran: ["CIMSA"],
  },
};
```

---

## 🔌 Integrasi dengan quiz-helpers.ts

File `quiz-helpers.ts` menyediakan helper functions yang lebih user-friendly:

### `getRecommendedUKMNames(topKategori, limit = 3): string[]`

Return array nama UKM (bukan object).

```typescript
import { getRecommendedUKMNames } from "@/lib/quiz-helpers";

const names = getRecommendedUKMNames(["Olahraga", "Seni"]);
// Output: ['UFC', 'Bola Voli', 'PSM GBS']
```

### `getCombinedRecommendationNames(topKategori, agama, is_kipk, fakultas, limit = 3): string[]`

Return array nama UKM dengan pre-filtering included.

```typescript
import { getCombinedRecommendationNames } from "@/lib/quiz-helpers";

const names = getCombinedRecommendationNames(
  ["Olahraga"],
  "Islam",
  true,
  "Kesehatan",
  3,
);
// Output: ['UFC', 'UKKI', 'Himabisi'] (atau kombinasi lainnya)
```

### `getCombinedRecommendationObjects(topKategori, agama, is_kipk, fakultas, limit = 3): UKM[]`

Return object UKM lengkap untuk result page (bisa display deskripsi).

```typescript
import { getCombinedRecommendationObjects } from "@/lib/quiz-helpers";

const ukmObjects = getCombinedRecommendationObjects(
  ["Olahraga", "Seni"],
  "Islam",
  true,
  "Kesehatan",
  3,
);

ukmObjects.forEach((ukm) => {
  console.log(`${ukm.title} - ${ukm.description}`);
});
```

---

## 💡 Usage di Test Page

```typescript
"use client";
import {
  getCombinedRecommendationObjects,
  getTopKategori,
} from "@/lib/quiz-helpers";
import { saveQuizResult } from "@/lib/quiz-helpers";
import type { Biodata } from "@/lib/schema";

// Di dalam handleSubmit()
const topKategori = getTopKategori(skor, 2);
const ukmObjects = getCombinedRecommendationObjects(
  topKategori,
  biodata.agama,
  biodata.is_kipk,
  biodata.fakultas,
  3,
);

const result = {
  biodata,
  skor_kategori: skor,
  top_kategori: topKategori,
  rekomendasi_ukm: ukmObjects.map((u) => u.name), // Extract names for storage
};

const { success, error } = await saveQuizResult(result);
```

---

## 💾 Storage di Supabase

Tabel `student_results` menyimpan:

| Kolom             | Tipe            | Contoh                              |
| ----------------- | --------------- | ----------------------------------- |
| `nama`            | text            | "Adi Sudarsono"                     |
| `nim`             | text            | "D500190109"                        |
| `fakultas`        | text            | "Teknik"                            |
| `jurusan`         | text            | "Teknik Informatika"                |
| `agama`           | text (optional) | "Islam"                             |
| `is_kipk`         | boolean         | true                                |
| `skor_kategori`   | jsonb           | `{"Olahraga": 40, "Seni": 20, ...}` |
| `rekomendasi_ukm` | text[]          | `["UFC", "UKKI", "Himabisi"]`       |
| `top_kategori`    | text[]          | `["Olahraga", "Sosial & Disiplin"]` |

---

## ✨ Priority System

Setiap UKM dalam kategori memiliki `priority` (1 = highest):

```typescript
// Contoh dalam olahragaUKM
{ id: 'ukm-104', name: 'UFC', priority: 1 },  // Paling diprioritaskan
{ id: 'ukm-102', name: 'UBB', priority: 2 },
{ id: 'ukm-092', name: 'Bola Voli', priority: 3 },
```

Saat sorting dalam `getRecommendedUKM()`, UKM dengan priority lebih rendah akan muncul lebih dulu.

---

## 🎓 Level 2-3 Branching (Future)

Saat ini `ukm-data.ts` hanya support Level 1 scoring + pre-filtering.

Untuk Level 2-3 branching (pertanyaan percabangan berdasarkan kategori dominan), perlu:

1. Buat `lib/questions-level2.ts` dengan dynamic questions per kategori
2. Render questions conditionally di `/test` page
3. Capture sub-kategori pilihan (e.g., "Olahraga - Tim" vs "Olahraga - Bela Diri")

---

## 📋 Checklist Implementasi

- [x] `lib/ukm-data.ts` - UKM data + helpers
- [x] Integration di `lib/quiz-helpers.ts`
- [ ] Implementasi `lib/questions.ts` (Level 1 only untuk MVP)
- [ ] Test page integration
- [ ] Result page display
- [ ] End-to-end testing

---

<!-- END:UKM-DATA-REFERENCE -->
