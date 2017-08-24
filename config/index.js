/**
 * Created by dllo on 17/8/23.
 */
const path = require('path')
module.exports = {
  // 开发环境配置
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    port: 3000,
    autoOpenBrowser: true,
    proxyTable: {
      '/api': {
         // http://www.ibantang.com/search/getData?ot=product&st=0&q=1&page=0&pagesize=20
         // http://localhost:3000/api/
         // 转换成如下效果
         // http://www.ibantang.com/
        target: 'https://www.maizuo.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': '/api'
        }
      }
    }

  },
  // 生产环境配置
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '..dist'),
    assetsPublicPath: '',
    assetsSubDirectory: 'static'
  }
}
