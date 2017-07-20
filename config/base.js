const {
  resolve,
  normalize,
} = require('path');

const root = resolve(__dirname, '../');

const webpackConfig = {
  path: {
    root,
    src: normalize(`${root}/src`),
    dist: normalize(`${root}/dist`),
    reports: normalize(`${root}/reports`),
    nodeModules: normalize(`${root}/node_modules`),
  },
  babel: {
    configPath: `${root}/config/babel/.babelrc`,
  },
  eslint: {
    configPath: `${root}/config/eslint/.eslintrc.js`,
  },
  devServerPort: process.env.DEV_SERVER_PORT || 8080,
  apiServerUrl: process.env.API_SERVER_URL || 'http://localhost:8081',
};

module.exports = webpackConfig;
