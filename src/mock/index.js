import Mock from 'mockjs'
import {
  getUserInfo
} from './response/user'
console.log('jinru  mock')
// 拦截数据
// Mock.mock('http://api.jieqiang.top/Setting/CustomerService/GetSignTypes', getUserInfo)
// Mock.mock(/\/GetSignTypes/, 'get', getUserInfo)
console.log('jinru  mock2')
export default Mock
