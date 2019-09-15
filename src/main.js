import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'
require('./mock')

if (process.env.NODE_ENV !== 'production') require('./mock')

// 阻止你显示显示生产模式的消息
Vue.config.productionTip = false
// 将Bus注册到根实例里：使用Vue.prototype属性在原型对象上添加$bus，并将Bus赋值给$bus，这样在
// new Vue实例里就注入了Bus
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  // render: h => h(App)
  render: h => h('div', [
    h('span', '123')
  ])
}).$mount('#app')
