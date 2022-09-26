import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import { loginStore } from '@/store/modules/login'

import 'element-plus/dist/index.css'
import './assets/css/index.less'
import 'normalize.css'

const app = createApp(App)

app.use(createPinia())

const store = loginStore()
store.refreshStore() // 每次刷新页面重新写入store里的数据

app.use(router)

app.mount('#app')
