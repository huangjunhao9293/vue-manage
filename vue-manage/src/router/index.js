import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login'), hidden: true },
  // {path: '/cmp/consumer', component: () => import('@/views/cmp/consumer'), hidden: true},
  {
    path: '',
    redirect: '/login',
  },
  {
    path: '/home',
    component: () => import('@/views/layout/home')

  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
