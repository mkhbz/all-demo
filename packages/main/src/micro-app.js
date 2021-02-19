const routers = [
  // vue的应用
  {
    name: 'vue',
    path: '/vue',
    entry: 'http://localhost:8081/#/',
    activeRule: '/#/vue'
  },
]
//微应用的配置
export const microApps = routers.map(item => {
  return {
    ...item,
    container: '#sub', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
    }
  }
})

// 导出微应用的生命周期

export const config = {}