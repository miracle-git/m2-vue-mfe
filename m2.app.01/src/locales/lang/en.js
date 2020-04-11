import { mergeLangs } from 'm2-vue'
import { el, m2 } from 'plugins'

export default mergeLangs({
  title: {
    list: 'App1 List Page',
    detail: 'App1 Detail Page'
  }
}, el.langs.en, m2.langs.en)
