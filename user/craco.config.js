// craco.config.js
module.exports = {
  babel: {
    presets: [],
    plugins: [],
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Modify webpack config as needed here
      return webpackConfig;
    },
  },
};
