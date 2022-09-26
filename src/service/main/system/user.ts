import instance from '../../'
import { IDataType, IUserTableRes, IUserTabelData } from '../../type'

export function getUserTable(data: IUserTabelData) {
  return instance.request<IDataType<IUserTableRes>>({
    url: '/users/list',
    method: 'POST',
    data
  })
}
