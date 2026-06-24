import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',          // Keeps static HTML export active
  images: {
    unoptimized: true,       // Keeps unoptimized images active
  },
  // ADD THIS LINE BELOW:
  basePath: '/Portfolio-Website', 
};

export default nextConfig;