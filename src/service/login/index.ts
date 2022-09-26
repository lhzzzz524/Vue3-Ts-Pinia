import instance from '../'
import type { IAccount } from '@/store/modules/login/type'
import { ILoginRes, IDataType } from '../type'

export function getAccountLogin(data: IAccount) {
  return instance.request<IDataType<ILoginRes>>({
    url: '/login',
    method: 'POST',
    data
  })
}

export function getUserInfo(id: number) {
  return instance.request<IDataType>({
    url: `/users/${id}`,
    method: 'GET',
    showLoading: false
  })
}

export function getUserMenu(id: number) {
  return instance.request<IDataType>({
    url: `/role/${id}/menu`,
    method: 'GET',
    showLoading: false
  })
}
