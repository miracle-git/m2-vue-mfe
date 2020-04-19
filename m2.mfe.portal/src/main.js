import { registerApp, startApp, subscribe } from 'm2-mfe'
import renderApp from './render'
import getApps from './apps'

// 订阅消息
subscribe()
// 渲染主框架应用
renderApp()
// 注册子应用并启动微服务
getApps().then(apps => registerApp(apps) && startApp())
