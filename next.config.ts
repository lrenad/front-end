import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "forkify-api.jonas.io",
      },
      {
        protocol: "http",
        hostname: "forkify-api.herokuapp.com",
      },
      {
        protocol: "https",
        hostname: "forkify-api.herokuapp.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;