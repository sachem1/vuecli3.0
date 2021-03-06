import Home from '@/views/Home.vue'

export default [{
  path: '/',
  name: 'home',
  component: Home,
  props: route => ({ // 传入路由函数 http://localhost:8080/#/?food=banana
    food: route.query.food
  })
},
{
  path: '/test',
  name: 'test',
  component: () => import('@/views/test.vue')
},
{
  path: '/store',
  name: 'store',
  component: () => import('@/views/store.vue')
},
{
  path: '/argu/:name',
  name: 'argu',
  component: () => import('@/views/argu'),
  props: true
},
{
  path: '/count-to',
  name: 'count_to',
  meta: {
    title: 'count_to'
  },
  component: () => import('@/views/count-to.vue')
},
{
  path: '/splitPane',
  name: 'splitPane',
  component: () => import('@/views/split-pane.vue')
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login.vue')
},
{
  path: '/user',
  name: 'user',
  component: () => import('@/views/user.vue')
},
{
  path: '/parent',
  name: 'parent',
  component: () => import('@/views/parent'),
  children: [{
    path: 'child',
    component: () => import('@/views/child.vue')
  }],
  props: { // 路由属性
    food: 'banana'
  }
},
{
  path: '/named_view',
  components: {
    default: () => import('@/views/child.vue'),
    email: () => import('@/views/email'),
    phone: () => import('@/views/phone')
  }
},
{
  path: '/main',
  redirect: {
    name: 'home' // 重定向路由
  }
},
{
  path: '/grid',
  name: 'grid',
  component: () => import('@/views/Iview/grid.vue')
},
{
  path: '/main',
  redirect: to => {
    return {
      name: 'about' //
    }
  }
},
{
  path: '/',
  alias: '/home_page', // 路由别名
  name: 'home',
  component: Home
},
{
  path: '/login',
  name: 'login',
  meta: {
    title: '登录页'
  },
  component: () => import('@/views/login.vue')
},

{
  path: '/about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // 打包的时候标注js
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
}, {
  path: '*',
  component: () => import('@/views/errors/error_404.vue')
}
]
