const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

const generateFilename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: `${generateFilename('js')}`,
    path: path.resolve(__dirname, './build'),
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  mode,
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/img', to: 'img' },
        { from: './src/fonts', to: 'fonts' },
        // { from: './src/files', to: 'files' },
        // { from: "css", to: "css" },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: {
                    version: '3.14',
                    proposals: true,
                  },
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader?url=false', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      //   `...`,
      new CssMinimizerPlugin({
        test: /\.css$/i,
      }),
    ],
  },
  performance: {
    maxEntrypointSize: 2 * 512000,
    maxAssetSize: 2 * 512000,
  },
  devServer: {
    //contentBase: './build',
    open: true,
    port: 3000,
    hot: true,
    compress: true,
    overlay: true,
    writeToDisk: true,
    historyApiFallback: true,
    //stats: 'errors-only',
  },
  devtool: isDev && 'source-map', // ???????????????????? ?? ?????????????? ?????????? ?? ???????????????????? ?? serv
};
