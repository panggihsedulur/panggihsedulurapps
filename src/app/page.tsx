import type { Metadata } from "next";
import Beranda from "./beranda/page";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.panggihsedulur.bem-unsoed.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Panggih Sedulur 2026 - Temukan UKM & Paguyuban Daerah UNSOED",
  description:
    "Panggih Sedulur adalah pameran interaktif UNSOED untuk membantu mahasiswa mengenal UKM dan paguyuban daerah terbaik. Ikuti kuisioner dan temukan komunitas yang sesuai denganmu.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Panggih Sedulur 2026 - Temukan UKM & Paguyuban Daerah UNSOED",
    description:
      "Ikuti kuisioner interaktif Panggih Sedulur dan temukan UKM serta paguyuban daerah UNSOED yang paling sesuai dengan minat dan bakatmu.",
    url: siteUrl,
  },
};

export default function ComingSoonPage() {
  return <Beranda />;
}
