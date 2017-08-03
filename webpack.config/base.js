const HtmlWebpackPlugin = require('html-webpack-plugin');
const _  = require('lodash');
const path = require('path');


/**
 * Basic (in Production) Webpack configuration
 */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist') 
  },
  resolve: {
    alias: {
    }

  },
  plugins: [
    // create index.html under the versioned folder
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.ejs',
        inject: false
    })
  ]

};

