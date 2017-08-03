const configBase  = require('./webpack.config.base');
const ObjectUtil  = require('./src/helper/object-util');

/**
 * Production only Webpack configuration
 */
module.exports = ObjectUtil.mix(null, configBase, {
  devtool: "source-map",
})

