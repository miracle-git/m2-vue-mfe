import { get, all } from 'utils/fetch'
import api from 'config/api.conf'

export const getUserList = (type, page) => get(api.user.list, { params: { type, page } })
export const getUserDetail = (id) => all(
  { url: api.product.info.replace(/{uid}/, id), config: { loading: true } },
  { url: api.product.dept }
)
