import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages necesita basePath para repositorios que no son username.github.io
  basePath: "/weekly-quote",
  assetPrefix: "/weekly-quote/",
};

export default nextConfig;
