import { getI18nLocale } from 'm2-vue'
import { el, m2 } from 'plugins'
import lang from './lang'

export default getI18nLocale(lang, el.locale, m2.locale)
