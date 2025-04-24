/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Add this line for static export
  // Optional: If images are not loading in the static export, uncomment the line below
  // images: { unoptimized: true },
}

module.exports = nextConfig
