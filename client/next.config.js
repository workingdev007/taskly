/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
    // loader: "custom", // Use a custom loader
    // path: ".", // This makes paths relative
    
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8747",
      },
    ],
    // domains: ['localhost']
  },
  // output: "export",
  // assetPrefix: "./", // Use relative paths for assets
  // trailingSlash: true, // Ensure paths include trailing slashes (e.g., /about/)
};

module.exports = nextConfig;
