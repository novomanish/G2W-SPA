const Chalk = require('chalk');
const Merge = require('webpack-merge');
const CommonConfig  = require('./config.common.js');

/**
 * Development only (non-production) Webpack configuration
 */
//console.log('Webpack configuration:',Chalk.bold('Development'));

module.exports = Merge(CommonConfig, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  }
});

