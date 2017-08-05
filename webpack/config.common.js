const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');
const path = require('path');


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

/**
 * Basic (in Production) Webpack configuration
 */
module.exports = {
  entry: './src/vue-entry.js',
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'vue$': 'vue/dist/vue.esm.js'
    }

  },
  module: {
    rules: [{
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },

      // https://github.com/webpack/url-loader
      {
        test: /\.(ico)/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]'
        }
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
      }, 

      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },

    ]
  },
  plugins: [
    // create index.html under the versioned folder
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.template.hbs',
      favicon: './src/favicon.ico',
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        preserveLineBreaks: true
      },
      title: 'G2W',
    })
  ]

};