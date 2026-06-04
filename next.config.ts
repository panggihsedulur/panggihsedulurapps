import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensures Next dev (Turbopack) treats this folder as the root,
    // even if there are other lockfiles in parent directories.
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ksvrcbwywzzuvjfhklmc.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        // Placeholder images — hapus setelah semua data pakai gambar lokal
        protocol: "https",
        hostname: "dummyimage.com",
      },
    ],
  },
};

export default nextConfig;
