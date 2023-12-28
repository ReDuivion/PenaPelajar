/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
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