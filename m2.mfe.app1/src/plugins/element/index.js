import { Button, Table, TableColumn } from 'element-ui'
import locale from 'element-ui/lib/locale'
import zh from 'element-ui/lib/locale/lang/zh-CN'
import en from 'element-ui/lib/locale/lang/en'

export default {
  components: [
    Button, Table, TableColumn
  ],
  locale,
  langs: {
    zh,
    en
  }
}
