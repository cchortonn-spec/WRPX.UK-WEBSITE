import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
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
