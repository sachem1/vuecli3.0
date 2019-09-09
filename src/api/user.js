import axios from './index'

export const getUserInfo = ({
  userId
}) => {
  return axios.request({
    url: '/Setting/CustomerService/GetSignTypes',
    method: 'get',
    data: {
      userId: userId
    }
  })
}
