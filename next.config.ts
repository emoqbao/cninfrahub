import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages / similar hosting
  output: "export",
  trailingSlash: true,


  // Image optimization — allow external sources for logos, diagrams, etc.
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cninfrahub.com",
      },
    ],
  },
};

export default nextConfig;
