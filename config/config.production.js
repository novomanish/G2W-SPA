const config  = require('./config');
const ObjectUtil  = require('../src/helper/object-util');

/**
 * Production only Webpack configuration
 */
module.exports = ObjectUtil.mix(null, config, {
  devtool: "source-map",
})

