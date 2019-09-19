
import axios from 'axios'
import {
  baseURL
} from '@/config/index'

class HttpRequest {
  // options 参数对象
  constructor(baseUrl = baseURL) {
    console.log('baseurl:' + baseURL)
    this.baseUrl = 'http://localhost:18096'
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseUrl: 'http://localhost:18096',
      headers: {
        //
      }
    }
    console.log(config.baseUrl)
    return config
  }
  interceptors(instance, url) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 添加全局的loading...align-self-auto
      // Spin。show() 遮罩层
      console.log('request')
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      console.log('response')
      console.log(res.data)
      return res
    }, error => {
      return Promise.reject(error)
    })
  }

  request(options) {
    const instance = axios.create()
    // 合并对象属性值
    console.log('getInsideConfig:' + this.getInsideConfig())
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
