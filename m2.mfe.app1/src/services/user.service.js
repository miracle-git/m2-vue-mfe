import http from 'utils/http'
import api from 'config/api.conf'

export const getUserList = (type, page) => http.get(api.user.list, { params: { type, page } })
export const getUserDetail = (id) => http.all(
  { url: api.product.info.replace(/{uid}/, id), config: { loading: true } },
  { url: api.product.dept }
)
