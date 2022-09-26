import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { instanceInterceptor, instanceRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

class Instance {
  instance: AxiosInstance
  interceptor?: instanceInterceptor
  loading?: LoadingInstance
  showLoading = true

  constructor(config: instanceRequestConfig) {
    this.instance = axios.create(config)
    this.interceptor = config.interceptor

    // 单个实例独有的拦截器
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestCatchInterceptor
    )
    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseCatchInterceptor
    )

    // 每个实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            background: 'rgba(255, 255, 255, .6)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: instanceRequestConfig<T>): Promise<T> {
    // 单个请求可传的单独的拦截器
    if (config.interceptor?.requestInterceptor) {
      config = config.interceptor.requestInterceptor(config)
    }
    if (config.showLoading === false) {
      this.showLoading = false
    }

    return this.instance
      .request<any, T>(config)
      .then((res) => {
        if (config.interceptor?.responseInterceptor) {
          res = config.interceptor.responseInterceptor(res)
        }
        this.showLoading = true // loading重置
        return res
      })
      .catch((err) => {
        this.showLoading = true
        return err
      })
  }
}

export default Instance
