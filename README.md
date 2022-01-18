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

### 数组返回值

```

```

### 接口返回值

```

```

### 函数返回值

```

```

### 语言内容

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

vuex 接受数据

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

# 统一格式文件

根目录下创建 .editorconfig

```
# https://editorconfig.org

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false

```

#### vscode 下载 EditorConfig for VS Code

# 格式化工具

在 vuecode 安装工具中下载 Prettier - Code formatter

```
//开发模式应用
npm install prettier -D
```

# element-plus 的全局引用和按需要引入

全局引入（会打包一下 不需要的组件）

```
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
app.use(ElementPlus)
```

按需引入（局部引入，不用的打包不会打进去）

```
 <el-button type="info">点击按钮</el-button>

 <script lang="ts">
  import { defineComponent } from 'vue';
  import { ElButton } from 'element-plus' //引入
export default defineComponent({
  name: '',
  components: {
    ElButton,  //注册
  },
});
</script>
```
只有应用才加载 在根目录创建babel.config.js
```

# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```
# 局部封装组件 ，指令，图标  
E:\1node\vue-pure-admin\src\plugins\element-plus\index.ts
```
main.ts 里面进行

```