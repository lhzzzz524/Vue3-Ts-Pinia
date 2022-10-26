export interface IDataType<T = any> {
  code: number
  data: T
}

export interface ILoginRes {
  id: number
  name: string
  token: string
}

export interface IUserTableRes {
  list: any[]
  totalCount: number
}

export interface IUserTabelData {
  offset: number
  size: number
}
