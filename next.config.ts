import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "nextcloud.ohheyandie.gay" }]
  }
};

export default nextConfig;
