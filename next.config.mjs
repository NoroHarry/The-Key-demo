/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/The-Key-demo',
  assetPrefix: '/The-Key-demo/',  
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig
