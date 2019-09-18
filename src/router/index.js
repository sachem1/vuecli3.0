import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  routes
})

// export default new Router({
//   // mode: 'history', 有hash 模式和history ,history 模式,路径里面没有#,默认hash模式
//   routes
// })

const HAS_LOGINED = true

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else {
      next({
        name: 'login'
      })
    }
  } else {
    // if (HAS_LOGINED) {
    //   next({
    //     name: 'home'
    //   })
    // } else next()
    next()
  }
})

// 路由后置勾子
router.afterEach((to, from) => {
  // logining=false
})

// router.beforeResolve(() => {

// })

export default router
