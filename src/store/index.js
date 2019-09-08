import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import getters from './getters'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  // 严格模式,如果直接赋值就会报错,否则不会报错,一般生产环境不需要报错
  strict: process.env.NODE_ENV === 'development', // true,
  state,
  mutations,
  actions,
  modules: {
    user
  },
  getters,
  plugins: [
    saveInLocal
  ]
})
