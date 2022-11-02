<template>
  <div class="user">
    <el-card>
      <EForm :formItem="formItem" v-model:formModel="formModel">
        <template #searchButtons>
          <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
          <el-button type="primary" :icon="RefreshRight" plain @click="search(true)"
            >重置</el-button
          >
        </template>
      </EForm>
    </el-card>
    <div class="user-table">
      <el-card>
        <ETable :propList="propList" :tableList="tableList">
          <template #header>用户列表</template>
          <template #button>
            <el-button type="primary">增加</el-button>
          </template>
          <template #status="{ row }">
            <el-tag class="ml-2" :type="row.enable ? 'success' : 'warning'">
              <span>{{ row.enable ? '启用' : '禁用' }}</span>
            </el-tag>
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
  </div>
</template>

<script setup lang="ts">
import { formItem, model } from './config/formItem'
import propList from './config/propList'
import EForm from '@/components/e-form.vue'
import ETable from '@/components/e-table.vue'

import { Search, RefreshRight } from '@element-plus/icons-vue'
import { getTable } from '@/service/main/system/user'
import { ref } from 'vue'
import dayjs from 'dayjs'
import useTable from '@/hooks/useTable'

// 绑定form字段
const formModel = ref<any>({ ...model })

// 表格渲染
const { tableList } = useTable('users')

// 搜索
const search = async (isClear = false) => {
  if (typeof isClear === 'boolean' && isClear) {
    formModel.value = { ...model }
  }

  const res = await getTable({ offset: 0, size: 10, ...formModel.value }, 'users')
  tableList.value = res.data?.list as any[]
}

const currentPage4 = ref(4)
const pageSize4 = ref(100)
</script>

<style lang="less">
.el-form-item {
  margin-right: 70px;
}
.user {
  &-table {
    margin-top: 20px;
  }
  .handleBtn {
    cursor: pointer;
    color: #409eff;
  }
}
</style>
