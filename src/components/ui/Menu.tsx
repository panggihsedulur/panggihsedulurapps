"use client";
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuButtonLabel,
  AnimatedMenuList,
  AnimatedMenuItem,
} from "@/components/systaliko-ui/animated-menu";
import Link from "next/link";
import { useState, useEffect } from "react";

const menuItems = [
  {
    title: "Beranda   ",
    href: "/#home",
  },
  {
    title: "Daftar UKM",
    href: "/#about",
  },
  {
    title: "Daftar Paguyuban",
    href: "/#Services",
  },
  {
    title: "Panitia",
    href: "/portfolio",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
const socialLinks = [
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
export function AnimatedMenuDemo() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi saat user melakukan scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`dark fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 px-4 ${
        isScrolled ? "pt-6 " : "pt-9"
      }`}
    >
      <div className="w-full max-w-7xl transition-all duration-300 flex items-center justify-between">
        <div
          className="py-1 px-2 bg-white/5 backdrop-blur-lg 
              border border-white/20 
              shadow-lg text-white rounded-2xl "
        >
          <span className="text-xl font-bold tracking-tight">
            Panggih Sedulur
          </span>
        </div>
        <AnimatedMenu className="relative ">
          <AnimatedMenuButton className="w-25.5 h-[40px]  text-primary-foreground ">
            <AnimatedMenuButtonToggleIcon />
            <AnimatedMenuButtonLabel />
          </AnimatedMenuButton>
          <AnimatedMenuList className="absolute right-0 top-0.5 bg-linear-to-bl from-primary/95 to-primary border shadow-md inset-shadow-xs inset-shadow-foreground rounded-3xl ">
            <div className="flex flex-col px-6 justify-evenly gap-6 items-start size-full">
              <div className="flex flex-col items-start gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
                {menuItems.map((item, i) => (
                  <AnimatedMenuItem key={i} order={i}>
                    <Link
                      className="text-2xl font-medium text-muted text-gradient-2"
                      href={item.href}
                      title={item.title}
                    >
                      {item.title}
                    </Link>
                  </AnimatedMenuItem>
                ))}
              </div>
              <div className="flex gap-4 *:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none">
                {socialLinks.map((item, i) => (
                  <AnimatedMenuItem
                    key={item.title}
                    order={i + menuItems.length}
                  >
                    <Link
                      className=" font-medium text-muted/80 text-sm tracking-wide uppercase text-gradient-2"
                      href={item.href}
                      title={item.title}
                    >
                      {item.title}
                    </Link>
                  </AnimatedMenuItem>
                ))}
              </div>
            </div>
          </AnimatedMenuList>
        </AnimatedMenu>
      </div>
    </header>
  );
}
