import { RouterView } from 'm2-ui'
import locale from 'm2-ui/lib/locale'
import zh from 'm2-ui/lib/locale/lang/zh-CN'
import en from 'm2-ui/lib/locale/lang/en-US'

export default {
  components: [
    RouterView
  ],
  locale,
  langs: {
    zh,
    en
  }
}
