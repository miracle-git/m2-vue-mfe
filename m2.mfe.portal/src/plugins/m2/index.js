import { RouterView, SvgIcon, Link, HeaderWrapper, Header, Sidebar, MainWrapper, Main, Loading } from 'm2-ui'
import locale from 'm2-ui/lib/locale'
import zh from 'm2-ui/lib/locale/lang/zh-CN'
import en from 'm2-ui/lib/locale/lang/en-US'

export default {
  components: [
    RouterView,
    SvgIcon,
    Link,
    HeaderWrapper,
    Header,
    Sidebar,
    MainWrapper,
    Main
  ],
  install(Vue) {
    Vue.prototype.$m2 = {}
    Vue.prototype.$m2.loading = Loading
    Vue.prototype.$m2.loading.hide = Loading.hide
  },
  locale,
  langs: {
    zh,
    en
  }
}
