import { mergeLangs } from 'm2-vue'
import { el, m2 } from 'plugins'

export default mergeLangs({
  title: {
    list: 'App2 List Page',
    detail: 'App2 Detail Page'
  }
}, el.langs.en, m2.langs.en)
