import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' //引入持久化插件

const app = createApp(App)


const pinia = createPinia() //创建pinia实例
pinia.use(piniaPluginPersistedstate) //将插件添加到 pinia 实例上

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
