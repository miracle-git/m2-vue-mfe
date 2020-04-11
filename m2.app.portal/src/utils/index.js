import { getEnvConfig } from 'm2-core'
import config from 'config/env.conf'

export const app = window.__context__
export const mfe = window.__mfe__
export const conf = (key = '') => getEnvConfig(config, key)
