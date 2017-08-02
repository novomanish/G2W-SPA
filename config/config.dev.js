const _  = require('lodash');
const config  = require('./config.base');

/**
 * Development only (non-production) Webpack configuration
 */
module.exports = _.assign(null, config, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  }
});

