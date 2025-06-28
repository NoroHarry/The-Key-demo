/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           
  basePath: '/The-Key-demo', 
  assetPrefix: '/The-Key-demo/', // ✅ OBLIGATOIRE pour charger les fichiers statiques correctement
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
