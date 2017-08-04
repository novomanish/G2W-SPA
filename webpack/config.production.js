const Chalk = require('chalk');
const Merge = require('webpack-merge');
const CommonConfig  = require('./config.common.js');

/**
 * Production only Webpack configuration
 */

module.exports = Merge(CommonConfig, {

})
