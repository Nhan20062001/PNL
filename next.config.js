/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
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
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
};

module.exports = nextConfig;
