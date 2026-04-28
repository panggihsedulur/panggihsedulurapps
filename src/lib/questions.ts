/**
 * Kuisioner Minat Bakat UKM — Semua Soal (Level 1-3)
 * Sesuai RancanganLogikaKuis.md
 */

import { type Kategori } from "./schema";

export interface QuestionOption {
  id: string;
  text: string;
  weight: Record<Kategori, number>;
  nextQuestionId?: string;
  recommendations?: string[];
}

export interface Question {
  id: number | string;
  level: 1 | 2 | 3;
  text: string;
  options: QuestionOption[];
  category?: Kategori; // Untuk Level 2-3: kategori spesifik
}

/**
 * ═══════════════════════════════════════════════════════════
 * LEVEL 1: PERTANYAAN UTAMA (5 soal untuk 5 kategori)
 * ═══════════════════════════════════════════════════════════
 *
 * Tujuan: Menemukan kategori minat dominan
 * Scoring: Setiap jawaban = +10 poin ke satu kategori
 * Output: Top 2 kategori → trigger Level 2/3 (untuk versi lengkap)
 */

export const LEVEL_1_QUESTIONS: Question[] = [
  {
    id: 1,
    level: 1,
    text: "Saat ada waktu luang di akhir pekan, apa yang paling sering kamu lakukan?",
    options: [
      {
        id: "q1-a",
        text: "Berolahraga, berkeringat, atau melatih fisik.",
        weight: {
          Olahraga: 10,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q1-b",
        text: "Mendengarkan musik, menonton film, atau berkreasi seni.",
        weight: {
          Olahraga: 0,
          Seni: 10,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q1-c",
        text: "Membaca berita, diskusi isu terkini, atau ngulik teknologi.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 10,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q1-d",
        text: "Jalan-jalan ke alam bebas, naik gunung, atau eksplor tempat baru.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 10,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q1-e",
        text: "Mengikuti kegiatan relawan, kepanitiaan, atau organisasi sosial.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 10,
        },
      },
    ],
  },

  {
    id: 2,
    level: 1,
    text: "Lingkungan seperti apa yang membuatmu paling bersemangat?",
    options: [
      {
        id: "q2-a",
        text: "Di lapangan terbuka atau arena pertandingan.",
        weight: {
          Olahraga: 10,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q2-b",
        text: "Di atas panggung atau studio.",
        weight: {
          Olahraga: 0,
          Seni: 10,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q2-c",
        text: "Di forum debat, lab, atau ruang diskusi.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 10,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q2-d",
        text: "Di mana saja, asalkan di luar ruangan dan menantang.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 10,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q2-e",
        text: "Di tempat di mana aku bisa membantu atau memimpin orang lain.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 10,
        },
      },
    ],
  },

  {
    id: 3,
    level: 1,
    text: "Ketika sedang banyak pikiran, cara terbaikmu untuk melepas penat adalah...",
    options: [
      {
        id: "q3-a",
        text: "Lari keliling GOR atau workout sampai keringat bercucuran.",
        weight: {
          Olahraga: 10,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q3-b",
        text: "Bermain alat musik, menyanyi, atau menggambar sesuatu.",
        weight: {
          Olahraga: 0,
          Seni: 10,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q3-c",
        text: "Bermain game strategi, membaca buku, atau mencari tahu hal-hal baru.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 10,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q3-d",
        text: "Pergi ke curug, bukit, atau sekadar menikmati udara segar di alam.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 10,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q3-e",
        text: "Berkumpul dengan teman organisasi atau ikut aksi sosial turun ke jalan.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 10,
        },
      },
    ],
  },

  {
    id: 4,
    level: 1,
    text: "Kalau ada kepanitiaan besar di kampus, peran apa yang biasanya kamu incar?",
    options: [
      {
        id: "q4-a",
        text: "Eksekutor lapangan yang butuh energi fisik dan kecepatan bergerak.",
        weight: {
          Olahraga: 10,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q4-b",
        text: "Divisi Publikasi dan Dekorasi yang membuat desain visual serta dokumentasi.",
        weight: {
          Olahraga: 0,
          Seni: 10,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q4-c",
        text: "Konseptor acara yang mencari bahan, riset, dan menyusun strategi/proposal.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 10,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q4-d",
        text: "Tim survei lokasi atau yang memastikan logistik dan medan lapangan aman.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 10,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q4-e",
        text: "Koordinator/Leader yang memastikan kedisiplinan dan kelancaran tugas semua orang.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 10,
        },
      },
    ],
  },

  {
    id: 5,
    level: 1,
    text: "Konten media sosial atau tontonan YouTube apa yang paling sering muncul di berandamu?",
    options: [
      {
        id: "q5-a",
        text: "Highlight pertandingan olahraga, bela diri, atau tips fitness/workout.",
        weight: {
          Olahraga: 10,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q5-b",
        text: "Cover lagu, pameran seni, film pendek, atau vlog tentang budaya.",
        weight: {
          Olahraga: 0,
          Seni: 10,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q5-c",
        text: "Video edukasi, podcast diskusi isu terkini, atau review inovasi teknologi.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 10,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q5-d",
        text: "Dokumenter alam liar, vlog pendakian gunung, atau tips survival.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 10,
          "Sosial & Disiplin": 0,
        },
      },
      {
        id: "q5-e",
        text: "Berita pergerakan sosial, motivasi kepemimpinan, atau aksi kemanusiaan.",
        weight: {
          Olahraga: 0,
          Seni: 0,
          Penalaran: 0,
          "Pecinta Alam": 0,
          "Sosial & Disiplin": 10,
        },
      },
    ],
  },
];

/**
 * ═══════════════════════════════════════════════════════════
 * LEVEL 2-3: PERTANYAAN PERCABANGAN (Branching Logic)
 * ═══════════════════════════════════════════════════════════
 *
 * Implementasi penuh sesuai RancanganLogikaKuis.md section 3
 */

const zeroWeight: Record<Kategori, number> = {
  Olahraga: 0,
  Seni: 0,
  Penalaran: 0,
  "Pecinta Alam": 0,
  "Sosial & Disiplin": 0,
};

export const BRANCH_START_BY_CATEGORY: Record<Kategori, string> = {
  Olahraga: "olahraga-l2-style",
  Seni: "seni-l2-media",
  Penalaran: "penalaran-l2-delivery",
  "Pecinta Alam": "alam-l2-terrain",
  "Sosial & Disiplin": "sosial-l2-role",
};

export const BRANCH_QUESTIONS: Record<string, Question> = {
  // OLAHRAGA
  "olahraga-l2-style": {
    id: "olahraga-l2-style",
    level: 2,
    category: "Olahraga",
    text: "Gaya bertanding seperti apa yang kamu miliki?",
    options: [
      {
        id: "olahraga-l2-team",
        text: "Aku suka kerjasama tim untuk mencetak skor!",
        weight: zeroWeight,
        nextQuestionId: "olahraga-l3-team",
      },
      {
        id: "olahraga-l2-martial",
        text: "Aku petarung! Suka adu fisik dan beladiri.",
        weight: zeroWeight,
        nextQuestionId: "olahraga-l3-martial",
      },
      {
        id: "olahraga-l2-racket",
        text: "Aku lebih suka fokus dan mengandalkan ketangkasan individuku menggunakan raket.",
        weight: zeroWeight,
        nextQuestionId: "olahraga-l3-racket",
      },
      {
        id: "olahraga-l2-strategy",
        text: "Aku suka olahraga yang butuh ketenangan dan strategi otak.",
        weight: zeroWeight,
        recommendations: ["Catur"],
      },
    ],
  },
  "olahraga-l3-team": {
    id: "olahraga-l3-team",
    level: 3,
    category: "Olahraga",
    text: "Olahraga tim seperti apa yang paling menantang buatmu?",
    options: [
      {
        id: "olahraga-l3-team-football",
        text: "Bola di lapangan hijau.",
        weight: zeroWeight,
        recommendations: ["UFC"],
      },
      {
        id: "olahraga-l3-team-basket",
        text: "Bola basket di lapangan kayu.",
        weight: zeroWeight,
        recommendations: ["UBB"],
      },
      {
        id: "olahraga-l3-team-volley",
        text: "Smash bola melewati net.",
        weight: zeroWeight,
        recommendations: ["Bola Voli"],
      },
      {
        id: "olahraga-l3-team-handball",
        text: "Lempar tangkap ke gawang (indoor).",
        weight: zeroWeight,
        recommendations: ["Hand Ball"],
      },
    ],
  },
  "olahraga-l3-martial": {
    id: "olahraga-l3-martial",
    level: 3,
    category: "Olahraga",
    text: "Seni beladiri mana yang paling ingin kamu kuasai?",
    options: [
      {
        id: "olahraga-l3-martial-taekwondo",
        text: "Fokus tendangan lincah dan cepat.",
        weight: zeroWeight,
        recommendations: ["Taekwondo"],
      },
      {
        id: "olahraga-l3-martial-silat",
        text: "Pencak silat asli Nusantara.",
        weight: zeroWeight,
        recommendations: ["PSHT", "Merpati Putih"],
      },
      {
        id: "olahraga-l3-martial-karate",
        text: "Karate dan ketegasan gerak.",
        weight: zeroWeight,
        recommendations: ["BKC", "Gokasi"],
      },
      {
        id: "olahraga-l3-martial-kempo",
        text: "Kombinasi bantingan dan kuncian.",
        weight: zeroWeight,
        recommendations: ["KEMPO"],
      },
    ],
  },
  "olahraga-l3-racket": {
    id: "olahraga-l3-racket",
    level: 3,
    category: "Olahraga",
    text: "Senjata apa yang paling nyaman kamu ayunkan di lapangan?",
    options: [
      {
        id: "olahraga-l3-racket-badminton",
        text: "Raket ringan dan kok yang melesat cepat.",
        weight: zeroWeight,
        recommendations: ["Bulutangkis"],
      },
      {
        id: "olahraga-l3-racket-tabletennis",
        text: "Bet kayu dan tempo permainan jarak dekat.",
        weight: zeroWeight,
        recommendations: ["Tenis Meja"],
      },
      {
        id: "olahraga-l3-racket-tennis",
        text: "Raket besar dan lapangan luas.",
        weight: zeroWeight,
        recommendations: ["Tenis Lapangan"],
      },
    ],
  },

  // SENI
  "seni-l2-media": {
    id: "seni-l2-media",
    level: 2,
    category: "Seni",
    text: "Media seni apa yang paling ingin kamu kuasai atau tampilkan?",
    options: [
      {
        id: "seni-l2-vocal",
        text: "Vokal dan suara. Aku suka bernyanyi dalam harmoni.",
        weight: zeroWeight,
        recommendations: ["PSM GBS"],
      },
      {
        id: "seni-l2-band",
        text: "Bermain alat musik dengan disiplin tinggi dan formasi.",
        weight: zeroWeight,
        recommendations: ["MBBPS"],
      },
      {
        id: "seni-l2-performing",
        text: "Seni pertunjukan, teater, atau kreasi visual (sinematografi).",
        weight: zeroWeight,
        nextQuestionId: "seni-l3-expression",
      },
      {
        id: "seni-l2-japan",
        text: "Aku tertarik banget dengan budaya populer, terutama Jepang!",
        weight: zeroWeight,
        recommendations: ["Jejepangan Kazoku 1963"],
      },
    ],
  },
  "seni-l3-expression": {
    id: "seni-l3-expression",
    level: 3,
    category: "Seni",
    text: "Bagaimana cara kamu mengekspresikan senimu?",
    options: [
      {
        id: "seni-l3-theater",
        text: "Lewat akting, bermain peran, dan pertunjukan teater.",
        weight: zeroWeight,
        recommendations: ["USMAN"],
      },
      {
        id: "seni-l3-dance",
        text: "Lewat olah tubuh, koreografi, dan seni tari.",
        weight: zeroWeight,
        recommendations: ["SAKTA"],
      },
      {
        id: "seni-l3-film",
        text: "Di balik layar, menangkap momen lewat lensa kamera atau membuat film.",
        weight: zeroWeight,
        recommendations: ["UFU"],
      },
    ],
  },

  // PENALARAN
  "penalaran-l2-delivery": {
    id: "penalaran-l2-delivery",
    level: 2,
    category: "Penalaran",
    text: "Bagaimana cara kamu menyampaikan ide atau inovasimu?",
    options: [
      {
        id: "penalaran-l2-research",
        text: "Melalui riset, karya tulis ilmiah, dan analisis data.",
        weight: zeroWeight,
        recommendations: ["UKMPR"],
      },
      {
        id: "penalaran-l2-international",
        text: "Lewat debat, pidato Bahasa Inggris, atau diskusi internasional.",
        weight: zeroWeight,
        nextQuestionId: "penalaran-l3-international-focus",
      },
      {
        id: "penalaran-l2-journalism",
        text: "Lewat tulisan jurnalistik, liputan, dan media massa.",
        weight: zeroWeight,
        recommendations: ["LPM Sketsa"],
      },
      {
        id: "penalaran-l2-tech",
        text: "Aku lebih suka merakit teknologi dan ngoding!",
        weight: zeroWeight,
        recommendations: ["Soedirman Robotic Team"],
      },
    ],
  },
  "penalaran-l3-international-focus": {
    id: "penalaran-l3-international-focus",
    level: 3,
    category: "Penalaran",
    text: "Fokus utama apa yang ingin kamu kejar dalam forum internasional?",
    options: [
      {
        id: "penalaran-l3-sef",
        text: "Meningkatkan kemampuan Bahasa Inggris lewat debat, pidato, dan scrabble.",
        weight: zeroWeight,
        recommendations: ["SEF"],
      },
      {
        id: "penalaran-l3-fpci",
        text: "Membahas isu diplomasi, kebijakan luar negeri, dan simulasi sidang PBB.",
        weight: zeroWeight,
        recommendations: ["FPCI Chapter Unsoed"],
      },
      {
        id: "penalaran-l3-aiesec",
        text: "Pengembangan kepemimpinan pemuda dan proyek volunteer internasional.",
        weight: zeroWeight,
        recommendations: ["AIESEC"],
      },
    ],
  },

  // PECINTA ALAM
  "alam-l2-terrain": {
    id: "alam-l2-terrain",
    level: 2,
    category: "Pecinta Alam",
    text: "Medan seperti apa yang paling ingin kamu taklukkan?",
    options: [
      {
        id: "alam-l2-forest",
        text: "Hutan, gunung, dan kemampuan survival dasar.",
        weight: zeroWeight,
        recommendations: ["UPL MPA"],
      },
      {
        id: "alam-l2-height",
        text: "Ketinggian dan tebing vertikal.",
        weight: zeroWeight,
        recommendations: ["Panjat Tebing"],
      },
      {
        id: "alam-l2-river",
        text: "Arus sungai yang deras.",
        weight: zeroWeight,
        recommendations: ["Arung Jeram"],
      },
    ],
  },

  // SOSIAL & DISIPLIN
  "sosial-l2-role": {
    id: "sosial-l2-role",
    level: 2,
    category: "Sosial & Disiplin",
    text: "Jika terjadi kondisi darurat atau kepanitiaan besar, apa peranmu?",
    options: [
      {
        id: "sosial-l2-medical",
        text: "Berikan pertolongan pertama dan medis.",
        weight: zeroWeight,
        recommendations: ["KSR-PMI"],
      },
      {
        id: "sosial-l2-security",
        text: "Menjaga keamanan, ketertiban, dan baris-berbaris.",
        weight: zeroWeight,
        recommendations: ["MENWA"],
      },
      {
        id: "sosial-l2-volunteer",
        text: "Menjadi relawan masyarakat, berkemah, dan pandu arah.",
        weight: zeroWeight,
        recommendations: ["Racana Soedirman"],
      },
      {
        id: "sosial-l2-campaign",
        text: "Kampanye sosial, penyuluhan, dan pengabdian masyarakat.",
        weight: zeroWeight,
        recommendations: ["Muda Bersinar", "AIESEC"],
      },
    ],
  },
};

export const LEVEL_2_QUESTIONS: Record<Kategori, Question[]> = {
  Olahraga: [BRANCH_QUESTIONS["olahraga-l2-style"]],
  Seni: [BRANCH_QUESTIONS["seni-l2-media"]],
  Penalaran: [BRANCH_QUESTIONS["penalaran-l2-delivery"]],
  "Pecinta Alam": [BRANCH_QUESTIONS["alam-l2-terrain"]],
  "Sosial & Disiplin": [BRANCH_QUESTIONS["sosial-l2-role"]],
};

/**
 * ═══════════════════════════════════════════════════════════
 * HELPER FUNCTIONS
 * ═══════════════════════════════════════════════════════════
 */

/**
 * Get all Level 1 questions
 */
export function getLevelOneQuestions(): Question[] {
  return LEVEL_1_QUESTIONS;
}

/**
 * Get specific question by ID
 */
export function getQuestionById(id: number): Question | undefined {
  return LEVEL_1_QUESTIONS.find((q) => q.id === id);
}

/**
 * Get total number of Level 1 questions
 */
export function getTotalLevel1Questions(): number {
  return LEVEL_1_QUESTIONS.length;
}

/**
 * Validate answer option
 */
export function isValidAnswer(questionId: number, optionId: string): boolean {
  const question = getQuestionById(questionId);
  if (!question) return false;
  return question.options.some((opt) => opt.id === optionId);
}

/**
 * Get answer weight (untuk scoring)
 */
export function getAnswerWeight(
  questionId: number,
  optionId: string,
): Record<Kategori, number> | null {
  const question = getQuestionById(questionId);
  if (!question) return null;

  const option = question.options.find((opt) => opt.id === optionId);
  return option?.weight || null;
}

/**
 * Get start question id for branching based on dominant category
 */
export function getBranchStartQuestionId(category: Kategori): string {
  return BRANCH_START_BY_CATEGORY[category];
}

/**
 * Get branch question by string id
 */
export function getBranchQuestionById(questionId: string): Question | null {
  return BRANCH_QUESTIONS[questionId] || null;
}

/**
 * Get branch option info to continue flow and collect recommendations
 */
export function getBranchOption(
  questionId: string,
  optionId: string,
): { nextQuestionId?: string; recommendations: string[] } | null {
  const question = getBranchQuestionById(questionId);
  if (!question) return null;

  const option = question.options.find((opt) => opt.id === optionId);
  if (!option) return null;

  return {
    nextQuestionId: option.nextQuestionId,
    recommendations: option.recommendations || [],
  };
}
