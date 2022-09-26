import { defineStore } from 'pinia'
import LocalCache from '@/utils/cache'
import { getAccountLogin, getUserInfo, getUserMenu } from '@/service/login'
import mapMenusForRouter from '@/utils/mapMenus'

import type { ILoginState, IAccount } from './type'
import router from '@/router'

export const loginStore = defineStore('loginId', {
  state: (): ILoginState => {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  actions: {
    async accountLogin(account: IAccount) {
      // 登录逻辑
      const loginRes = await getAccountLogin(account)
      const { id, token } = loginRes.data
      this.token = token
      LocalCache.setCache('token', token)

      // 获取用户信息
      const userInfoRes = await getUserInfo(id)
      this.userInfo = userInfoRes.data
      LocalCache.setCache('userInfo', this.userInfo)

      // 获取用户菜单
      const userMenusRes = await getUserMenu(this.userInfo.id)
      this.userMenus = userMenusRes.data

      // 动态添加路由
      const routers = mapMenusForRouter(this.userMenus)
      routers.forEach((item) => {
        router.addRoute('main', item)
      })

      LocalCache.setCache('userMenus', this.userMenus)

      router.push('/main')
    },
    refreshStore() {
      const token = LocalCache.getCache('token')
      const userInfo = LocalCache.getCache('userInfo')
      const userMenus = LocalCache.getCache('userMenus')
      if (token) {
        this.token = LocalCache.getCache('token')
      }
      if (userInfo) {
        this.userInfo = LocalCache.getCache('userInfo')
      }
      if (userMenus) {
        this.userMenus = LocalCache.getCache('userMenus')
      }
    }
  }
})
