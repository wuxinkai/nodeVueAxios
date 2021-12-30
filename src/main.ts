import { createApp,createVNode  } from 'vue'
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


import * as Icons from '@element-plus/icons-vue'



const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)

Object.keys(Icons).forEach((key)=>{
  console.log(key)
  app.component(key,Icons[key as keyof typeof Icons])
})


const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(Icons[icon as keyof typeof Icons])
}
app.component('Icon', Icon)

app.mount('#app')


