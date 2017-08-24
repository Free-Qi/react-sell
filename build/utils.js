/**
 * Created by dllo on 17/8/23.
 */
const config = require('../config')
const path = require('path')
const glob = require('glob')

exports.assetsPath = function (_path) {
  let assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.getEntries = function (globPath) {
  let entries = {}
  glob.sync(globPath).forEach(function (file) {
    let filePathArr = file.split('/').splice(-3)
    const moduleName = filePathArr[1]
    entries[moduleName] = file
  })
  // console.log(entries)
  return entries
}
    // [ './src/modules/about/index.js',
    // './src/modules/index/index.js' ]
// 转换成:
// {
// index: './src/modules/about/index.js'
// about:'./src/modules/index/index.js'
// }

exports.getEntries('./src/modules/**/index.js')
