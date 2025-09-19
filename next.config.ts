import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for e2b compatibility
  experimental: {
    // Allow external connections for e2b
    serverComponentsExternalPackages: [],
  },
  // Set port for e2b (this will be used by e2b when it detects Next.js)
  env: {
    PORT: '3000',
  },
  webpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "@dyad-sh/nextjs-webpack-component-tagger",
      });
    }
    return config;
  },
};

export default nextConfig;
