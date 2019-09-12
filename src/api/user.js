import axios from './index'

export const getUserInfo = ({
  userId
}) => {
  console.log('user-request')
  return axios.request({
    url: '/Setting/CustomerService/GetSignTypes',
    method: 'get',
    data: {
      userId: userId
    }
  })
}
