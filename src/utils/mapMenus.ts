import type { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null
export default function mapMenusForRouter(userMenus: any[]) {
  const router: RouteRecordRaw[] = []
  const allRouter: RouteRecordRaw[] = []

  // 1.找出所有的路由信息信息
  const routerFile = require.context('@/router/main', true, /\.ts/)
  routerFile.keys().forEach((item) => {
    const route = require('@/router/main' + item.split('.')[1])
    allRouter.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  const recurseGetRouter = (menus: any[]) => {
    menus.forEach((item) => {
      if (item.type === 1) {
        // type为1表示有二级菜单，则继续递归查找
        recurseGetRouter(item.children)
      } else {
        const filterRoute = allRouter.find((xItem) => xItem.path === item.url)
        if (filterRoute) {
          if (!firstMenu) {
            firstMenu = menus
          }
          router.push(filterRoute)
        }
      }
    })
  }
  recurseGetRouter(userMenus)
  return router
}

export { firstMenu }
