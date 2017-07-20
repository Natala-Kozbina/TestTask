const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonWebpackConfig = require('./webpack.config.common');
const baseConfig = require('../base');

const outputPath = `${baseConfig.path.dist}/dev`;

const webpackConfig = webpackMerge(commonWebpackConfig, {
  output: {
    path: outputPath,
  },
  plugins: [
    new CleanWebpackPlugin(
      [
        outputPath,
        baseConfig.path.reports,
      ],
      {
        root: baseConfig.path.root,
      }
    ),
  ],
  devtool: 'source-map',
});

module.exports = webpackConfig;
