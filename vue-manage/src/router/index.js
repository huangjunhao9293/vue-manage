import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'//重定项
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }, {
    path: '/home',
    name: '/home',
    component: () => import('../views/layout/home.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
