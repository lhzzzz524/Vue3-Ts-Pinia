import type { IFormItem } from '@/components/type'

const formItem: IFormItem[] = [
  {
    field: 'id',
    type: 'input',
    label: 'id',
    labelWidth: '70',
    placeholder: '请输入id'
  },
  {
    field: 'name',
    type: 'input',
    label: '用户名',
    labelWidth: '70',
    placeholder: '请输入用户名'
  },
  {
    field: 'realName',
    type: 'input',
    label: '真实姓名',
    labelWidth: '70',
    placeholder: '请输入真实姓名'
  },
  {
    field: 'cellPhone',
    type: 'input',
    label: '手机号码',
    labelWidth: '70',
    placeholder: '请输入手机号码'
  },
  {
    field: 'enable',
    type: 'select',
    width: '255',
    labelWidth: '70',
    label: '状态',
    placeholder: '请进行选择',
    option: [
      {
        value: 1,
        label: '停用'
      },
      {
        value: 0,
        label: '启用'
      }
    ]
  },
  {
    field: 'createAt',
    type: 'dataPicker',
    labelWidth: '70',
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
