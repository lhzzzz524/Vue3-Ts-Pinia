import Instance from './request'
import LocalCache from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './request/config'

const instance = new Instance({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestInterceptor: (config) => {
      const token = LocalCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default instance
