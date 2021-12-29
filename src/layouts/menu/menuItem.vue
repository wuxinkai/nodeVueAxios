<template>
  <!--  有下一级的 el-sub-menu -->
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu v-if="menu.children &&menu.children.length>0" :index="menu.path">
      <template #title>
        <i :class="menu.meta.icon"></i>
        <span>{{menu.meta.title}}</span>
      </template>

      <!-- 地柜自己调用自己 -->
      <menu-item  :menuList="menu.children"></menu-item>
    </el-sub-menu>
    <!-- 没有下一级的是  el-menu-item -->
    <!-- index  	唯一标志  -->
    <el-menu-item v-else :index="menu.path">
      <i :class="menu.meta.icon"></i>
      <template #title>
        <span>{{menu.meta.title}}</span>
        </template>
    </el-menu-item>
  </template>

</template>

<script  lang="ts">
import { Edit, Share, Delete, Search } from '@element-plus/icons'
import { ref, defineComponent } from 'vue'
export default defineComponent({
  props: {
    menuList: Array
  },
  components: {
    Delete
  }
})
</script>

