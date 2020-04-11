// 应用配置
import { renderApp } from 'm2-vue'
import App from './views/app'
import router from './router'
import store from './store'
import env from './config/env.conf'
import i18n from './locales/i18n'
import plugins from './plugins'

export default function({ appContent, loading } = {}) {
  renderApp(App, {
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
