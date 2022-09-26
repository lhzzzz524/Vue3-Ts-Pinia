<template>
  <div class="header">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="item in crumbs" :key="item.path">{{
        item.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import type { ICrumbs } from '@/utils/pathMapToMenu'
defineProps({
  crumbs: {
    type: Array as PropType<ICrumbs[]>,
    default: () => []
  }
})
</script>
<style lang="less"></style>
