# RANCANGAN LOGIKA & KUISIONER MATCHMAKING UKM UNSOED

## 1. FILTERING VIA BIODATA (TIDAK MASUK KUISIONER)

Agar kuisioner tidak terlalu panjang, beberapa UKM akan langsung direkomendasikan berdasarkan input form pendaftaran awal:

- Agama: Islam -> UKKI, Protestan -> Pmkp, Katolik -> UMAKA.
- Status Beasiswa KIP-K: Jika "Ya" -> Himabisi.
- Fakultas: Jika "Kedokteran/Rumpun Kesehatan" -> bisa mendapat rekomendasi ekstra ke CIMSA.

---

## 2. LEVEL 1: PERTANYAAN UTAMA (Mencari Kategori Dominan)

**Tujuan:** Mengetahui minat utama mahasiswa. Setiap jawaban akan memberikan poin (+10) ke kategori tertentu.

### Soal 1

**"Saat ada waktu luang di akhir pekan, apa yang paling sering kamu lakukan?"**

- A. Berolahraga, berkeringat, atau melatih fisik. (+10 Olahraga)
- B. Mendengarkan musik, menonton film, atau berkreasi seni. (+10 Seni)
- C. Membaca berita, diskusi isu terkini, atau ngulik teknologi. (+10 Penalaran)
- D. Jalan-jalan ke alam bebas, naik gunung, atau eksplor tempat baru. (+10 Pecinta Alam)
- E. Mengikuti kegiatan relawan, kepanitiaan, atau organisasi sosial. (+10 Sosial & Disiplin)

---

### Soal 2

**"Lingkungan seperti apa yang membuatmu paling bersemangat?"**

- A. Di lapangan terbuka atau arena pertandingan. (+10 Olahraga)
- B. Di atas panggung atau studio. (+10 Seni)
- C. Di forum debat, lab, atau ruang diskusi. (+10 Penalaran)
- D. Di mana saja, asalkan di luar ruangan dan menantang. (+10 Pecinta Alam)
- E. Di tempat di mana aku bisa membantu atau memimpin orang lain. (+10 Sosial & Disiplin)

---

### Soal 3

**"Ketika sedang banyak pikiran, cara terbaikmu untuk melepas penat adalah..."**

- A. Lari keliling GOR atau workout sampai keringat bercucuran. (+10 Olahraga)
- B. Bermain alat musik, menyanyi, atau menggambar sesuatu. (+10 Seni)
- C. Bermain game strategi, membaca buku, atau mencari tahu hal-hal baru. (+10 Penalaran)
- D. Pergi ke curug, bukit, atau sekadar menikmati udara segar di alam. (+10 Pecinta Alam)
- E. Berkumpul dengan teman organisasi atau ikut aksi sosial turun ke jalan. (+10 Sosial & Disiplin)

---

### Soal 4

**"Kalau ada kepanitiaan besar di kampus, peran apa yang biasanya kamu incar?"**

- A. Eksekutor lapangan yang butuh energi fisik dan kecepatan bergerak. (+10 Olahraga)
- B. Divisi Publikasi dan Dekorasi yang membuat desain visual serta dokumentasi. (+10 Seni)
- C. Konseptor acara yang mencari bahan, riset, dan menyusun strategi/proposal. (+10 Penalaran)
- D. Tim survei lokasi atau yang memastikan logistik dan medan lapangan aman. (+10 Pecinta Alam)
- E. Koordinator/Leader yang memastikan kedisiplinan dan kelancaran tugas semua orang. (+10 Sosial & Disiplin)

---

### Soal 5

**"Konten media sosial atau tontonan YouTube apa yang paling sering muncul di berandamu?"**

- A. Highlight pertandingan olahraga, bela diri, atau tips fitness/workout. (+10 Olahraga)
- B. Cover lagu, pameran seni, film pendek, atau vlog tentang budaya. (+10 Seni)
- C. Video edukasi, podcast diskusi isu terkini, atau review inovasi teknologi. (+10 Penalaran)
- D. Dokumenter alam liar, vlog pendakian gunung, atau tips survival. (+10 Pecinta Alam)
- E. Berita pergerakan sosial, motivasi kepemimpinan, atau aksi kemanusiaan. (+10 Sosial & Disiplin)

---

## 3. LEVEL 2 & 3: PERTANYAAN PERCABANGAN (Branching)

Sistem mendeteksi **Poin Kategori Tertinggi** dan memunculkan pertanyaan spesifik. Untuk beberapa kategori, akan ada Level 3 agar hasil merujuk ke 1 UKM pasti.

---

### JIKA KATEGORI DOMINAN: OLAHRAGA & BELADIRI

**Level 2 Tanya:**  
"**Gaya bertanding seperti apa yang kamu miliki?**"

#### Opsi 1:

"Aku suka kerjasama tim untuk mencetak skor!"

**Level 3 Tanya:**  
"Olahraga tim seperti apa yang paling menantang buatmu?"

- Pilih Bola di lapangan hijau -> Rekomendasi: UFC (Unit Sepak Bola)
- Pilih Bola basket di lapangan kayu -> Rekomendasi: UBB (Unit Bola Basket)
- Pilih Smash bola melewati net -> Rekomendasi: Bola Voli
- Pilih Lempar tangkap ke gawang (indoor) -> Rekomendasi: Hand Ball

---

#### Opsi 2:

"Aku petarung! Suka adu fisik dan beladiri."

**Level 3 Tanya:**  
"Seni beladiri mana yang paling ingin kamu kuasai?"

- Fokus tendangan lincah & cepat -> Rekomendasi: Taekwondo
- Pencak Silat asli Nusantara -> Rekomendasi: PSHT atau Merpati Putih
- Karate & ketegasan gerak -> Rekomendasi: BKC atau Gokasi
- Kombinasi bantingan & kuncian -> Rekomendasi: KEMPO

---

#### Opsi 3:

"Aku lebih suka fokus dan mengandalkan ketangkasan individuku menggunakan raket."

**Level 3 Tanya:**  
"Senjata apa yang paling nyaman kamu ayunkan di lapangan?"

- Raket ringan & kok yang melesat cepat -> Rekomendasi: Bulutangkis
- Bet kayu & tempo permainan jarak dekat -> Rekomendasi: Tenis Meja
- Raket besar & lapangan luas -> Rekomendasi: Tenis Lapangan

---

#### Opsi 4:

"Aku suka olahraga yang butuh ketenangan dan strategi otak."

- (Langsung mengarah ke 1 UKM) -> Rekomendasi: Catur

---

### JIKA KATEGORI DOMINAN: SENI & BUDAYA

**Tanya:**  
"Media seni apa yang paling ingin kamu kuasai atau tampilkan?"

- Opsi 1: "Vokal dan Suara. Aku suka bernyanyi dalam harmoni."  
  -> Rekomendasi: PSM GBS (Paduan Suara)

- Opsi 2: "Bermain alat musik dengan disiplin tinggi dan formasi."  
  -> Rekomendasi: MBBPS (Marching Band)

- Opsi 3: "Seni pertunjukan, teater, atau kreasi visual (Sinematografi)."

  **Level 3 Tanya:**  
  "Bagaimana cara kamu mengekspresikan senimu?"
  - Lewat akting, bermain peran, dan pertunjukan teater -> Rekomendasi: USMAN
  - Lewat olah tubuh, koreografi, dan seni tari -> Rekomendasi: SAKTA
  - Di balik layar, menangkap momen lewat lensa kamera atau membuat film -> Rekomendasi: UFU

- Opsi 4: "Aku tertarik banget dengan budaya populer, terutama Jepang!"  
  -> Rekomendasi: Jejepangan Kazoku 1963

---

### JIKA KATEGORI DOMINAN: PENALARAN, BAHASA & TEKNOLOGI

**Tanya:**  
"Bagaimana cara kamu menyampaikan ide atau inovasimu?"

- Opsi 1: "Melalui riset, karya tulis ilmiah, dan analisis data."  
  -> Rekomendasi: UKMPR

- Opsi 2: "Lewat debat, pidato Bahasa Inggris, atau diskusi internasional."

  **Level 3 Tanya:**  
  "Fokus utama apa yang ingin kamu kejar dalam forum internasional?"
  - Meningkatkan kemampuan Bahasa Inggris lewat kompetisi debat, pidato, dan scrabble -> Rekomendasi: SEF
  - Membahas isu diplomasi, kebijakan luar negeri, dan simulasi sidang PBB (Model UN) -> Rekomendasi: FPCI
  - Pengembangan kepemimpinan pemuda dan proyek pertukaran volunteer internasional -> Rekomendasi: AIESEC

- Opsi 3: "Lewat tulisan jurnalistik, liputan, dan media massa."  
  -> Rekomendasi: LPM Sketsa

- Opsi 4: "Aku lebih suka merakit teknologi dan ngoding!"  
  -> Rekomendasi: Soedirman Robotic Team

---

### JIKA KATEGORI DOMINAN: PECINTA ALAM (OUTDOOR EKSTRIM)

**Tanya:**  
"Medan seperti apa yang paling ingin kamu taklukkan?"

- Opsi 1: "Hutan, gunung, dan kemampuan survival dasar."  
  -> Rekomendasi: UPL MPA

- Opsi 2: "Ketinggian dan tebing vertikal."  
  -> Rekomendasi: Panjat Tebing

- Opsi 3: "Arus sungai yang deras."  
  -> Rekomendasi: Arum Jeram

---

### JIKA KATEGORI DOMINAN: KEMANUSIAAN, KEDISIPLINAN & SOSIAL

**Tanya:**  
"Jika terjadi kondisi darurat atau kepanitiaan besar, apa peranmu?"

- Opsi 1: "Berikan pertolongan pertama dan medis."  
  -> Rekomendasi: KSR-PMI

- Opsi 2: "Menjaga keamanan, ketertiban, dan baris-berbaris."  
  -> Rekomendasi: MENWA

- Opsi 3: "Menjadi relawan masyarakat, berkemah, dan pandu arah."  
  -> Rekomendasi: Racana Soedirman (Pramuka)

- Opsi 4: "Kampanye sosial, penyuluhan, dan pengabdian masyarakat."  
  -> Rekomendasi: Muda Bersinar, AIESEC

---

## 4. TAMPILAN HASIL (RESULT SCREEN)

Setelah mahasiswa selesai memilih, tampilkan **2-3 UKM terbaik** dengan profil singkatnya agar mereka tahu booth mana yang harus dikunjungi.

### Contoh Output Layar:

> **"Selamat! Kamu adalah si Aktivis Fisik yang Tangguh! 🥋**  
> Berdasarkan jawabanmu, kamu sangat cocok menguji ketangkasanmu di booth Merpati Putih atau Taekwondo.  
> Psst... jangan lupa kumpulkan Kode Rahasia di booth mereka untuk membuka Kupon Undianmu!"
