import './public-path'
// 应用配置
import Vue from 'vue'
import { render } from 'm2-vue'
import { lifecycle } from 'm2-mfe'
import App from './views/app'
import router from './router'
import store from './store'
import env from './config/env.conf'
import i18n from './locales/i18n'
import plugins from './plugins'
import { qk } from 'utils'

const { bootstrap, mount, unmount } = lifecycle(Vue, render, App, { router, store, env, i18n, plugins, data: {} })

// 挂载应用(非乾坤环境)
qk || mount()

export {
  bootstrap,
  mount,
  unmount
}
