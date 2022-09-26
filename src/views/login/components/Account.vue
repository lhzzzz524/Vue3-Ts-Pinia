<template>
  <div class="login-account">
    <el-form label-width="70px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { rules } from '../config/account-config'
import { loginStore } from '@/store/modules/login'

import localCache from '@/utils/cache'

import type { FormInstance } from 'element-plus'

const store = loginStore()
const formRef = ref<FormInstance>()
const account = ref({
  name: localCache.getCache('name'),
  password: localCache.getCache('password')
})

const loginAction = (isRememberLogin: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 是否记住密码
      if (isRememberLogin) {
        localCache.setCache('name', account.value.name)
        localCache.setCache('password', account.value.password)
        localCache.setCache('isRememberLogin', isRememberLogin)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
        localCache.deleteCache('isRememberLogin')
      }
    }
    store.accountLogin({ ...account.value })
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
