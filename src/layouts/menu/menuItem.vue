<template>
  <!--  有下一级的 el-sub-menu -->
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu class="pro-menu " v-if="menu.children &&menu.children.length>0" :index="menu.path">
      <template #title>
        <!-- 老版本组件 -->
        <i v-if="menu.meta.icon&&menu.meta.icon.includes('el-icon')"></i>
        <!-- 动态组件 -->
        <component class="icons" v-else :is="menu.meta.icon"></component>
        <span>{{menu.meta.title}}</span>
        <Icon class="icon-all" :icon="menu.meta.icon"></Icon>
      </template>

      <!-- 地柜自己调用自己 -->
      <menu-item :menuList="menu.children"></menu-item>
    </el-sub-menu>
    <!-- 没有下一级的是  el-menu-item -->
    <!-- index  	唯一标志  -->
    <el-menu-item v-else :index="menu.path">
      <i v-if="menu.meta.icon&&menu.meta.icon.includes('el-icon')"></i>
      <component class="icons" v-else :is="menu.meta.icon"></component>

       <span>{{menu.meta.title}}</span>
       <Icon class="icon-all" :icon="menu.meta.icon"></Icon>
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
<style lang="scss" scoped>
:deep(.pro-menu) {
  background: red !important;
  // .el-menu {
  //   background: red;
  // }
}
.icons {
  width: 24px;
  height: 18px;
}
.icon-all {
  // margin-left: 6px;
  width: 24px;
  height: 18px;

}
</style>
