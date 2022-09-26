<template>
  <div class="navMenu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">你懂个锤子Vue </span>
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical"
      unique-opened
      text-color="#b7bdc3"
    >
      <!-- 一级菜单 -->
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="`${item.id}`">
            <!-- 一级菜单标题 -->
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单 -->
            <template v-for="childItem in item.children" :key="childItem.id">
              <el-menu-item :index="`${childItem.id}`" @click="handleMenu(childItem)">{{
                childItem.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { loginStore } from '@/store/modules/login'
import pathMapToMenu from '@/utils/pathMapToMenu'

const store = loginStore()
const router = useRouter()
const route = useRoute()

const userMenus = computed(() => store.userMenus)
const currentPath = pathMapToMenu(userMenus.value, route.path) // 匹配当前路由与路由接口数据相同的路由信息

let defaultActive = currentPath.id + ''

const handleMenu = (item: any) => {
  router.push({
    path: item.url
  })
}
</script>

<style lang="less">
.navMenu {
  height: 100%;

  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    padding: 5px 10px;

    img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: rgb(229, 229, 229);
    }
  }
}

.el-menu {
  background-color: #001529;
  border-right: none;
}

// 目录
.el-sub-menu {
  background-color: #001529;

  // 二级菜单 ( 默认背景 )
  .el-menu-item {
    background-color: #0c2135;
  }

  .el-sub-menu__title {
    span {
      margin-left: 20px;
    }

    &:hover {
      background-color: #001529;

      span {
        color: #fff;
      }
    }
  }
}

.el-menu-item-group__title {
  padding: 0;
}

// hover 高亮
.el-menu-item:hover {
  color: #fff; // 菜单
}

.el-menu-item.is-active {
  color: #fff;
  background-color: #0a60bd;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 64px);
}
</style>
