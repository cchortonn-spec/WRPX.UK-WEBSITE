import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Meta POSTs to /api/whatsapp/webhook (no trailing slash). Without this,
  // Next.js returns 308 and Meta often drops the POST body on redirect.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/api/whatsapp/webhook",
        destination: "/api/whatsapp/webhook/",
      },
      {
        source: "/api/meta/leadgen/webhook",
        destination: "/api/meta/leadgen/webhook/",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "wrpx.co.uk",
          },
        ],
        destination: "https://www.wrpx.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
