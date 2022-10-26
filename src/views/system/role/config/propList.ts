import type { IPropList } from '@/components/type'

const propList: IPropList[] = [
  {
    prop: 'name',
    label: '名称',
    minWidth: '120'
  },
  {
    prop: 'intro',
    label: '职位',
    minWidth: '120'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '250',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '250',
    slotName: 'updateAt'
  },
  {
    label: '操作',
    minWidth: '120',
    slotName: 'handle'
  }
]

export default propList
