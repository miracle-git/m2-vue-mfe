import { app } from 'utils'
import api from 'config/api.conf'

export const getDictList = () => app.$http.get(api.getDictList, { loading: true })
