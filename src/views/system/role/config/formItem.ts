import type { IFormItem } from '@/components/type'

const formItem: IFormItem[] = [
  {
    field: 'name',
    type: 'input',
    label: '角色名称',
    labelWidth: '120',
    placeholder: '请输入角色名称'
  },
  {
    field: 'permission',
    type: 'input',
    label: '权限介绍',
    labelWidth: '120',
    placeholder: '请输入'
  },
  {
    field: 'createAt',
    type: 'dataPicker',
    labelWidth: '120',
    label: '创建日期',
    otherOption: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange'
    }
  }
]

const model: any = {}
for (const i of formItem) {
  model[i.field] = ''
}

export { formItem, model }
