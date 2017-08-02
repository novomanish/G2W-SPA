const env = require ('../src/helper/env');
/**
 * Generate final configuration to be used with webpack
 */

module.exports = () => {

  console.log('Building :', env.value);

  return require (`./config.${env.value}.js`);
};