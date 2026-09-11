import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/showcase",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
