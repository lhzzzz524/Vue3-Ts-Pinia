import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/cache'
import { getUserMenu } from '@/service/login'

import mapMenusForRouter from '@/utils/mapMenus'
import { firstMenu } from '@/utils/mapMenus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    // name: '404',
    component: () => import('@/views/error/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

let hasRoles = true // 是否加载过动态路由

router.beforeEach(async (to) => {
  if (to.path != '/login') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return '/login'
    } else {
      if (hasRoles) {
        const userInfoId = JSON.parse(LocalCache.getCache('userInfo').id)
        const userMenusRes = await getUserMenu(userInfoId)

        const routers = mapMenusForRouter(userMenusRes.data)

        routers.forEach((item) => {
          router.addRoute('main', item)
        })
        hasRoles = false
        router.push({ ...to, replace: true })
      }
    }
  }
  if (to.path === '/main' || to.path === '/main/') {
    return firstMenu[0].url
  }
})

export default router
