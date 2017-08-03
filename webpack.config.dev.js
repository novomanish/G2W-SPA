const configBase  = require('./webpack.config.base');
const ObjectUtil  = require('./src/helper/object-util');

/**
 * Development only (non-production) Webpack configuration
 */
module.exports = ObjectUtil.mix(null, configBase, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  }
});

