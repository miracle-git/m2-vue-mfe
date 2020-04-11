import { mergeLangs } from 'm2-vue'
import { el, m2 } from 'plugins'

export default mergeLangs({
  message: {
    hello: 'Hello, M2 UI',
    welcome: 'Welcome to build your first app'
  },
  lang: {
    zh: 'Chinese',
    en: 'English'
  },
  theme: {
    blue: 'Sky Blue',
    green: 'Grass Green'
  },
  button: {
    lang: 'Switch Language',
    theme: 'Switch Theme'
  }
}, el.langs.en, m2.langs.en)
