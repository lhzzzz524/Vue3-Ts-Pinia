export interface IDataType<T = any> {
  code: number
  data: T
}

export interface ILoginRes {
  id: number
  name: string
  token: string
}

export interface IUserTabelList {
  id: number
  name: string
  realname: string
  cellphone: string
  enable: number
  departmentId: number
  roleId: number
  createAt: Date
  updateAt: Date
}

export interface IUserTableRes {
  list: IUserTabelList[]
  totalCount: number
}

export interface IUserTabelData {
  offset: number
  size: number
}
