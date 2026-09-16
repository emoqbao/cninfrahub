import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages / similar hosting
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
