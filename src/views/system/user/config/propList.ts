import type { IPropList } from '@/components/type'

const propList: IPropList[] = [
  { prop: 'name', label: '用户名', minWidth: '120' },
  { prop: 'realname', label: '真实性名', minWidth: '100' },
  { prop: 'cellphone', label: '手机号码', minWidth: '100' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
  { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' },
  { label: '操作', minWidth: '120', slotName: 'handle' }
]

export default propList
