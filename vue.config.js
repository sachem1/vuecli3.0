const path = require('path')
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iviewweb' : '/'
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  devtool: '#source-map',
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成map文件
  // procutionsSourceMap: false,
  devServer: {
    proxy: 'http://api.jieqiang.top'
    // 任何没有匹配到静态资源都代理都这个地址
  }
}
