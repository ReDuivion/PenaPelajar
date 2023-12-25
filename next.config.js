/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
  images: {
    domains: ['images.unsplash.com', 'zerochan.net'],
  },
    webpack(config) {
      config.module.rules.push({
        test: /\.(woff2|woff|ttf|otf)$/i,
        use: {
          loader: "url-loader",
        },
      });
  
      return config;
    },
  };