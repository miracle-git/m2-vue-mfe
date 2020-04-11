import { mergeLangs } from 'm2-vue'
import { el, m2 } from 'plugins'

export default mergeLangs({
  title: {
    list: '应用2-列表页面',
    detail: '应用2-详情页面'
  }
}, el.langs.en, m2.langs.en)
