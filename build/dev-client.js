/**
 * Created by dllo on 17/8/23.
 */
require('eventsource-polyfill')
// 引入热加载,的客户端,
// 设置参数 noInfo 及 reload

const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
