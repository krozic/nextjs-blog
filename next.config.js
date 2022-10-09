/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    title: 'Kyle Rozic',
  },
  images: {
    unoptimized: true,
    // loader: 'vercel'
  }
}

module.exports = nextConfig
