import Vue from 'vue'
import VueRouter from 'vue-router'

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

// export default getRouter(routes, { redirect: '/list', base: window.__POWERED_BY_QIANKUN__ ? '/pay' : '/' })

export default new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? '/app' : '/',
  routes
})
