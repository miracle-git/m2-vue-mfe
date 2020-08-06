import Vue from 'vue'
import VueRouter from 'vue-router'
import { base } from 'utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/list1'
  },
  {
    path: '/list1',
    component: () => import('views/list1')
  },
  {
    path: '/list2',
    component: () => import('views/list2')
  },
  {
    path: '/:id/detail',
    component: () => import('views/detail')
  }
]

export default new VueRouter({
  mode: 'history',
  base,
  routes
})
