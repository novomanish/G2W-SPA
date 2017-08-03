const merge = require('webpack-merge');


const base  = require('./base');

/**
 * Production only Webpack configuration
 */
module.exports = merge(base, {
  devtool: "source-map",
})

