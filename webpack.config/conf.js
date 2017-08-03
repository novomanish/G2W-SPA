// !IMPORTANT! This file runs in root scope

var chalk = require('chalk');
var fs = require('fs');

var env = process.env.NODE_ENV;
/**
 * Defaulting env to dev
 */
if(!fs.existsSync(`webpack.config/${env}.conf.js`)){
  
  console.warn(chalk.red('WARN! Unsupported Environment', chalk.bold(env), ', Defaulting to ', chalk.bold('dev')));
  env = 'dev';
}

console.log('Building', env, '\n');
module.exports = require(`./${env}.conf.js`);
