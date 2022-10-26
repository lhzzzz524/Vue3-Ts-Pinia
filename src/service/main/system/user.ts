import instance from '../../'
import { IDataType, IUserTableRes, IUserTabelData } from '../../type'

export function getTable(data: IUserTabelData, urlStr: string) {
  return instance.request<IDataType<IUserTableRes>>({
    url: `/${urlStr}/list`,
    method: 'POST',
    data
  })
}
