import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局样式
// import '@/assets/css/global.scss'; 

// 引入 ElementUI
import ElementPlus from "element-plus"
// import "element-plus/lib/theme-chalk/index.css"
import 'element-plus/dist/index.css'


createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
