/**
 * UKM Data & Mapping untuk Kuisioner Minat Bakat
 * Sesuai RancanganLogikaKuis.md + expandable-cards.ts
 */

export interface UKM {
  id: string;
  name: string;
  title: string;
  category: string;
  description: string;
  priority: number;
}

/**
 * PRE-FILTERING RULES
 * UKM yang direkomendasikan langsung berdasarkan biodata
 */
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

/**
 * KATEGORI 1: OLAHRAGA & BELA DIRI
 * Level 1: Scoring → Top kategori
 * Level 2-3: Tanya jenis olahraga (tim, beladiri, raket, strategi)
 */
export const olahragaUKM: UKM[] = [
  // Tim Sports
  {
    id: "ukm-104",
    name: "UFC",
    title: "Unsoed Football Club",
    category: "Olahraga - Tim",
    description: "Klub sepak bola untuk kompetisi dan pengembangan talenta.",
    priority: 1,
  },
  {
    id: "ukm-102",
    name: "UBB",
    title: "Unit Bola Basket",
    category: "Olahraga - Tim",
    description:
      "Unit olahraga bola basket dengan program latihan terstruktur.",
    priority: 2,
  },
  {
    id: "ukm-092",
    name: "Bola Voli",
    title: "UKM Olahraga Bola Voli",
    category: "Olahraga - Tim",
    description: "Unit pengembangan talenta di cabang bola voli.",
    priority: 3,
  },
  {
    id: "ukm-116",
    name: "Hand Ball",
    title: "UKM Bola Tangan",
    category: "Olahraga - Tim",
    description: "Unit olahraga bola tangan dengan program kompetisi.",
    priority: 4,
  },
  // Bela Diri
  {
    id: "ukm-105",
    name: "Taekwondo",
    title: "UKM Taekwondo",
    category: "Olahraga - Bela Diri",
    description: "Seni bela diri asal Korea dengan fokus pada tendangan.",
    priority: 1,
  },
  {
    id: "ukm-089",
    name: "PSHT",
    title: "Persaudaraan Setia Hati Terate",
    category: "Olahraga - Bela Diri",
    description: "Seni bela diri pencak silat tradisional.",
    priority: 2,
  },
  {
    id: "ukm-091",
    name: "Merpati Putih",
    title: "Pencak Silat Merpati Putih",
    category: "Olahraga - Bela Diri",
    description: "Seni bela diri tangan kosong dan pernafasan.",
    priority: 3,
  },
  {
    id: "ukm-099",
    name: "BKC",
    title: "Bandung Karate Club",
    category: "Olahraga - Bela Diri",
    description: "Seni bela diri Karate beraliran BKC.",
    priority: 4,
  },
  {
    id: "ukm-100",
    name: "KEMPO",
    title: "Shorinji Kempo",
    category: "Olahraga - Bela Diri",
    description: "Seni bela diri Shorinji Kempo dengan kombinasi teknik.",
    priority: 5,
  },
  {
    id: "ukm-106",
    name: "Gokasi",
    title: "Karate Gokasi",
    category: "Olahraga - Bela Diri",
    description: "Seni bela diri Karate beraliran Gokasi.",
    priority: 6,
  },
  // Raket Sports
  {
    id: "ukm-107",
    name: "Bulutangkis",
    title: "UKM Bulutangkis",
    category: "Olahraga - Raket",
    description: "Pengembangan talenta di cabang olahraga bulutangkis.",
    priority: 1,
  },
  {
    id: "ukm-108",
    name: "Tenis Meja",
    title: "UKM Tenis Meja",
    category: "Olahraga - Raket",
    description: "Pengembangan talenta di cabang olahraga tenis meja.",
    priority: 2,
  },
  {
    id: "ukm-115",
    name: "Tenis Lapangan",
    title: "UKM Tenis Lapangan",
    category: "Olahraga - Raket",
    description: "Pengembangan talenta di cabang olahraga tenis lapangan.",
    priority: 3,
  },
  // Strategi
  {
    id: "ukm-103",
    name: "Catur",
    title: "UKM Olahraga Catur",
    category: "Olahraga - Strategi",
    description:
      "Pengembangan talenta di cabang olahraga catur dengan strategi.",
    priority: 1,
  },
];

/**
 * KATEGORI 2: SENI & BUDAYA
 * Level 1: Scoring → Top kategori
 * Level 2-3: Tanya media seni (vokal, musik, teater/tari, budaya populer)
 */
export const seniUKM: UKM[] = [
  // Vokal
  {
    id: "ukm-093",
    name: "PSM GBS",
    title: "Paduan Suara Mahasiswa Gita Buana Soedirman",
    category: "Seni - Vokal",
    description: "Mewadahi minat dan bakat mahasiswa di bidang paduan suara.",
    priority: 1,
  },
  // Musik
  {
    id: "ukm-096",
    name: "MBBPS",
    title: "Marching Band Bahana Putra Soedirman",
    category: "Seni - Musik",
    description: "Seni musik dan ketangkasan melalui instrumen marching band.",
    priority: 1,
  },
  // Teater & Tari
  {
    id: "ukm-086",
    name: "USMAN",
    title: "Unit Kegiatan Mahasiswa USMAN",
    category: "Seni - Teater",
    description: "Unit kegiatan mahasiswa fokus pada seni pertunjukan teater.",
    priority: 1,
  },
  {
    id: "ukm-118",
    name: "SAKTA",
    title: "Unit Kegiatan Mahasiswa SAKTA",
    category: "Seni - Tari",
    description: "Unit kegiatan mahasiswa fokus pada seni tari dan koreografi.",
    priority: 2,
  },
  {
    id: "ukm-113",
    name: "UFU",
    title: "Unit Kegiatan Mahasiswa UFU",
    category: "Seni - Film",
    description: "Unit kegiatan mahasiswa fokus pada sinematografi dan film.",
    priority: 3,
  },
  // Budaya Populer
  {
    id: "ukm-117",
    name: "Jejepangan Kazoku 1963",
    title: "Klub Budaya Jepang",
    category: "Seni - Budaya Populer",
    description: "Komunitas apresiasi budaya populer dan tradisional Jepang.",
    priority: 1,
  },
];

/**
 * KATEGORI 3: PENALARAN, BAHASA & TEKNOLOGI
 * Level 1: Scoring → Top kategori
 * Level 2-3: Tanya cara eksplorasi ide (riset, debat, jurnalisme, teknologi)
 */
export const penaranUKM: UKM[] = [
  // Riset & Keilmuan
  {
    id: "ukm-097",
    name: "UKMPR",
    title: "Unit Kegiatan Mahasiswa Penalaran dan Riset",
    category: "Penalaran - Riset",
    description:
      "Wadah mahasiswa dengan minat penelitian dan karya tulis ilmiah.",
    priority: 1,
  },
  // Bahasa & Debat Internasional
  {
    id: "ukm-095",
    name: "SEF",
    title: "Student English Forum",
    category: "Penalaran - Bahasa",
    description: "Pengembangan kemampuan Bahasa Inggris, debat, dan pidato.",
    priority: 1,
  },
  {
    id: "ukm-112",
    name: "FPCI Chapter Unsoed",
    title: "Foreign Policy Community of Indonesia",
    category: "Penalaran - Diplomasi",
    description:
      "Diskusi isu kebijakan luar negeri dan hubungan internasional.",
    priority: 2,
  },
  {
    id: "ukm-110",
    name: "AIESEC",
    title: "AIESEC in Unsoed",
    category: "Penalaran - Kepemimpinan Global",
    description:
      "Organisasi pemuda internasional untuk kepemimpinan dan pertukaran.",
    priority: 3,
  },
  // Jurnalistik
  {
    id: "ukm-094",
    name: "LPM Sketsa",
    title: "Lembaga Pers Mahasiswa Sketsa",
    category: "Penalaran - Jurnalistik",
    description:
      "Unit pers mahasiswa fokus pada jurnalistik dan liputan berita.",
    priority: 1,
  },
  // Teknologi & Robotika
  {
    id: "ukm-109",
    name: "Soedirman Robotic Team",
    title: "Tim Robotika",
    category: "Penalaran - Teknologi",
    description: "Komunitas riset teknologi robotika untuk kompetisi nasional.",
    priority: 1,
  },
];

/**
 * KATEGORI 4: PECINTA ALAM & OUTDOOR EKSTRIM
 * Level 1: Scoring → Top kategori
 * Level 2-3: Tanya medan (hutan, ketinggian, arus deras)
 */
export const alamBebasUKM: UKM[] = [
  // Hiking & Survival
  {
    id: "ukm-090",
    name: "UPL MPA",
    title: "Unit Pandu Lingkungan Mahasiswa Pecinta Alam",
    category: "Alam - Hiking",
    description: "UKM kepencintaalaman dan kegiatan konservasi lingkungan.",
    priority: 1,
  },
  // Panjat Tebing
  {
    id: "ukm-098",
    name: "Panjat Tebing",
    title: "UKM Panjat Tebing",
    category: "Alam - Panjat",
    description: "Olahraga ekstrem panjat tebing (rock climbing).",
    priority: 1,
  },
  // Arung Jeram
  {
    id: "ukm-119",
    name: "Arung Jeram",
    title: "UKM Arung Jeram",
    category: "Alam - Air",
    description: "Komunitas olahraga arus deras dan arung jeram (rafting).",
    priority: 1,
  },
  // Pramuka (outdoor & kepanduan)
  {
    id: "ukm-087",
    name: "Racana Soedirman",
    title: "Pramuka Universitas",
    category: "Alam - Kepanduan",
    description: "Gerakan Pramuka tingkat pandega dengan outdoor & disiplin.",
    priority: 2,
  },
];

/**
 * KATEGORI 5: SOSIAL, KEMANUSIAAN & BELA NEGARA
 * Level 1: Scoring → Top kategori
 * Level 2-3: Tanya peran (medis, keamanan, relawan, sosial)
 */
export const sosialUKM: UKM[] = [
  // Medis & Kesehatan
  {
    id: "ukm-101",
    name: "KSR-PMI",
    title: "Korps Sukarela Palang Merah Indonesia",
    category: "Sosial - Medis",
    description: "Organisasi kepalangmerahan untuk tanggap bencana & medis.",
    priority: 1,
  },
  // Keamanan & Disiplin
  {
    id: "ukm-088",
    name: "MENWA",
    title: "Resimen Mahasiswa",
    category: "Sosial - Bela Negara",
    description: "Wadah bela negara dan pelatihan kedisiplinan mahasiswa.",
    priority: 1,
  },
  // Pramuka (juga termasuk sosial/relawan)
  {
    id: "ukm-087",
    name: "Racana Soedirman",
    title: "Pramuka Universitas",
    category: "Sosial - Relawan",
    description: "Pramuka dengan fokus pada relawan dan pandu arah.",
    priority: 2,
  },
  // Sosial Kemanusiaan
  {
    id: "ukm-111",
    name: "Muda Bersinar",
    title: "Unit Kegiatan Mahasiswa Muda Bersinar",
    category: "Sosial - Kemanusiaan",
    description: "Unit kegiatan untuk pengembangan potensi generasi muda.",
    priority: 1,
  },
  // Sosial & Kepemimpinan Internasional
  {
    id: "ukm-110",
    name: "AIESEC",
    title: "AIESEC in Unsoed",
    category: "Sosial - Internasional",
    description: "Organisasi pemuda dengan fokus sosial dan volunteer global.",
    priority: 2,
  },
  // Kesehatan Khusus
  {
    id: "ukm-114",
    name: "CIMSA",
    title: "Center for Indonesian Medical Students",
    category: "Sosial - Kesehatan",
    description: "Organisasi mahasiswa kedokteran untuk peningkatan kesehatan.",
    priority: 1,
  },
];

/**
 * UKM KEROHANIAN (Special Category)
 * Biasanya tidak muncul dari scoring, tapi dari pre-filtering biodata
 */
export const kerohanianUKM: UKM[] = [
  {
    id: "ukm-085",
    name: "UKKI",
    title: "Unit Kegiatan Kerohanian Islam",
    category: "Kerohanian",
    description: "Pusat kegiatan dan syiar Islam bagi mahasiswa muslim.",
    priority: 1,
  },
  {
    id: "ukm-084",
    name: "PMKP",
    title: "Persekutuan Mahasiswa Kristen Protestan",
    category: "Kerohanian",
    description: "Wadah pembinaan mahasiswa Kristen Protestan.",
    priority: 1,
  },
  {
    id: "ukm-083",
    name: "UMAKA",
    title: "Unit Kegiatan Mahasiswa Kerohanian",
    category: "Kerohanian",
    description: "Unit kegiatan mahasiswa Kristen Katolik.",
    priority: 1,
  },
];

/**
 * UKM KHUSUS (Beasiswa, dll)
 */
export const khususUKM: UKM[] = [
  {
    id: "ukm-082",
    name: "Himabisi",
    title: "Himpunan Mahasiswa Bidikmisi",
    category: "Beasiswa & Kesejahteraan",
    description: "Organisasi untuk mahasiswa penerima beasiswa KIP-Kuliah.",
    priority: 1,
  },
  {
    id: "ukm-114",
    name: "CIMSA",
    title: "Center for Indonesian Medical Students",
    category: "Khusus - Fakultas Kesehatan",
    description: "Untuk mahasiswa kedokteran dan rumpun kesehatan.",
    priority: 1,
  },
];

/**
 * Master UKM Map by Category
 * Mapping kategori kuisioner → array UKM
 */
export const ukmByCategory = {
  Olahraga: olahragaUKM,
  Seni: seniUKM,
  Penalaran: penaranUKM,
  "Pecinta Alam": alamBebasUKM,
  "Sosial & Disiplin": sosialUKM,
  Kerohanian: kerohanianUKM,
  Khusus: khususUKM,
};

/**
 * Helper: Cari UKM berdasarkan name/id
 */
export function getUKMById(id: string): UKM | undefined {
  const allUKM = [
    ...olahragaUKM,
    ...seniUKM,
    ...penaranUKM,
    ...alamBebasUKM,
    ...sosialUKM,
    ...kerohanianUKM,
    ...khususUKM,
  ];
  return allUKM.find((ukm) => ukm.id === id || ukm.name === id);
}

/**
 * Helper: Get recommended UKM berdasarkan top category
 * @param topKategori - Array kategori teratas (e.g., ['Olahraga', 'Seni'])
 * @param limit - Jumlah rekomendasi UKM
 * @returns Array UKM yang direkomendasikan
 */
export function getRecommendedUKM(
  topKategori: string[],
  limit: number = 3,
): UKM[] {
  const recommended: UKM[] = [];

  for (const kategori of topKategori) {
    const ukmList = ukmByCategory[kategori as keyof typeof ukmByCategory] || [];
    // Ambil top 2 UKM per kategori berdasarkan priority
    recommended.push(
      ...ukmList.sort((a, b) => a.priority - b.priority).slice(0, 2),
    );
  }

  // Remove duplicates & sort by priority
  const uniqueUKM = Array.from(
    new Map(recommended.map((ukm) => [ukm.id, ukm])).values(),
  );
  return uniqueUKM.slice(0, limit);
}

/**
 * Helper: Get all recommended UKM termasuk pre-filtered
 * @param topKategori - Top kategori dari scoring
 * @param agama - Agama dari biodata
 * @param is_kipk - Status KIP-K
 * @param fakultas - Fakultas
 * @returns Combined recommended + pre-filtered UKM
 */
export function getCombinedRecommendations(
  topKategori: string[],
  agama?: string,
  is_kipk?: boolean,
  fakultas?: string,
  branchRecommendations: string[] = [],
): UKM[] {
  const recommended = getRecommendedUKM(topKategori, 5);
  const preFiltered: string[] = [];

  // Apply pre-filtering
  if (
    agama &&
    preFilteringRules.agama[agama as keyof typeof preFilteringRules.agama]
  ) {
    preFiltered.push(
      ...preFilteringRules.agama[agama as keyof typeof preFilteringRules.agama],
    );
  }
  if (is_kipk && preFilteringRules.kipk["true"]) {
    preFiltered.push(...preFilteringRules.kipk["true"]);
  }
  if (fakultas) {
    for (const key in preFilteringRules.fakultas) {
      if (fakultas.toLowerCase().includes(key.toLowerCase())) {
        preFiltered.push(
          ...preFilteringRules.fakultas[
            key as keyof typeof preFilteringRules.fakultas
          ],
        );
      }
    }
  }

  // Get pre-filtered UKM objects
  const preFilteredUKM = preFiltered
    .map((name) => getUKMById(name))
    .filter((ukm): ukm is UKM => ukm !== undefined);

  const branchRecommendedUKM = branchRecommendations
    .map((name) => getUKMById(name))
    .filter((ukm): ukm is UKM => ukm !== undefined);

  // Priority order: pre-filter biodata > branch result > scoring fallback
  const combined = [...preFilteredUKM, ...branchRecommendedUKM, ...recommended];
  const uniqueIds = new Set<string>();
  return combined.filter((ukm) => {
    if (uniqueIds.has(ukm.id)) return false;
    uniqueIds.add(ukm.id);
    return true;
  });
}
