<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, onBeforeMount } from 'vue'
const route = useRoute()
const router = useRouter().options.routes
console.log(111, router)

const showLogo = 1

const isCollapse = computed(() => {
  return false
})

const activeMenu = computed((): string => {
  const { meta, path } = route
  if (meta.activeMenu) {
    // @ts-ignore

    return meta.activeMenu
  }
  return path
})

const routerlist = computed((): Array => {
  router.map((item) => (item.title = item.meta.title))
  return router
})
 
</script>
<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse" router overflow-y: scroll>
    <el-submenu index="1">
      <el-menu-item  v-for="route in routerlist" :index="route.path">{{route.title}}</el-menu-item>
      <!-- <el-menu-item index="/demo/group/index">分组</el-menu-item> -->
    </el-submenu>
  </el-menu>

</template>

<style>
.sidebar {
  background: pink;
  width: 200px;
  height: 100%;
}
</style>