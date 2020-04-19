// 定义传入子应用的数据
import { pagers, checkAppEnv, filterApps } from 'm2-vue'
import render from './render'
import http from './utils/http'
import { mfe, conf } from './utils'
import store from './store'

// 首先检测环境配置
checkAppEnv(mfe)

// 导入应用间通信介质
const props = {
  data: store.getters,         // 从主应用仓库读出的数据
  utils: {                     // 从主应用读出的工具类库
    $http: http,
    conf
  },
  emits: {},                   // 从主应用下发emit函数来收集子应用反馈
  pagers                       // 从主应用下发应用间通信呼机
}

export default () => new Promise(resolve => {
  http.proxy.get(mfe.apis, { loading: true }).then(res => {
    // 过滤满足权限要求的子项目
    const apps = filterApps(mfe, res, (item) => ({
      ...item,
      render,
      props
    }))
    resolve(apps)
  })
})
