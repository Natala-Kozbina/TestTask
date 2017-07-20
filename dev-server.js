const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.config');
const baseConfig = require('./config/base');

// HMR


webpackConfig.entry = [
  `webpack-dev-server/client?http://localhost:${baseConfig.devServerPort}`,
  'webpack/hot/dev-server',
  ...webpackConfig.entry,
];

const server = new WebpackDevServer(
  webpack(webpackConfig),
  {
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
    proxy: {
      '/api': {
        target: baseConfig.apiServerUrl,
        secure: false,
      },
    },
  }
);

server.listen(baseConfig.devServerPort, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`Listening at localhost: ${baseConfig.devServerPort}`);
});
