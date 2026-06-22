import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local product images served from /public with spaces in paths
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rootsveyr.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "rootsveyr.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
