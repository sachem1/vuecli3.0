// 对state里面的属性进行值的修改
const mutations = {
  // params 如果只有一个值就是值，如果是多个就是对象
  SET_APP_NAME (state, params) {
    state.appName = params
  }
}

export default mutations
