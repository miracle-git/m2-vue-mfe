import { get } from 'utils/fetch'
import api from 'config/api.conf'

export const getDictList = () => get(api.getDictList, { loading: true })
