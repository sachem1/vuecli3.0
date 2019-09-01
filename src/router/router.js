import Home from '@/views/Home.vue'

export default [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/test',
  name: 'test',
  component: () => import('@/views/test.vue')
},
{
  path: '/argu/:name',
  name: 'argu',
  component: () => import('@/views/argu')
},
{
  path: '/parent',
  name: 'parent',
  component: () => import('@/views/parent'),
  children: [{
    path: 'child',
    component: () => import('@/views/child.vue')
  }]
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
  path: '/about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // 打包的时候标注js
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
}
]
