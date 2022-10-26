<template>
  <div class="role">
    <el-card style="margin-bottom: 20px">
      <EForm :formItem="formItem" v-model:formModel="formModel">
        <template #searchButtons>
          <el-button type="primary" :icon="Search">搜索</el-button>
          <el-button type="primary" :icon="RefreshRight" plain>重置</el-button>
        </template>
      </EForm>
    </el-card>
    <el-card>
      <ETable :propList="propList" :tableList="tableList">
        <template #header>角色列表</template>
        <template #button>
          <el-button type="primary">增加</el-button>
        </template>
        <template #createAt="{ row }">
          <span>{{ dayjs(row.createAt).format('YYYY-MM-DD HH:hh:mm') }}</span>
        </template>
        <template #updateAt="{ row }">
          <span>{{ dayjs(row.updateAt).format('YYYY-MM-DD HH:hh:mm') }}</span>
        </template>
        <template #handle>
          <el-button type="primary" link>编辑</el-button>
          <el-button type="primary" link>删除</el-button>
        </template>
        <template #pagination>
          <el-pagination
            v-model:currentPage="currentPage4"
            v-model:page-size="pageSize4"
            :page-sizes="[100, 200, 300, 400]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          />
        </template>
      </ETable>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import ETable from '@/components/e-table.vue'
import EForm from '@/components/e-form.vue'
import propList from './config/propList'
import { formItem, model } from './config/formItem'

import { Search, RefreshRight } from '@element-plus/icons-vue'
import useTable from '@/hooks/useTable'
import { reactive } from 'vue'
import dayjs from 'dayjs'

// 绑定form字段
const formModel = reactive(model)

// 表格数据渲染
const { tableList } = useTable('role')
console.log(tableList)
</script>
<style lang="less" scoped></style>
