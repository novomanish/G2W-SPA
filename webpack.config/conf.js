var chalk = require('chalk');
var fs = require('fs');

var STAGE_ENV = process.env.STAGE_ENV;
var appType = (STAGE_ENV === 'local') ? 'development' : 'production';

console.log('Generating webpack configuration:', 'Type',chalk.bold(appType), 'Environment', chalk.bold(STAGE_ENV), '\n');
var webpackConf = require(`./${appType}.conf.js`);

module.exports = webpackConf;
