/** @type {import('next').NextConfig} */
const isCI = process.env.CI === 'true'
const repoBasePath = '/CodeCraft-Java-Portfolio'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  // Apply basePath/assetPrefix only in CI (e.g., GitHub Actions)
  basePath: isCI ? repoBasePath : undefined,
  assetPrefix: isCI ? repoBasePath : undefined,
  // Ensure default port is 3000
  env: {
    PORT: '3000',
  },
}

export default nextConfig
