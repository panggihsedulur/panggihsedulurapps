"use client";

import React from "react";
import { motion } from "framer-motion";

type CardT = {
  image: string;
  name: string;
  handle: string;
  quote: string;
  date?: string;
};

const DEFAULT_DATA: CardT[] = [
  // --- DATA ORIGINAL ---
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Bima Arya",
    handle: "@bima_arya99",
    quote:
      "Berkat Panggih Sedulur, aku bisa nemuin Paguyuban yang solid banget. Sekarang jadi punya banyak teman baru dari daerah asal yang sama!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Nadia Saphira",
    handle: "@nadiasph",
    quote:
      "Awalnya bingung banget mau ikut UKM apa di UNSOED. Kuesioner dari Panggih Sedulur ngebantu banget milih UKM Kesenian yang pas sama passion nyanyiku.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Dimas Aditya",
    handle: "@dimsadit",
    quote:
      "Gak nyangka nemu keluarga baru di perantauan lewat rekomendasi UKM dan Paguyuban di sini. Recommended banget buat maba yang masih nyari tempat berekspresi.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Rara Anjani",
    handle: "@raraanjn",
    quote:
      "Wah gila sih, fitur rekomendasinya akurat abis! Langsung match sama UKM Olahraga. Buat kalian yang masih galau, wajib banget cobain eksplor di Panggih Sedulur!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Kevin Pratama",
    handle: "@kevinprtm",
    quote:
      "Kuesioner interaktifnya ngebantu banget! Aku yang suka baca langsung direkomendasiin UKM Penalaran dan Riset. Keren pol sistemnya!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Siti Aisyah",
    handle: "@aisyah_siti",
    quote:
      "Sebagai anak rantau dari luar Jawa, gabung Paguyuban lewat web ini bener-bener jadi life-saver. Serasa punya keluarga kedua di Purwokerto.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Reza Fahlevi",
    handle: "@rezafahlevii",
    quote:
      "Fitur eksplorasinya juara! Ditambah ada maskot Giya yang nemenin, cari info UKM Seni Teater di UNSOED jadi kerasa fun dan nggak ngebosenin.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Dinda Maharani",
    handle: "@dindamhrni",
    quote:
      "Buat yang suka naik gunung, wajib banget cari info Mapala lewat sini. Infonya lengkap, padat, dan si Dudu gemes banget di website-nya!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Naufal Zaki",
    handle: "@naufalzaki_",
    quote:
      "Nggak nyangka gampang banget cari info UKM Kerohanian di sini. UI/UX-nya super ramah dan rapi buat maba yang masih buta info kampus.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Tiara Larasati",
    handle: "@tiaralrs",
    quote:
      "Maba UNSOED wajib banget buka ini sih! Ngebantu banget milih UKM Kewirausahaan buat nambah skill bisnis mumpung kita masih muda.",
  },

  // --- DATA TAMBAHAN BARU ---
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Ayu Pratiwi",
    handle: "@ayupratiwi_12",
    quote:
      "Dari dulu pengen banget gabung KSR PMI tapi takut infonya susah dicari. Untung ada Panggih Sedulur, semuanya dijelasin detail dari syarat sampe jadwal kumpul!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Gilang Ramadhan",
    handle: "@gilangrmdhn",
    quote:
      "Platform yang sangat inovatif buat kampus! Aku nemu Paguyuban Jabodetabek yang asik parah. Tiap minggu ada aja acara kumpul bareng anak rantau.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Citra Kirana",
    handle: "@citrakrn_",
    quote:
      "Awalnya ngira web ini cuma buat pendaftaran biasa, eh ternyata ngebantu banget buat matchmaking UKM. Sekarang aktif di Paduan Suara dan enjoy banget!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Fajar Hidayat",
    handle: "@fajarhidayat",
    quote:
      "Visualisasinya kece, infonya up-to-date. Maba sekarang bener-bener dimanjain sama Panggih Sedulur. Sukses terus buat tim developer-nya!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Bella Safira",
    handle: "@bellasfr",
    quote:
      "Karena Panggih Sedulur, aku bisa cepet adaptasi di Purwokerto. Nemu komunitas pecinta alam yang bener-bener supportif. Maskot Giya lucu banget!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Bayu Santoso",
    handle: "@bayusantoso",
    quote:
      "Salut sama sistem filtering-nya. Tinggal masukin minat kita, langsung keluar daftar UKM Jurnalistik dan Pers yang sesuai. Gak perlu tanya kating satu-satu.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Tari Lestari",
    handle: "@tarilestarii",
    quote:
      "Suka banget sama interaksi di dalam kuesionernya. Bikin aku sadar kalau ternyata minat utamaku ada di UKM Pramuka dan Relawan. Thank you!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Rio Pratama",
    handle: "@rio.prtma",
    quote:
      "Sebagai cowok introvert, nyari info Paguyuban kadang bikin deg-degan. Lewat website ini, aku bisa pelajari profil mereka dulu sebelum mutusin gabung.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Sarah Amelia",
    handle: "@saraah_am",
    quote:
      "Ngebantu banget buat anak Sumatera kayak aku! Langsung diarahin ke Paguyuban daerahku dan sekarang jadi ketua angkatan di sana. Keren abis!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Aldo Wijaya",
    handle: "@aldowjy",
    quote:
      "Dulu bingung bedanya UKM satu dengan yang lain, tapi deskripsi di Panggih Sedulur super komprehensif. Masuk UKM Bahasa Asing jadi pilihan terbaikku.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Intan Permata",
    handle: "@intanprmta",
    quote:
      "Tampilan webnya ringan dan gak lemot pas diakses pake HP. Buat maba yang fakir kuota, ini ngebantu banget pas lagi milih-milih UKM Kesenian.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Surya Saputra",
    handle: "@suryasptr_",
    quote:
      "Gokil, ada panduan lengkap cara daftar dan jadwal seleksi tiap UKM. Semuanya terpusat di satu pintu, jadi nggak perlu ribet buka banyak sosmed.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Maya Indah",
    handle: "@mayaindahh",
    quote:
      "Dudu dan Giya ngasih vibe yang welcoming banget buat mahasiswa baru. Sempat nyasar cari info Paguyuban Pantura, akhirnya ketemu di sini!",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Dika Anggara",
    handle: "@dikaanggr",
    quote:
      "UKM Bela Diri yang aku cari infonya lengkap banget. Ada foto kegiatan, kontak person, sampai testimoni anggotanya. Memudahkan banget buat filter.",
  },
  {
    image: "/pangsudfoto/unknown.webp",
    name: "Rina Mulyani",
    handle: "@rinamlyni",
    quote:
      "Satu kata: Praktis! Buat kalian angkatan baru UNSOED yang masih bingung mau ngembangin minat di mana, mending langsung tes kuesionernya aja.",
  },
];

const VerifyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 48 48"
    className="inline-block"
  >
    <polygon
      fill="#42a5f5"
      points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
    ></polygon>
    <polygon
      fill="#fff"
      points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
    ></polygon>
  </svg>
);

const Card = ({ card }: { card: CardT }) => (
  <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
    <div className="flex gap-2">
      <img className="size-11 rounded-full" src={card.image} alt={card.name} />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <p className="font-medium">{card.name}</p>
        </div>
        <span className="text-xs text-slate-500">{card.handle}</span>
      </div>
    </div>
    <p className="text-sm pt-4 text-gray-800">{card.quote}</p>
  </div>
);

function MarqueeRow({
  data,
  reverse = false,
  speed = 25,
}: {
  data: CardT[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = React.useMemo(() => [...data, ...data], [data]);
  return (
    <div className="relative w-full mx-auto max-w-full overflow-hidden isolation-isolate">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-32 z-10 bg-gradient-to-r from-white to-transparent blur-md" />
      <div
        className={`flex transform-gpu min-w-[200%] ${
          reverse ? "pt-5 pb-10" : "pt-10 pb-5"
        }`}
        style={{
          animation: `marqueeScroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-32 z-10 bg-gradient-to-l from-white to-transparent blur-md" />
    </div>
  );
}

export default function TestimonialSection({
  row1 = DEFAULT_DATA,
  row2 = DEFAULT_DATA,
}: {
  row1?: CardT[];
  row2?: CardT[];
}) {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <motion.div
        className="flex flex-col gap-6"
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
      >
        <div className="mx-auto flex flex-col items-center text-center relative z-10 max-w-3xl">
          <h2
            id="maskot-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tighter text-center text-gradient"
          >
            <span className="font-edwardian text-6xl sm:text-7xl mr-2">C</span>
            erita{" "}
            <span className="font-edwardian text-6xl sm:text-7xl mr-2">K</span>
            eseruan{" "}
            <span className="font-edwardian text-6xl sm:text-7xl mr-2">S</span>
            edulur{" "}
            <span className="hidden sm:inline">
              {" "}
              <span className="font-edwardian text-6xl sm:text-7xl mr-2">
                L
              </span>
              ainnya!
            </span>
          </h2>
          <p className="mt-5 text-neutral-500 text-lg leading-relaxed">
            Dengerin langsung cerita seru dari teman-teman yang udah berhasil
            nemuin UKM dan Paguyuban yang pas banget sama passion mereka.
          </p>
        </div>
        <MarqueeRow data={row1} reverse={false} speed={20} />
        <MarqueeRow data={row2} reverse={true} speed={20} />
      </motion.div>
    </>
  );
}
