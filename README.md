# 安装脚手架
```
npm install -g @vue/cli
yarn global add @vue/cli
```
# 创建项目
```
vue create my-project
```
### 最后一个是手动安装

### 不进行代码检测
```
@ts-ignore 
```

### 字符串返回值
```
```
### 对象返回值
```
```
###  数组返回值
```
```
###  接口返回值
```
```
###  函数返回值
```
```

###  语言内容  
 问号代表是否可选
```
export interface UserProps {
   isLogin:boolean;
   name?:string;
   id?: number
} 
```


### 异步调用方法
请求接口 E:\1node\nodeVueAxios\src\views\From.vue
```
import {onMounted } from "vue";
onMounted(() => {
   store.dispatch('fetchColumns')
})
    
```
vuex接受数据
```
//设置变量
  state: {
    users: {}
  },
// 返回给页面数据
  getters: {
    getColumns: (state) => {
      return state.users.data
    },
  },
//设置数据
  mutations: {
    fetchColumns(state, rawData) {
      state.users.data = rawData
    }
  },
  // 请求接口
  actions: {
    fetchColumns(context) {
      axios.get('/api/users').then(resp => {
        context.commit('fetchColumns', resp.data)
      })

    },
```

前端获取后台返回值
```
 import { computed} from "vue";
 const userlist = computed(() => store.getters.getColumns)
```

# icon 引入方式 一
E:\1node\nodeVueAxios\src\main.ts
```
import * as Icons from '@element-plus/icons-vue'

Object.keys(Icons).forEach((key)=>{
  console.log(key)
  app.component(key,Icons[key as keyof typeof Icons])
})

vue 模板页面应用 ,必须包裹el-icon
<el-icon>
   <component class="icons" v-else :is="menu.meta.icon"></component>
</el-icon>


```

# icon 引入方式 二
```
import { createApp, createVNode } from 'vue'

// 创建Icon组件
const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(Icons[icon as keyof typeof Icons])
}

// 注册Icon组件
app.component('Icon', Icon)


// 模板应用
<template>
  <Icon class="xxx" icon="Search"></Icon>
</template>
```