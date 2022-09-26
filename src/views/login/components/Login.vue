<template>
  <div class="login-panel">
    <h1 class="title">你懂个锤子VUE</h1>
    <el-tabs type="border-card" stretch v-model="defaultName">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <Account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <Phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="rememberLogin">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLogin">立即登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import Account from './Account.vue'
import Phone from './Phone.vue'
import localCache from '@/utils/cache'
import { ref } from 'vue'

const defaultName = ref('account')
const rememberLogin = ref(localCache.getCache('isRememberLogin') ?? false)
const accountRef = ref<InstanceType<typeof Account>>()

const handleLogin = () => {
  accountRef.value?.loginAction(rememberLogin.value)
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  margin-bottom: 150px;

  .title {
    text-align: center;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
