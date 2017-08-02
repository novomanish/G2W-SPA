const _  = require('lodash');
const config  = require('./config.base');

/**
 * Production only Webpack configuration
 */
module.exports = _.assign(null, config, {
  devtool: "source-map",
})

