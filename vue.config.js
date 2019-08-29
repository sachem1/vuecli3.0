const path = require('path')

const resolve = dir => path.json(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iviewadmin/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.align
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  //打包时不生成map文件
  procutionsSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
    // 任何没有匹配到静态资源都代理都这个地址
  }
}
