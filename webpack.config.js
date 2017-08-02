const _  = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


const ENUM_ENV_DEV = 'dev';
const ENUM_ENV_PROD = 'production';

const ENUM_ENVS = [
  ENUM_ENV_DEV,
  ENUM_ENV_PROD
];

const config = {

  /**
   * Common (in Production) Webpack configuration
   */
  common: {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist') 
    },
    plugins: [
      // create index.html under the versioned folder
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/index.ejs',
          inject: false
      })
    ]

  }
}

/**
 * Production only Webpack configuration
 */
config[ENUM_ENV_PROD] = {
  devtool: "source-map",
}

/**
 * Development only (non-production) Webpack configuration
 */
config[ENUM_ENV_DEV] = {
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  }
};

var env = process.env.NODE_ENV;

/**
 * Defaulting env to dev
 */
if(!ENUM_ENVS.includes(env)){
  console.log('Environment NOT set, Defaulting to dev');

  env = ENUM_ENV_DEV;
}

/**
 * Generate final configuration to be used with webpack
 */
function generateConfig(){

  console.log('Building *', env, '*');

  return _.assign({}, config['common'], config[env]);
}

module.exports = generateConfig();