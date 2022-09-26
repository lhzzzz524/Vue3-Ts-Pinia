import pathMapToMenu, { ICrumbs } from './pathMapToMenu'

export default function pathMapToCrumbs(userMenus: any[], path: string) {
  const crumbsArr: ICrumbs[] = []
  pathMapToMenu(userMenus, path, crumbsArr)
  return crumbsArr
}
