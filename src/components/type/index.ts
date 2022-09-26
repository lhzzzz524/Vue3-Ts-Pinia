interface Ioption {
  value: string | number
  label: string
}

export interface IFormItem {
  field: string
  type: string
  label: string
  width?: string
  labelWidth?: string
  placeholder?: string
  rules?: any[]
  option?: Ioption[]
  otherOption?: any
}

export interface IPropList {
  prop?: string
  label: string
  minWidth: string
  slotName?: string
}
