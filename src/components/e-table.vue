<template>
  <div>
    <el-table :data="tableList" stripe style="width: 100%" size="large">
      <el-table-column type="selection" width="80" align="center" />
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">{{
              item?.prop ? scope.row[item.prop] : ''
            }}</slot>
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

<style lang="less" scoped></style>
