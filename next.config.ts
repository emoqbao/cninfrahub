import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages / similar hosting
  output: "export",
  trailingSlash: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  // Redirects (applied at build time for static export)
  async redirects() {
    return [
      { source: "/product", destination: "/products", permanent: true },
      { source: "/product/:path*", destination: "/products/:path*", permanent: true },
      { source: "/solution", destination: "/solutions", permanent: true },
      { source: "/solution/:path*", destination: "/solutions/:path*", permanent: true },
      { source: "/resource", destination: "/resources", permanent: true },
      { source: "/resource/:path*", destination: "/resources/:path*", permanent: true },
    ];
  },

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
