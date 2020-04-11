import {
  Button, Checkbox, CheckboxGroup, Radio, RadioGroup, Input,
  Form, FormItem, Switch, DatePicker, TimePicker, Select, Option
} from 'element-ui'
import locale from 'element-ui/lib/locale'
import zh from 'element-ui/lib/locale/lang/zh-CN'
import en from 'element-ui/lib/locale/lang/en'

export default {
  components: [
    Button, Checkbox, CheckboxGroup, Radio, RadioGroup, Input,
    Form, FormItem, Switch, DatePicker, TimePicker, Select, Option
  ],
  locale,
  langs: {
    zh,
    en
  }
}
