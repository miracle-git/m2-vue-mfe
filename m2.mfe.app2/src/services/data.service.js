import http from 'utils/http'
import api from 'config/api.conf'

export const getDictList = () => http.get(api.getDictList, { loading: true })
