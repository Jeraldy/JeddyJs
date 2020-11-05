const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
});