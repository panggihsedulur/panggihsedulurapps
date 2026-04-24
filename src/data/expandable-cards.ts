export interface ExpandableCardItem {
  id: string;
  title: string;
  src: string;
  description: string;
  category: string;
  detailTitle: string;
  detailBody: string;
  detailFooterTitle: string;
}

export const ukmDummyData: ExpandableCardItem[] = [
  // --- KATEGORI: PAGUYUBAN DAERAH ---
  {
    id: "pg-01",
    title: "Hima Majalengka Purwokerto",
    src: "https://dummyimage.com/400x400/004d40/ffffff&text=Majalengka",
    description: "Himpunan Mahasiswa Majalengka",
    category: "Paguyuban Daerah",
    detailTitle: "Tentang Himpunan Mahasiswa Majalengka",
    detailBody:
      "Wadah silaturahmi dan perkumpulan bagi mahasiswa asal Majalengka yang sedang menempuh studi di Purwokerto, khususnya di Universitas Jenderal Soedirman.",
    detailFooterTitle: "Nomor: 120/UND/DAGRI/BEM/III/2026",
  },
  {
    id: "pg-02",
    title: "Keluarga Mahasiswa Bandung",
    src: "https://dummyimage.com/400x400/004d40/ffffff&text=Bandung",
    description: "Paguyuban Mahasiswa Asal Bandung",
    category: "Paguyuban Daerah",
    detailTitle: "Tentang Keluarga Mahasiswa Bandung",
    detailBody:
      "Organisasi daerah yang menjadi tempat berkumpul, bertukar pikiran, dan menjaga tali persaudaraan antar mahasiswa asal wilayah Bandung Raya.",
    detailFooterTitle: "Nomor: 129/UND/DAGRI/BEM/III/2026",
  },
  {
    id: "pg-03",
    title: "Himpunan Mahasiswa Papua",
    src: "https://dummyimage.com/400x400/004d40/ffffff&text=Papua",
    description: "Paguyuban Mahasiswa Asal Papua",
    category: "Paguyuban Daerah",
    detailTitle: "Tentang Himpunan Mahasiswa Papua",
    detailBody:
      "Forum komunikasi dan silaturahmi mahasiswa yang berasal dari Bumi Cenderawasih untuk saling mendukung selama masa perantauan.",
    detailFooterTitle: "Nomor: 133/UND/DAGRI/BEM/III/2026",
  },

  // --- KATEGORI: SENI & BUDAYA ---
  {
    id: "ukm-01",
    title: "PSM GBS",
    src: "https://dummyimage.com/400x400/b71c1c/ffffff&text=PSM+GBS",
    description: "Paduan Suara Mahasiswa Gita Buana Soedirman",
    category: "Seni",
    detailTitle: "Tentang PSM GBS",
    detailBody:
      "Unit Kegiatan Mahasiswa yang mewadahi minat dan bakat mahasiswa di bidang seni tarik suara atau paduan suara. Sering mewakili universitas dalam kompetisi nasional dan internasional.",
    detailFooterTitle: "Nomor: 093/UND/DAGRI/BEM/III/2026",
  },
  {
    id: "ukm-02",
    title: "MBBPS",
    src: "https://dummyimage.com/400x400/b71c1c/ffffff&text=MBBPS",
    description: "Marching Band Bahana Putra Soedirman",
    category: "Seni",
    detailTitle: "Tentang MBBPS",
    detailBody:
      "Unit Kegiatan Mahasiswa yang bergerak di bidang seni musik dan ketangkasan baris-berbaris melalui instrumen marching band.",
    detailFooterTitle: "Nomor: 09/UND/DAGRI/BEM/III/20266",
  },

  // --- KATEGORI: BELA DIRI ---
  {
    id: "ukm-03",
    title: "PSHT",
    src: "https://dummyimage.com/400x400/3e2723/ffffff&text=PSHT",
    description: "Persaudaraan Setia Hati Terate",
    category: "Bela Diri",
    detailTitle: "Tentang UKM PSHT",
    detailBody:
      "Wadah pengembangan minat dan bakat di bidang seni bela diri pencak silat, pembentukan karakter, serta persaudaraan.",
    detailFooterTitle: "Nomor: 089/UND/DAGRI/BEM/III/2026",
  },
  {
    id: "ukm-04",
    title: "Merpati Putih",
    src: "https://dummyimage.com/400x400/3e2723/ffffff&text=MP",
    description: "Pencak Silat Merpati Putih",
    category: "Bela Diri",
    detailTitle: "Tentang Merpati Putih",
    detailBody:
      "UKM bela diri yang berfokus pada seni bela diri tangan kosong dan pernafasan khas perguruan pencak silat Merpati Putih.",
    detailFooterTitle: "Nomor: 091/UND/DAGRI/BEM/III/2026",
  },

  // --- KATEGORI: OLAHRAGA ---
  {
    id: "ukm-05",
    title: "Bola Voli",
    src: "https://dummyimage.com/400x400/01579b/ffffff&text=Voli",
    description: "UKM Olahraga Bola Voli Unsoed",
    category: "Olahraga",
    detailTitle: "Tentang UKM Bola Voli",
    detailBody:
      "Organisasi kemahasiswaan untuk mengembangkan talenta, teknik, dan fisik mahasiswa yang menggemari cabang olahraga bola voli.",
    detailFooterTitle: "Nomor: 092/UND/DAGRI/BEM/III/2026",
  },
  {
    id: "ukm-06",
    title: "UFC",
    src: "https://dummyimage.com/400x400/01579b/ffffff&text=UFC",
    description: "Unsoed Football Club",
    category: "Olahraga",
    detailTitle: "Tentang UFC",
    detailBody:
      "Unit Kegiatan Mahasiswa bagi para pecinta olahraga sepak bola di lingkungan Universitas Jenderal Soedirman.",
    detailFooterTitle: "Nomor: 104/UND/DAGRI/BEM/III/2026",
  },

  // --- KATEGORI: KEILMUAN & PENALARAN ---
  {
    id: "ukm-07",
    title: "Soedirman Robotic Team",
    src: "https://dummyimage.com/400x400/e65100/ffffff&text=Robotika",
    description: "Tim Robotika Unsoed",
    category: "Keilmuan",
    detailTitle: "Tentang Soedirman Robotic Team",
    detailBody:
      "Komunitas riset dan pengembangan teknologi robotika yang ditujukan bagi mahasiswa untuk berkompetisi di tingkat nasional seperti KRI (Kontes Robot Indonesia).",
    detailFooterTitle: "Nomor: 109/UND/DAGRI/BEM/III/2026",
  },
  {
    id: "ukm-08",
    title: "AIESEC",
    src: "https://dummyimage.com/400x400/e65100/ffffff&text=AIESEC",
    description: "AIESEC in Unsoed",
    category: "Keilmuan",
    detailTitle: "Tentang AIESEC",
    detailBody:
      "Organisasi kepemudaan internasional yang berfokus pada pengembangan kepemimpinan, pengalaman lintas budaya, dan program pertukaran global.",
    detailFooterTitle: "Nomor: 110/UND/DAGRI/BEM/III/2026",
  },

  // --- KATEGORI: LINGKUNGAN & RELAWAN ---
  {
    id: "ukm-09",
    title: "UPL MPA",
    src: "https://dummyimage.com/400x400/1b5e20/ffffff&text=UPL+MPA",
    description: "Unit Pandu Lingkungan Mahasiswa Pecinta Alam",
    category: "Sosial & Lingkungan",
    detailTitle: "Tentang UPL MPA Unsoed",
    detailBody:
      "UKM yang bergerak di bidang kepencintaalaman, konservasi lingkungan hidup, dan kegiatan luar ruang (outdoor activities) seperti pendakian dan susur gua.",
    detailFooterTitle: "Nomor: 090/UND/DAGRI/BEM/III/2026",
  },
  {
    id: "ukm-10",
    title: "KSR-PMI",
    src: "https://dummyimage.com/400x400/1b5e20/ffffff&text=KSR+PMI",
    description: "Korps Sukarela Palang Merah Indonesia",
    category: "Sosial & Lingkungan",
    detailTitle: "Tentang KSR-PMI Unit Unsoed",
    detailBody:
      "Organisasi kepalangmerahan di tingkat perguruan tinggi yang memberikan pelatihan pertolongan pertama, tanggap bencana, dan pengabdian sosial kepada masyarakat.",
    detailFooterTitle: "Nomor: 101/UND/DAGRI/BEM/III/2026",
  },
];

export const expandableCards = ukmDummyData;
