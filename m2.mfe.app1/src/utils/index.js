import config from 'config/env.conf'
import { name } from '../../package'

export const app = window['__context__']
export const qk = window['__POWERED_BY_QIANKUN__']
export const mfe = window['__mfe__']
export const base = mfe ? mfe[name] : '/'
export const env = config
