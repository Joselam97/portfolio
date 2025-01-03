/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;