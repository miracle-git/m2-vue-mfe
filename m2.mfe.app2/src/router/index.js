import Vue from 'vue'
import VueRouter from 'vue-router'
// import { base } from 'utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/form'
  },
  {
    path: '/form',
    component: () => import('views/form')
  }
]

export default new VueRouter({
  mode: 'history',
  // base: window.__POWERED_BY_QIANKUN__ ? base : '/',
  base: window.__POWERED_BY_QIANKUN__ ? '/app2' : '/',
  routes
})
