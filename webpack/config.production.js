const Chalk = require('chalk');
const Merge = require('webpack-merge');
const CommonConfig  = require('./config.common.js');

/**
 * Production only Webpack configuration
 */
//console.log('Webpack configuration:',Chalk.bold('Production'));

module.exports = Merge(CommonConfig, {

})
