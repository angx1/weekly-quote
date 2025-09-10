import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Solo agregar basePath si estás usando un repositorio que no es username.github.io
  // basePath: "/weekly-quote",
  // assetPrefix: "/weekly-quote/",
};

export default nextConfig;
