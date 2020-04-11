import { mergeLangs } from 'm2-vue'
import { el, m2 } from 'plugins'

export default mergeLangs({
  default: true // 配置默认语言
}, el.langs.zh, m2.langs.zh)
