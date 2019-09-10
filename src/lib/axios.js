import axios from 'axios'
import {
  baseURL
} from '@/config/index'

class HttpRequest {
  // options 参数对象
  constructor(baseUrl = baseURL) {
    console.log(baseURL)
    this.baseUrl = baseURL
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    console.log(config.baseUrl)
    return config
  }
  interceptors(instance) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 添加全局的loading...align-self-auto
      // Spin。show() 遮罩层
      console.log('request')
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
    console.log(this.getInsideConfig())
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}

export default HttpRequest
