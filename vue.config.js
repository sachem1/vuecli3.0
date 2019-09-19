const path = require('path')
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iviewweb' : '/'
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: 'vue-style-loader!css-loader',
          less: 'vue-style-loader!css-loader!less-loader'
        },
        postLoaders: {
          html: 'babel-loader'
        }
      }
    },
    {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    },
    {
      test: /iview\/.*?js$/,
      loader: 'happypack/loader?id=happybabel',
      exclude: /node_modules/
    },
    {
      test: /\.js$/,
      loader: 'happypack/loader?id=happybabel',
      exclude: /node_modules/
    },
    {
      test: /\.js[x]?$/,
      include: [resolve('src')],
      exclude: /node_modules/,
      loader: 'happypack/loader?id=happybabel'
    },
    {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=1024'
    },
    {
      test: /\.(html|tpl)$/,
      loader: 'html-loader'
    }
    ]
  }
  // 打包时不生成map文件
  // procutionsSourceMap: false,
  // devServer: {
  //   proxy: 'http://localhost:18096'
  //   // 任何没有匹配到静态资源都代理都这个地址
  // }
}
