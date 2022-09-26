<template>
  <div class="user">
    <el-card>
      <EForm :formItem="formItem" v-model:formModel="formModel">
        <template #searchButtons>
          <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
          <el-button type="primary" plain :icon="RefreshRight">重置</el-button>
        </template>
      </EForm>
    </el-card>
    <div class="user-table">
      <el-card>
        <ETable :propList="propList" :tableList="tableList"></ETable>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import EForm from '@/components/e-form.vue'
import ETable from '@/components/e-table.vue'

import type { IFormItem, IPropList } from '@/components/type'
import { Search, RefreshRight } from '@element-plus/icons-vue'
import { reactive } from 'vue'

import useTable from '@/hooks/system/user/useTable'

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

const formModel = reactive<any>({})
// 收集双向绑定字段
for (const i of formItem) {
  formModel[i.field] = ''
}

const propList: IPropList[] = [
  { prop: 'name', label: '用户名', minWidth: '100' },
  { prop: 'realname', label: '真实性名', minWidth: '100' },
  { prop: 'cellphone', label: '手机号码', minWidth: '100' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
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
    slotName: 'operation'
  }
]

// 表格数据渲染
const { tableList } = useTable()

const search = () => {
  console.log(formModel)
}
</script>

<style lang="less">
.el-form-item {
  margin-right: 70px;
}
.user {
  &-table {
    margin-top: 20px;
  }
}
</style>
