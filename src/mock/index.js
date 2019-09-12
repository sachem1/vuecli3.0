import Mock from 'mockjs'
import {
  getUserInfo
} from './response/user'

// 数据
Mock.mock(/\/CustomerService/, 'get', getUserInfo)

export default Mock

