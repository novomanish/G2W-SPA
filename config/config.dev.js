const config  = require('./config');
const ObjectUtil  = require('../src/helper/object-util');

/**
 * Development only (non-production) Webpack configuration
 */
module.exports = ObjectUtil.mix(null, config, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  }
});

