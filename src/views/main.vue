<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="210px">
        <NenvMenu />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NenvHeader :crumbs="crumbs" />
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NenvMenu from '@/components/main/NenvMenu.vue'
import NenvHeader from '@/components/main/NenvHeader.vue'

import pathMapToCrumbs from '@/utils/pathMapToCrumbs'
import LocalCache from '@/utils/cache'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const crumbs = computed(() => {
  const route = useRoute()
  return pathMapToCrumbs(LocalCache.getCache('userMenus'), route.path)
})
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);

  .page-info {
    background-color: #ffffff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none;
  /* firefox */
  -ms-overflow-style: none;

  /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
