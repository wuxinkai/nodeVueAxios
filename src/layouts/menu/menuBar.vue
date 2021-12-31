<template>
  <menu-logo class="layout-logo" v-if="!isCollapse"></menu-logo>
  <el-menu :default-active="activeIdex" active-text-color="#f60" text-color="#fff" background-color="#2A364C" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose" router>
    <MenuItem :menuList="menuList">
    </MenuItem>
  </el-menu>
</template>
<script  lang="ts">
import { defineComponent, reactive, computed,ref } from 'vue'
import MenuItem from './menuItem.vue'
import menuLogo from './menuLogo.vue'
import { useRoute } from 'vue-router'
import store from '@/store';
export default defineComponent({
  name: 'layouts',
  components: {
    MenuItem,
    menuLogo
  },
  setup() {
    const menuList = reactive([
      {
        path: '/',
        alwaysShow: false,
        meta: {
          title: '路由',
          icon: 'Drizzling',
          parentId: 0
        },

        children: [
          {
            path: '/routePath',
            alwaysShow: false,
            meta: {
              title: '路由传参',
              icon: 'Fold',
              parentId: 34
            }
          },
          {
            path: '/other',
            alwaysShow: false,
            meta: {
              title: '其他设置',
              icon: 'Fold',
              parentId: 35
            }
          },
          {
            path: '/columnHome',
            alwaysShow: false,
            meta: {
              title: '列表',
              icon: 'Female',
              parentId: 3
            }
          },
          {
            path: '/about',
            meta: {
              title: '项目大全',
              parentId: 4,
              notCache: true
            }
          }
        ]
      }
    ])


    //获取vuex值
    // const isCollapse = ref(false)
    const isCollapse = computed(() => {
      return store.getters['getCollapse']
    })
    const handleOpen = (key: string | number, keyPath: string) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string | number, keyPath: string) => {
      console.log(key, keyPath)
    }

    //打开当前菜单
    const route = useRoute()
    const activeIdex = computed(() => {
      const { path } = route
      return path
    })
    return {
      isCollapse,
      handleOpen,
      handleClose,
      menuList,
      activeIdex
    }
  }
})
</script>

<style>


@keyframes logoAnimation {
  0%{
    transform: scale(0);
  }
   50%{
    transform: scale(1);
  }
   100%{
    transform: scale(1);
  }
}
/* 头部导航动画 */
.layout-logo{
  animation: logoAnimation 1s ease-out;
}

/*
 <el-aside width="auto" class="asside"> 设置 auto
再这设置宽度 就可以实现响应式

*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>