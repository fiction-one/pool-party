/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@f1/ui-core"],
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
