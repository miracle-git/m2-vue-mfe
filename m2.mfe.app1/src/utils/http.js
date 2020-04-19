import { DataHttp } from 'm2-core'
import { app, env } from './index'

export default DataHttp.getInstance({
  // 当前应用上下文
  app,

  // 当前环境配置
  env

  // 当前请求实例(可使用DataFetch构建，也可配置详细参数，参考axios配置)
  // axios: DataFetch.create({ headers, timeout, ... }),

  // 数据映射(对返回数据字段映射)
  // map: { status: 'code', result: 'data', message: 'msg' },

  // 当前加载器函数(覆盖默认加载器，loading当前请求是否启动加载器，app应用上下文)
  // spinner(loading, app) {},

  // 数据校验函数(对返回数据的权限校验，返回boolean)
  // check(res) {},

  // 数据处理函数(对返回数据的处理函数, 返回处理结果)
  // handle(res) {}

  // 全局错误处理函数(err是包含title,message的对象)
  // error(err) {}
})
