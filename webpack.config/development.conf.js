var merge = require('webpack-merge');
const configBase  = require('./base');

/**
 * Development only (non-production) Webpack configuration
 */
module.exports = merge(configBase, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  }
});

