import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AnimatedMenuDemo } from "@/components/ui/Menu";
import { Footer } from "@/components/footer";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.panggihsedulur.bem-unsoed.com";
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION ?? "";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quiz",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chauPhilomene = localFont({
  src: "./fonts/ChauPhilomeneOne-Regular.ttf",
  variable: "--font-chau-philomene",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Panggih Sedulur",
    template: "%s | Panggih Sedulur - Unsoed",
  },
  description:
    "Pameran interaktif mahasiswa Universitas Jenderal Soedirman untuk eksplorasi UKM dan Paguyuban Daerah.",
  applicationName: "Panggih Sedulur 2026",
  keywords: [
    "Panggih Sedulur",
    "UNSOED",
    "Universitas Jenderal Soedirman",
    "UKM UNSOED",
    "Paguyuban Daerah",
    "Mahasiswa Baru UNSOED",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Panggih Sedulur 2026",
    title: "Panggih Sedulur 2026",
    description:
      "Temukan UKM dan paguyuban daerah yang paling sesuai dengan minat, bakat, dan karakter kamu.",
    images: [
      {
        url: "/coming-soon.png",
        width: 1200,
        height: 630,
        alt: "Panggih Sedulur 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panggih Sedulur 2026",
    description:
      "Pameran interaktif UNSOED untuk eksplorasi UKM dan paguyuban daerah.",
    images: ["/coming-soon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: googleSiteVerification || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        chauPhilomene.variable,
        poppins.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col justify-center  ">
        {children}
        <SpeedInsights />
        <AnimatedMenuDemo />
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
