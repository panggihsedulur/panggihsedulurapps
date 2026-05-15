import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensures Next dev (Turbopack) treats this folder as the root,
    // even if there are other lockfiles in parent directories.
    root: __dirname,
  },
};

export default nextConfig;
