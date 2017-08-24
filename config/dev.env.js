/**
 * Created by dllo on 17/8/23.
 */
const merge = require('webpack-merge')
const prod = require('./prod.env')
module.exports = merge(prod, {
  NODE_ENV: '"development"'
})
