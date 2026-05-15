# 📖 Dokumentasi Panggih Sedulur Apps

Panduan lengkap implementasi, konfigurasi, dan referensi teknis untuk proyek Kuisioner UKM Unsoed.

---

## 📁 Struktur Dokumentasi

### 🎯 **Guides** (Panduan & Implementasi)

Dokumen-dokumen yang menjelaskan cara kerja sistem dan alur implementasi:

- **[IMPLEMENTATION_PLAN.md](guides/IMPLEMENTATION_PLAN.md)**  
  Rencana fase implementasi dengan status checklist semua tahap development.

- **[KuisionerLogic.md](guides/KuisionerLogic.md)**  
  Ringkasan teknis: tech stack, struktur implementasi aktual, dan alur logika sistem.

- **[RancanganLogikaKuis.md](guides/RancanganLogikaKuis.md)**  
  Detail lengkap kuisioner: pertanyaan level 1-3, branching logic, dan tampilan hasil.

---

### 📚 **References** (Referensi Teknis)

Dokumentasi referensi untuk API, konfigurasi, dan tipe data:

- **[SUPABASE_INTEGRATION.md](references/SUPABASE_INTEGRATION.md)**  
  Setup Supabase + Zod: client configuration, schema validation, dan contoh implementasi.

- **[UKM_DATA_REFERENCE.md](references/UKM_DATA_REFERENCE.md)**  
  Referensi data UKM: struktur, kategori, helper functions, dan cara penggunaan.

- **[AGENTS.md](references/AGENTS.md)**  
  Catatan tentang Next.js version dan breaking changes.

- **[CLAUDE.md](references/CLAUDE.md)**  
  Referensi konfigurasi Claude.

---

## 🚀 Quick Start

1. **Mulai dari [KuisionerLogic.md](guides/KuisionerLogic.md)** untuk pemahaman umum sistem
2. **Lanjut ke [RancanganLogikaKuis.md](guides/RancanganLogikaKuis.md)** untuk detail kuisioner
3. **Lihat [SUPABASE_INTEGRATION.md](references/SUPABASE_INTEGRATION.md)** untuk setup database
4. **Rujuk [UKM_DATA_REFERENCE.md](references/UKM_DATA_REFERENCE.md)** saat menggunakan helper functions

---

## 📋 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Form & Validasi**: React Hook Form + Zod
- **Database**: Supabase
- **Language**: TypeScript

---

## 🎯 Kategori Utama

Sistem scoring kuisioner menggunakan 5 kategori utama:

1. **Olahraga**
2. **Seni**
3. **Penalaran**
4. **Pecinta Alam**
5. **Sosial & Disiplin**

---

## 📝 Catatan

- Dokumentasi ini menggantikan file-file markdown yang sebelumnya berada di root project
- Semua file sudah terorganisir dalam folder `docs/` dengan subfolder `guides/` dan `references/`
- Untuk update informasi, rujuk file-file dalam struktur folder di atas
