/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn3d.iconscout.com',
      'www.calanceus.com',
      'raw.githubusercontent.com',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 