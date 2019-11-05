// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const host = process.env.NODE_ENV === 'production' ? '45.76.176.241' : 'localhost';

const devServer = {
  port: 8008,
  // host: '45.76.176.241',
  host,
  open: true,
  historyApiFallback: true,
};

const VENDER_LIBS = [
  'axios',
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'redux',
  'redux-thunk',
  'reselect',
  'styled-components',
  'prop-types',
  'react-circular-progressbar',
  '@material-ui/core',
  '@material-ui/icons',
  '@material-ui/styles',
  '@tinymce/tinymce-react',
];

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/app.js',
    // vendor: VENDER_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        use: ['eslint-loader'],
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /dist/],
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/i,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@actions': path.resolve(__dirname, './src/actions'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // maxInitialRequests: Infinity,
      // minSize: 0,
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name(module) {
      //       // get the name. E.g. node_modules/packageName/not/this/part.js
      //       // or node_modules/packageName
      //       const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

      //       // npm package names are URL-safe, but some servers don't like @ symbols
      //       return `npm.${packageName.replace('@', '')}`;
      //     },
      //   },
      // },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer,
};
