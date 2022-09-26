import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface instanceInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestCatchInterceptor?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseCatchInterceptor?: (error: any) => any
}

interface instanceRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptor?: instanceInterceptor<T>
  showLoading?: boolean
}

export { instanceInterceptor, instanceRequestConfig }
