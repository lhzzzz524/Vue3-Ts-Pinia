<template>
  <div class="category">
    <el-card class="box-card">
      <EForm></EForm>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import EForm from '@/components/e-form.vue'
import type { IFormItem } from '@/components/type'
</script>
<style lang="less">
.el-form-item {
  margin-right: 70px;
}
</style>
