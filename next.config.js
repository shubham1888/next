/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // distDir: 'build',
  env:{
    MONGODB_URL:process.env.MONGODB_URL
  }
}

module.exports = nextConfig
