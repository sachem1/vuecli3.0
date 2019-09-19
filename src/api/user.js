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

export const login = ({
  userName,
  password
}) => {
  console.log(userName)
  axios.request({
    url: '/api/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}

export const AddUser = ({
  userName,
  password,
  phone,
  address
}) => {
  axios.request({
    url: '/api/create',
    method: 'post',
    data: {
      userName,
      password,
      phone,
      address
    }
  })
}

export const DeleteUser = ({
  userName
}) => {
  axios.request({
    url: '/api/delete',
    method: 'post',
    data: {
      userName
    }
  })
}
