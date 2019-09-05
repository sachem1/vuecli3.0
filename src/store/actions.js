import {
  getAppName
} from '@/api/app'

const actions = {
  // async updateAppName ({commit}){
  //   console.log({commit})
  //   try{
  //     const {info:{appName}}=await getAppName()
  //   }
  // }
  // 第一种写法
  // updateAppName1 (paramObj) {
  //   const commit = paramObj.commit
  // },
  updateAppName ({
    commit
  }) {
    getAppName().then(res => {
      console.log(res)
      commit('SET_APP_NAME', res.info.appName)
    }).catch(err => {
      console.log(err)
    })
  }
}
export default actions
