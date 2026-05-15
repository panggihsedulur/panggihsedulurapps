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
│ - Tidak ada hard limit: tampilkan semua yang relevan  │
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
│   ├── olahragaUKM
│   ├── seniUKM
│   ├── penaranUKM
│   ├── alamBebasUKM
│   ├── sosialUKM
│   ├── kerohanianUKM (special)
│   └── khususUKM (special)
├── Master Maps
└── Helper Functions
```

### Kategori Scoring (5)

#### 1. OLAHRAGA

- **Tim Sports**: UFC, UFU, UBB, Bola Voli, Hand Ball
- **Bela Diri**: Taekwondo, PSHT, Merpati Putih, BKC, KEMPO, Gokasi
- **Raket**: Bulutangkis, Tenis Meja, Tenis Lapangan
- **Strategi**: Catur

#### 2. SENI

- **Vokal**: PSM GBS
- **Musik**: MBBPS
- **Tari**: SAKTA (Sanggar Kreasi Tari Soedirman)
- **Budaya Populer**: Jejepangan Kazoku 1963

#### 3. PENALARAN

- **Riset**: UKMPR
- **Bahasa**: SEF
- **Diplomasi**: FPCI
- **Kepemimpinan Global**: AIESEC
- **Jurnalistik**: LPM Sketsa
- **Teknologi**: Soedirman Robotic Team

#### 4. PECINTA ALAM

- **Hiking**: UPL MPA
- **Panjat**: Panjat Tebing
- **Air**: Arung Jeram
- **Kepanduan**: Racana Soedirman

#### 5. SOSIAL & DISIPLIN

- **Medis**: KSR-PMI
- **Bela Negara**: MENWA
- **Relawan**: Racana Soedirman
- **Anti Narkoba**: Muda Bersinar
- **Internasional**: AIESEC
- **Kesehatan**: CIMSA

### Kategori Spesial (Pre-filtering)

#### KEROHANIAN

- UKKI (Islam)
- USMAN (Seni Islam & Al Qur'an)
- PMKP (Kristen Protestan)
- UMAKA (Kristen Katolik)

#### KHUSUS

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

### 2. `getRecommendedUKM(topKategori: string[], limit?: number): UKM[]`

Dapatkan rekomendasi UKM hanya berdasarkan scoring (tanpa pre-filtering).

```typescript
import { getRecommendedUKM } from "@/lib/ukm-data";

const topKategori = ["Olahraga", "Seni"];
const recommendations = getRecommendedUKM(topKategori);

// Output:
// [
//   { id: 'ukm-104', name: 'UFC', priority: 1, ... },
//   { id: 'ukm-092', name: 'Bola Voli', priority: 3, ... },
//   { id: 'ukm-093', name: 'PSM GBS', priority: 1, ... }
// ]
```

### 3. `getCombinedRecommendations(topKategori, agama?, is_kipk?, fakultas?, branchRecommendations?): UKM[]`

Dapatkan rekomendasi UKM gabungan.

- Jika `branchRecommendations` ada (jawaban Level 2/3), hasil akan **mengutamakan rekomendasi branch** (ditambah pre-filter biodata).
- Fallback scoring digunakan hanya jika tidak ada rekomendasi dari branch dan tidak ada pre-filter biodata.

```typescript
import { getCombinedRecommendations } from '@/lib/ukm-data'

const recommendations = getCombinedRecommendations(
  topKategori: ['Olahraga', 'Seni'],
  agama: 'Islam',
  is_kipk: true,
  fakultas: 'Kesehatan',
  branchRecommendations: ['UFC']
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
    Islam: ["UKKI", "USMAN"],
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

### `getRecommendedUKMNames(topKategori, limit?): string[]`

Return array nama UKM (bukan object).

```typescript
import { getRecommendedUKMNames } from "@/lib/quiz-helpers";

const names = getRecommendedUKMNames(["Olahraga", "Seni"]);
// Output: ['UFC', 'Bola Voli', 'PSM GBS']
```

### `getCombinedRecommendationNames(topKategori, agama, is_kipk, fakultas, branchRecommendations, limit?): string[]`

Return array nama UKM dengan pre-filtering included.

```typescript
import { getCombinedRecommendationNames } from "@/lib/quiz-helpers";

const names = getCombinedRecommendationNames(
  ["Olahraga"],
  "Islam",
  true,
  "Kesehatan",
  [],
);
// Output: ['UFC', 'UKKI', 'Himabisi'] (atau kombinasi lainnya)
```

### `getCombinedRecommendationObjects(topKategori, agama, is_kipk, fakultas, branchRecommendations, limit?): UKM[]`

Return object UKM lengkap untuk result page (bisa display deskripsi).

```typescript
import { getCombinedRecommendationObjects } from "@/lib/quiz-helpers";

const ukmObjects = getCombinedRecommendationObjects(
  ["Olahraga", "Seni"],
  "Islam",
  true,
  "Kesehatan",
  [],
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
  [],
);

const result = {
  biodata,
  skor_kategori: skor,
  top_kategori: topKategori,
  rekomendasi_ukm: ukmObjects.map((u) => u.name), // Extract names for storage
};

const { success, error } = await saveQuizResult(result);
```
