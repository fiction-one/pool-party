/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@f1/ui-core", "@f1/ui-layers", "@f1/ui-theme"],
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
