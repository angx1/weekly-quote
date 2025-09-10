import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // No usar basePath - GitHub Pages ya sirve desde /weekly-quote/
  // Solo usar assetPrefix si es necesario para assets estáticos
  basePath: "/weekly-quote",
};

export default nextConfig;
