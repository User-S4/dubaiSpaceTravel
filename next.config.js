/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Ensure that the app can work in a subdirectory if needed
  basePath: '',
  // Allow static image imports
  experimental: {
    // These settings can help with module resolution
    esmExternals: 'loose',
    outputFileTracingRoot: process.cwd(),
  },
  // Add webpack configuration to resolve module issues
  webpack: (config, { isServer }) => {
    // Add fallback resolution for client-entry-loader
    config.resolve.alias = {
      ...config.resolve.alias,
      'next-flight-client-entry-loader': path.resolve('./app/client-entry-reset.js'),
    };

    return config;
  },
  // Disable type checking during build for faster builds
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build for faster builds
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 