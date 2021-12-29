import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus"
// import { useElementPlus } from "../src/plugins/element-plus";
// 全局样式
// import '@/assets/css/global.scss'; 

// 引入 ElementUI
// import "element-plus/lib/theme-chalk/index.css"
import 'element-plus/dist/index.css'




const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')


