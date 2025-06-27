/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // activation de l'export statique automatique
  basePath: '/', // <-- nom exact de ton dossier ou repo GitHub
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
