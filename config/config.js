const HtmlWebpackPlugin = require('html-webpack-plugin');
const _  = require('lodash');
const path = require('path');


/**
 * Basic (in Production) Webpack configuration
 */
module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist') 
  },
  plugins: [
    // create index.html under the versioned folder
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../src/index.ejs'),
        inject: false
    })
  ]

};

