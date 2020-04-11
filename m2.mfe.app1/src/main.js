import './public-path'
// 应用配置
import { lifecycle } from 'm2-vue'
import App from './views/app'
import router from './router'
import store from './store'
import env from './config/env.conf'
import i18n from './locales/i18n'
import plugins from './plugins'

const { bootstrap, mount, unmount } = lifecycle(App, { router, store, env, i18n, plugins, data: {} })

// 挂载应用(非乾坤环境)
window.__POWERED_BY_QIANKUN__ || mount()

export {
  bootstrap,
  mount,
  unmount
}
