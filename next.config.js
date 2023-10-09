/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslintConfig: {
    extends: ['prettier'],
  },
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'building.vienthammygangnam.vn',
      'bizflyportal.mediacdn.vn',
      'i.ibb.co',
      'images.pexels.com',
      'l3.googleusercontent.com',
      'img.icons8.com',
      'intietkiem.com',
      'img.freepik.com',
      'preview.redd.it',
    ],
  },
};

module.exports = nextConfig;
