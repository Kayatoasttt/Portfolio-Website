import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',          // Enables static HTML export
  images: {
    unoptimized: true,       // Required because GitHub Pages doesn't support the Next.js image optimization server
  },
  // If your repository is NOT a user page (e.g., username.github.io), 
  // and is instead a sub-folder repo (e.g., username.github.io/repo-name),
  // uncomment and add your repo name below:
  // basePath: '/your-repo-name',
};

export default nextConfig;