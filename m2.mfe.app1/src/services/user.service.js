import { app } from 'utils'
import api from 'config/api.conf'

export const getUserList = (type, page) => app.$http.get(api.user.list, { params: { type, page } })
export const getUserDetail = (id) => app.$http.all(
  { url: api.product.info.replace(/{uid}/, id), config: { loading: true } },
  { url: api.product.dept }
)
