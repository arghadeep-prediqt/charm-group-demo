import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    APIENDPOINT: "https://charm.project.prediqt.ai/v1/api",
  },
};

export default nextConfig;
