import Vue from 'vue'
import VueRouter from 'vue-router'
// import { base } from 'utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/list'
  },
  {
    path: '/list',
    component: () => import('views/list')
  },
  {
    path: '/:id/detail',
    component: () => import('views/detail')
  }
]

export default new VueRouter({
  mode: 'history',
  // base: window.__POWERED_BY_QIANKUN__ ? base : '/',
  base: window.__POWERED_BY_QIANKUN__ ? '/app1' : '/',
  routes
})
