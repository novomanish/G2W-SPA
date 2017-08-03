var chalk = require('chalk');

var env = process.env.NODE_ENV || 'development';

console.log('Webpack configuration:', chalk.bold(env));

module.exports = require (`./webpack/config.${env}.js`);
