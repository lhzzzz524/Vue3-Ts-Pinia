<template>
  <div>
    <el-table :data="tableList" stripe style="width: 100%">
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <span>{{ item?.prop ? scope.row[item.prop] : '' }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { IPropList } from './type'
import type { IUserTabelList } from '@/service/type'

interface IProp {
  propList: IPropList[]
  tableList: IUserTabelList[]
}

withDefaults(defineProps<IProp>(), {
  propList: () => [],
  tableList: () => []
})
</script>

<style lang="less"></style>
