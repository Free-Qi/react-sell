/**
 * Created by dllo on 17/8/23.
 */
//
// opn                               打开浏览器插件
// express                           node.js后端服务框架
// http-proxy-middleware             解决跨域问题
// webpack-dev-middleware            webpack开发服务 - server 不能定制
// webpack-hot-middleware            热更新/热加载/热修复
//html-webpack-plugin-after-emit     把编译后的内容引入之后触发的事件
// connect-history-api-fallback      链接历史


const config = require('../config');
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
//引入 express 服务
const express = require('express');
const opn = require('opn');
const path = require('path');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const devWebpackConfig = require('./webpack.dev.config');
const proxyTable = config.dev.proxyTable;

const devWebpack = require('webpack-dev-middleware');
const hotWebpack = require('webpack-hot-middleware');

// && true && 100 结果100 false && 100 结果false
// || 3306 || 8080 结果 3306 null || 8080 结果8080

const port = process.env.PORT || config.dev.port;


//创建 express 服务
const app = express();

const compiler = webpack(devWebpackConfig);

//创建 webpack 开发服务中间件,
const devMiddleware = devWebpack(compiler, {
    publicPath: devWebpackConfig.output.publicPath,
    quiet: true,
    noInfo: true
});
//创建 webpack 热替换中间件
const hotMiddleware = hotWebpack(compiler);


//webpack 插件监听,当html-webpack-plugin执行之后,触发action 执行浏览器,reload
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'});
        cb()
    })
});

Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

const static = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
console.log(static);
app.use(static, express.static('./static'));

app.use(require('connect-history-api-fallback')());

app.use(devMiddleware);
app.use(hotMiddleware);
//autoOpenBrowser 自动打开浏览器
const autoOpenBrowser = !!config.dev.autoOpenBrowser;

const url = 'http://localhost:' + port;

let _resolve;
let readyPromise = new Promise(resolve => {
    _resolve = resolve
});
console.log('服务器开启中...');

devMiddleware.waitUntilValid(()=> {
    console.log('> 服务器监听在' + url + '\n');
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(url)
    }
    _resolve()
});

const server = app.listen(port);

module.exports = {
    ready:readyPromise,
    close:()=>{
        server.close()
    }
};



