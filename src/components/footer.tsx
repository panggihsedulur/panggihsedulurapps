"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
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
  return (
    <footer className="relative">
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
            <span className="text-muted-foreground text-xs">Resources</span>
            <div className="mt-2 flex flex-col gap-2">
              {resources.map(({ href, title }) => (
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
            <span className="text-muted-foreground text-xs">Company</span>
            <div className="mt-2 flex flex-col gap-2">
              {company.map(({ href, title }) => (
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

const company = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Brand assets",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
  {
    title: "Terms of Service",
    href: "#",
  },
];

const resources = [
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Help Center",
    href: "#",
  },
  {
    title: "Contact Support",
    href: "#",
  },
  {
    title: "Community",
    href: "#",
  },
  {
    title: "Security",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "#",
  },
  {
    icon: <FaGithub />,
    link: "#",
  },
  {
    icon: <FaInstagram />,
    link: "#",
  },
  {
    icon: <FaLinkedinIn />,
    link: "#",
  },
  {
    icon: <FaXTwitter />,
    link: "#",
  },
  {
    icon: <FaYoutube />,
    link: "#",
  },
];
