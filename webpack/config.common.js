const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');
const path = require('path');


/**
 * Basic (in Production) Webpack configuration
 */
module.exports = {
  entry: './src/vue-app-bridge.js',
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }

  },
  module: {
    rules: [{
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },

      // https://github.com/vuejs/vue-loader
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          vue: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            },
            postcss: [
              require('autoprefixer')({
                browsers: 'chrome >= 30, firefox >= 24, ie 10-11, safari >= 6'
              })
            ]
          },
        }
      }
    ]
  },
  plugins: [
    // create index.html under the versioned folder
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.template.hbs',
      title: 'G2W',
    })
  ]

};