// 应用配置
import { render } from 'm2-vue'
import { renderApp } from 'm2-mfe'
import App from './views/app'
import router from './router'
import store from './store'
import env from './config/env.conf'
import i18n from './locales/i18n'
import plugins from './plugins'

export default function({ appContent, loading } = {}) {
  renderApp(render, App, {
    el: '#container',
    router,
    store,
    env,
    i18n,
    plugins,
    appContent,
    loading
  })
}
