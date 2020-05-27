const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common('production'), {
  mode: 'production',
  devtool: 'source-map'
});
