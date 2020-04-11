// import { getRouter } from 'm2-vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('views/home')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
