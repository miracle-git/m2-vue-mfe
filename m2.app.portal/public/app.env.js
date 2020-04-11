// 提供基于各自业务领域为框架所需的环境配置
window.__mfe__ = {
  // 业务数据下发的api
  apis: './apps.conf.json',
  // 可以对象形式传多个下发的api
  // apis: { apps: './apps.conf.json' },
  // 验权的自定义函数(根据用户权限点配置和应用配置做匹配，但系统提供默认的验证规则)
  auth: (data) => data.apps.filter(item => data.user.perms.includes(item.perm))
}
