<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
    <MenuItem :menuList="menuList">
    </MenuItem>
  </el-menu>
</template>
<script  lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import MenuItem from './menuItem.vue'

export default defineComponent({
  name: 'layouts',
  components: {
    MenuItem
  },
  setup() {
    const menuList = reactive([
      {
        path: 'routePath',
        alwaysShow: false,
        meta: {
          title: '路由传参',
          icon: 'el-icon-edit',
          parentId: 0
        },
        component: () => import('@/views/vueRoute/routePath.vue'),
        children: [
          {
            path: 'routePath',
            alwaysShow: false,
            meta: {
              title: '路由传参',
              icon: 'el-icon-edit',
              parentId: 34
            },
            component: () => import('@/views/vueRoute/routePath.vue')
          }
        ]
      },
      {
        path: 'paaaaaa',
        alwaysShow: false,
        meta: {
          title: '222222',
          icon: 'el-icon-edit',
          parentId: 1
        },
        component: () => import('@/views/vueRoute/routePath.vue')
      }
    ])
    const isCollapse = ref(false)
    const handleOpen = (key: string | number, keyPath: string) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string | number, keyPath: string) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
      menuList
    }
  }
})
</script>

<style>
/*
 <el-aside width="auto" class="asside"> 设置 auto
再这设置宽度 就可以实现响应式

*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>