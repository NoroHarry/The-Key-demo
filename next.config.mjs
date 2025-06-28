/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                  // Exportation statique activée
  basePath: '/The-Key-demo',         // Nom de ton sous-dossier GitHub Pages
  assetPrefix: '/The-Key-demo/',     // Chemin des ressources statiques
  images: {
    unoptimized: true,               // Nécessaire pour les images dans un projet exporté
  },
  eslint: {
    ignoreDuringBuilds: true,        // Ignore les erreurs ESLint pendant le build
  },
  typescript: {
    ignoreBuildErrors: true,         // Ignore les erreurs TypeScript pendant le build
  },
}

export default nextConfig
