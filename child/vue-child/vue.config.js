const { name } = require('./package');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'app-vue' : '/',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  }
}