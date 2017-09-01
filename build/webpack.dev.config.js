/**
 * Created by dllo on 17/8/23.
 */
const baseWebpackConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// 修改webpack配置的entry
Object.keys(baseWebpackConfig.entry).forEach(function (item, index, array) {
  baseWebpackConfig.entry[item] = ['axios','whatwg-fetch', './build/dev-client'].concat(baseWebpackConfig.entry[item])
})

// 合并base 与dev的配置,
module.exports = merge(baseWebpackConfig, {
    // 在base配置基础上,添加插件.
  plugins: [
        // 在HTML中引入编译后的资源

        // webpack的热模块替换插件
    new webpack.HotModuleReplacementPlugin(),
        // webpack 不触发 error 事件插件
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

const htmlPaths = utils.getEntries('./src/modules/**/*.html')
// console.log(htmlPathArray)
Object.keys(htmlPaths).forEach(function (key) {
  let config = {
    filename: key + '.html',
    template: htmlPaths[key],
    // 作用:或略其他模块中的js
    excludeChunks: Object.keys(htmlPaths).filter(function (path) {
      return (path !== key)
    })
  }
  const plugin = new HTMLWebpackPlugin(config)
  module.exports.plugins.push(plugin)
})
