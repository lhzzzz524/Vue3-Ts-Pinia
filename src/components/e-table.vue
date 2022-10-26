<template>
  <div>
    <div class="header">
      <div class="header-title">
        <slot name="header"></slot>
      </div>
      <div class="header-button">
        <slot name="button"></slot>
      </div>
    </div>
    <el-table
      :data="tableList"
      stripe
      size="large"
      class="table table-fixed"
      :style="{ height: `calc(100vh - 270px - ${LocalCache.getCache('formHeight')}px + 100px)` }"
    >
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
    <div class="pagination">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPropList } from './type'
import LocalCache from '@/utils/cache'

interface IProp {
  propList: IPropList[]
  tableList: any[]
}

withDefaults(defineProps<IProp>(), {
  propList: () => [],
  tableList: () => []
})
</script>

<style lang="less" scoped>
.header {
  position: sticky;
  top: 10px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  &-title {
    text-align: left;
    font-size: 16px;
    font-weight: bold;
  }
}

/deep/ .table {
  width: 100%;
  overflow: auto;
  .el-table__body-wrapper {
    top: 48px;
  }
  .el-table__inner-wrapper::before {
    height: 0;
  }
}

.pagination {
  /deep/ .el-pagination {
    justify-content: flex-end;
  }
  padding-top: 20px;
}
</style>
