const Chalk = require('chalk');
const Merge = require('webpack-merge');
const CommonConfig  = require('./config.common.js');

/**
 * Development only (non-production) Webpack configuration
 */

module.exports = Merge(CommonConfig, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  }
});

