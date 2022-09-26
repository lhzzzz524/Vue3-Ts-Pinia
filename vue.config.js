const path = require('path')
const { defineConfig } = require("@vue/cli-service");

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  devServer: {
    // 处理跨域
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  //配置方式一: vue cli提供的属性
  transpileDependencies: true,
  //方式二: 和webpack属性完全一致，最后将进行合并
  configureWebpack: {
    // resolve: {
    //   // 配置别名
    //   alias: {
    //     components: '@/components'
    //   }
    // },
    //配置webpack自动按需引入element-plus，
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  //方式三
  // configureWebpack: config => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // },
  //方式四
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
  }
});
