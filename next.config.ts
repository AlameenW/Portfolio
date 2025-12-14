import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Empty turbopack config to silence the warning
  turbopack: {},
};

export default nextConfig;
