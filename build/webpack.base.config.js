/**
 * Created by dllo on 17/8/23.
 */
const path = require('path')
const webpack = require('webpack')
// 引入文件夹config,require回去读取文件夹中的index.js文件
const config = require('../config')
// 引入公用工具类 utils
const utils = require('./utils')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: utils.getEntries('./src/modules/**/index.js'),

  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash:7].js',
    publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre', // 在编译之前
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/,
                // loader配合options使用
        loader: 'url-loader',

        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }

    ]
  }

}
