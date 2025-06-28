const nextConfig = {
  output: 'export',
  basePath: '/The-Key-demo',
  assetPrefix: '/The-Key-demo/',  // <-- ici, une seule fois '/The-Key-demo/'
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
