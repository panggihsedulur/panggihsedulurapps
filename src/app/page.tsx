import type { Metadata } from "next";
import Beranda from "./beranda/page";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.panggihsedulur.bem-unsoed.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Panggih Sedulur",
  description:
    "Panggih Sedulur adalah pameran interaktif UNSOED untuk membantu mahasiswa mengenal UKM dan paguyuban daerah terbaik.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Panggih Sedulur",
    description:
      "Panggih Sedulur adalah pameran interaktif UNSOED untuk membantu mahasiswa mengenal UKM dan paguyuban daerah terbaik.",
    url: siteUrl,
  },
};

export default function ComingSoonPage() {
  return <Beranda />;
}
