const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add trailing slashes for better SEO
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      }
    }
    return config
  },
};

module.exports = withMDX(nextConfig);