import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["maps.googleapis.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
