const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForceCaseSensitivityWebpackPlugin = require('force-case-sensitivity-webpack-plugin');

const baseConfig = require('../base');

module.exports = {
  context: baseConfig.path.src,
  resolve: {
    root: baseConfig.path.src,
  },
  entry: [
    'index.js',
  ],

  output: {
    publicPath: '/',
    filename: 'js/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          baseConfig.path.src,
        ],
        loaders: [
          `babel-loader?extends=${baseConfig.babel.configPath}`,
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'favicon.ico',
      inject: 'body',
      hash: false,
    }),
    new ForceCaseSensitivityWebpackPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  eslint: {
    configFile: baseConfig.eslint.configPath,
  },
};
