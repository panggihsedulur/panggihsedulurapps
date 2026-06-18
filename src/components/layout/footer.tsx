"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/kuisioner/test")) {
    return null;
  }
  if (pathname.startsWith("/kuisioner/biodata")) {
    return null;
  }
  if (pathname.startsWith("/kuisioner/result")) {
    return null;
  }
  if (pathname.startsWith("/kuisioner")) {
    return null;
  }
  if (pathname.startsWith("/dashboard")) {
    return null;
  }
  return (
    <footer className="relative z-0">
      <div
        className={cn(
          "mx-auto max-w-7xl lg:border-x",
          "dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]",
        )}
      >
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="grid max-w-7xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
            <Link className="justify-left w-max" href="/">
              <h1 className="text-2xl sm:text-2xl font-normal font-heading  text-center  text-gradient">
                <span className="font-edwardian text-4xl sm:text-5xl  mr-0.5 ">
                  P
                </span>
                anggih
                <span className="font-edwardian text-4xl sm:text-5xl mr-0.5">
                  S
                </span>
                edulur
              </h1>
            </Link>
            <p className="max-w-sm text-balance text-muted-foreground text-sm">
              Temukan UKM & Paguyuban Sesuai Passionmu
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, index) => (
                <Button
                  asChild
                  key={`social-${item.link}-${index}`}
                  size="icon-sm"
                  variant="outline"
                >
                  <a href={item.link} target="_blank">
                    {item.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground text-xs">Navigasi</span>
            <div className="mt-2 flex flex-col gap-2">
              {navigasi.map(({ href, title }) => (
                <a
                  className="w-max text-sm hover:underline"
                  href={href}
                  key={title}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground text-xs">Sosial Media</span>
            <div className="mt-2 flex flex-col gap-2">
              {kontak.map(({ href, title }) => (
                <a
                  className="w-max text-sm hover:underline"
                  href={href}
                  key={title}
                  target="_blank"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="flex max-w-7xl flex-col justify-between gap-2 py-4">
          <p className="text-center font-light text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Panggih Sedulur, All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

const navigasi = [
  {
    title: "Beranda",
    href: "/#home",
  },
  {
    title: "UKM",
    href: "/ukm",
  },
  {
    title: "Paguyuban",
    href: "/paguyuban",
  },
  {
    title: "Kuisioner",
    href: "/kuisioner",
  },
  {
    title: "Panitia",
    href: "/panitia",
  },
];

const kontak = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/panggihsedulur/",
  },
  {
    title: "Tiktok",
    href: "https://www.tiktok.com/@panggihsedulur",
  },
  {
    title: "Whatsapp",
    href: "https://wa.me/6281234567890",
  },
];

const socialLinks = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/panggihsedulur/",
  },
  {
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@panggihsedulur",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/6281234567890",
  },
];
