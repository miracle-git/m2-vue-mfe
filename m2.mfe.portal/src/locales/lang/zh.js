import { mergeLangs } from 'm2-vue'
import { el, m2 } from 'plugins'

export default mergeLangs({
  default: true, // 配置默认语言
  message: {
    hello: '你好, M2 UI',
    welcome: '开始创建你的第一个应用吧！'
  },
  lang: {
    zh: '中文',
    en: '英文'
  },
  theme: {
    blue: '天际蓝',
    green: '青草绿'
  },
  button: {
    lang: '切换语言',
    theme: '切换主题'
  }
}, el.langs.zh, m2.langs.zh)
