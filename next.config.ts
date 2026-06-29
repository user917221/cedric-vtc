import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/assets/javascripts/:path*",
        destination: "https://aircenter.space/assets/javascripts/:path*",
      },
      {
        source: "/assets/fonts/:path*",
        destination: "https://aircenter.space/assets/fonts/:path*",
      },
    ];
  },
};

export default nextConfig;
