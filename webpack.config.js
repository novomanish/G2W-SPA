var _  = require('lodash');

var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

/**
 * Common (in Production) Webpack configuration
 */
var commonConfig = {
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

};

/**
 * Production only Webpack configuration
 */
var prodConfig = {
  devtool: "source-map",
};

/**
 * Development only (non-production) Webpack configuration
 */
var devConfig = {
  devtool: "inline-source-map",
  devServer: {
  	contentBase: './dist'
  }
};

/**
 * Generate final configuration to be used with webpack
 */
function generateConfig(){

	// Env based config selection logic goes here
	var envConfig = devConfig;

	return _.assign({}, commonConfig, envConfig);
}

module.exports = generateConfig();