# Rancangan Halaman Utama (Landing Page)

Dokumen ini berisi rancangan konten dan struktur **Halaman Utama** untuk Panggih Sedulur (Pangsud), termasuk rancangan **card** untuk menampilkan UKM/Paguyuban.

## 1) Halaman Utama

### A. Pengenalan Pangsud

**Tujuan:** memperkenalkan Panggih Sedulur secara singkat dan jelas.

**Konten yang ditampilkan:**

- Judul/Headline: “Panggih Sedulur”
- Subheadline: penjelasan singkat misi/tujuan
- Deskripsi ringkas (1–2 paragraf)
- CTA utama (mis. “Mulai Kuisioner”) dan CTA sekunder (mis. “Lihat UKM & Paguyuban”)

---

### B. Pengenalan Maskot

**Tujuan:** membangun identitas dan kedekatan.

**Konten yang ditampilkan:**

- Nama maskot
- Ilustrasi/foto maskot
- Narasi singkat (siapa maskot, kenapa ada, peran di event/kuisioner)
- 2–3 poin karakter/keunikan maskot

---

### C. Rangkaian Acara

**Tujuan:** menjelaskan alur/agenda acara dengan mudah dipindai.

**Konten yang ditampilkan:**

- Judul section: “Rangkaian Acara”
- Timeline/daftar agenda (urut waktu)
- Untuk setiap item agenda:
  - Nama sesi
  - Tanggal/jam (jika ada)
  - Lokasi (jika ada)
  - Deskripsi singkat (1–2 kalimat)

---

### D. Teks Sambutan

**Tujuan:** memberikan pesan resmi (ketua/panitia/pembina).

**Konten yang ditampilkan:**

- Foto penulis sambutan (opsional)
- Nama + jabatan
- Isi sambutan (ringkas, 1–3 paragraf)
- Kutipan highlight (opsional)

---

### E. Testimoni (Carousel)

**Tujuan:** meningkatkan trust melalui pengalaman orang lain.

**Bentuk:** carousel/slider testimoni.

**Isi per testimoni:**

- Nama
- Asal (opsional, mis. prodi/angkatan/paguyuban/ukm)
- Foto avatar (opsional)
- Isi testimoni (1–3 kalimat)

**Perilaku carousel (rancangan UX):**

- Tombol navigasi kiri/kanan
- Indikator posisi (dots)
- Responsif: 1 item per layar di mobile, bisa lebih di desktop (jika diperlukan)

---

### F. Sponsorship

**Tujuan:** menampilkan sponsor/partner dan CTA kerja sama.

**Konten yang ditampilkan:**

- Judul section: “Sponsorship”
- Grid logo sponsor (urut prioritas)
- Kategori sponsor (opsional: Platinum/Gold/Silver)
- CTA: “Jadi Sponsor” / “Hubungi Kami”
- Kontak sponsorship (email/WA) dan/atau link proposal

---

## 2) Rancangan Card UKM/Paguyuban

Card digunakan untuk menampilkan UKM/Paguyuban dengan kombinasi visual + informasi kontak.

### Struktur Card (Isi)

**A. Foto kecil bulat (logo)**

- Bentuk: bulat
- Fungsi: identitas organisasi (logo UKM/Paguyuban)

**B. Foto besar (dokumentasi)**

- Fungsi: menampilkan aktivitas/kegiatan
- Posisi: bagian atas card (cover) atau side (tergantung layout)

**C. Konten informasi**

- Deskripsi singkat (ringkas, 1–3 kalimat)
- Nama Paguyuban/UKM
- Jenis: `UKM` atau `Paguyuban`
- CP Humas (format yang konsisten)
- Instagram (handle/link)

### Field Data (untuk dipakai di kode)

Minimal field yang direkomendasikan:

- `name`: string — nama UKM/Paguyuban
- `type`: string — “UKM” | “Paguyuban”
- `description`: string — deskripsi singkat
- `logoUrl`: string — URL/path logo (foto kecil bulat)
- `photoUrl`: string — URL/path foto dokumentasi (foto besar)
- `contactPerson`: string — nama/role CP (opsional)
- `contact`: string — nomor WA / telepon / email (sesuai kebutuhan)
- `instagram`: string — link atau handle IG

### Catatan Tampilan (ringkas)

- Logo kecil bulat ditempatkan dekat judul/nama agar mudah dikenali.
- Foto dokumentasi besar diprioritaskan sebagai visual utama.
- Informasi kontak (CP + IG) ditampilkan jelas dan bisa di-tap/click.
