const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { nearRoot, nearSrc } = require('../utils/abs')
const { env } = require('../config')
const win = require(nearRoot('mock/window'))

module.exports = [
  new HtmlWebpackPlugin({
    path: nearRoot('dist'),
    filename: 'index.html',
    template: nearSrc('template/index.ejs'),
    favicon: nearSrc('image/favicon.ico'),
    title: 'begin-vue',
    window: win,
    inject: false,
    minify: {
      removeComments: env.isProd
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module) {
      return module.context && module.context.indexOf('node_modules') !== -1
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new webpack.ProvidePlugin({
  }),
  new ExtractTextPlugin({
    filename: 'css/style.css',
    disable: !env.isProd,
    allChunks: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new CopyWebpackPlugin([{
    context: 'asset',
    from: '**/*',
    toType: 'dir'
  }], {
    ignore: [
      'demo.jpg'
    ]
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
]
