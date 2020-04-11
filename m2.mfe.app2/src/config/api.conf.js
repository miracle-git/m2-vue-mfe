import { getDataApi } from 'm2-core'

export default getDataApi({
  getDictList: '/dict/list',
  user: {
    list: '/user/list',
    info: '/user/{uid}',
    dept: '/user/dept'
  },
  product: {
    list: '/product/list',
    info: '/product/{pid}'
  }
}, '/api')
