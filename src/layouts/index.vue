<template>
  <el-container class="layouts">
    <el-aside width="auto" class="asside">
      <MenuBar></MenuBar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './header/Header.vue'
import MenuBar from './menu/menuBar.vue'
import { defineComponent, } from "vue";
export default defineComponent({
  name: "layouts",
  components: {
    Header,
    MenuBar
  },
})
</script>

<style lang="scss" scoped>
.layouts {
  height: 100%;
  .asside {
    background: pink;
  }
  .header {
    background: rgba(91, 211, 35, 0.678);
  }
  .main {
    background: rgb(190, 18, 119);
  }
}
</style>