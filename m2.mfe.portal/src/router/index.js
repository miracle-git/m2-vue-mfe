import { getRouter } from 'm2-vue'

const routes = [
  {
    path: '/',
    component: () => import('views/home')
  }
]

export default getRouter(routes)
