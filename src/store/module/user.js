import {
  login,AddUser,DeleteUser
} from '@/api/user'
import {
  promised
} from 'q'

const state = {
  userName: 'qjiesen'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutatioins = {
  //
}
const actions = {
  //
  login1({
    commit
  }, {
    userName,
    password
  }) {
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      }).then(res => {
        if (res.code === 0 && res.data) {
          console.log('token:' + res.data.token)
        } else {
          console.log('登录错误!')
        }
      }).catch(error => {
        console.log('登录出现异常')
        reject(error)
      })
    })
  },
  login({
    commit
  }, {
    userName,
    password
  }) {
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      }).then(res => {
        if (res.code === 200 && res.data.token) {
          // setToken(res.data.token)
          resolve()
        } else {
          reject(new Error('错误'))
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  addUser ({
    commit
  }, {
    userName,
    password,
    phone,
    address
  }) {
    return new Promise((resolve, reject) => {
      AddUser({
        userName,
        password,
        phone,
        address
      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    })
  },
  deleteUser ({
    commit
  }, {
    userName
  }) {
    return new Promise((resolve, reject) => {
      DeleteUser({
        userName
      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    })
  }
}
export default {
  namespced: true,
  state,
  mutatioins,
  actions,
  getters
}
