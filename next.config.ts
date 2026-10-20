import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.artic.edu" }],
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
