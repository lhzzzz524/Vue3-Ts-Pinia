export interface ICrumbs {
  name: string
}

export default function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  crumbsArr?: ICrumbs[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        crumbsArr?.push(menu) // 匹配路由的上一级
        crumbsArr?.push(findMenu) // 当前的路由信息
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
