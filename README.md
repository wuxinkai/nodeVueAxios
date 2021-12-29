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