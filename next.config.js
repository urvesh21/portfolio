/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: './',
    images: {
        path: './images',
        unoptimized: true,
  },
}

module.exports = nextConfig