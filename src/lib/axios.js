import axios from 'axios'
import {
  baseURL
} from '@/config'

class HttpRequest {
  // options 参数对象
  constructor (baseUrl = baseURL) {
    console.log(baseURL)
    this.baseUrl = baseURL
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 添加全局的loading...align-self-auto
      // Spin。show() 遮罩层
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      console.log(res)
      return res
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    console.log('start request')
    const instance = axios.create()
    // 合并对象属性值
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    // return {
    //   data: 'dddd'
    // }
    return instance(options)
  }
}

export default HttpRequest
