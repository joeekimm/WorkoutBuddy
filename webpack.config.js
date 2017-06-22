const path = require('path');

const DEV = path.join(__dirname, '/Client');
const OUTPUT = path.join(__dirname, '/Client');

module.exports = {
  entry: `${DEV}/index.tsx`,
  output: {
    path: OUTPUT,
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders:  ['babel-loader', 'ts-loader'],
      include: DEV,
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'inline-source-map',
};
