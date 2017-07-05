const nodeExternals = require('webpack-node-externals');
const path = require('path');

const DEV = path.join(__dirname, '/Client');
const OUTPUT = path.join(__dirname, '/Client');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: ['babel-polyfill', `${DEV}/index.jsx`],
  output: {
    path: OUTPUT,
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: DEV,
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
};
