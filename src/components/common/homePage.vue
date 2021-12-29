<template>

  <el-container class="percent">
    <sidebar></sidebar>
    <el-main class="auto-main">
      <Header ></Header>
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>

</template>

<script>
import Sidebar from './sidebar'
import Header from './header.vue'
export default {

  components: {
    Sidebar,
    Header,
    // Tags,
  },
  setup () {}
}
</script>

<style>
.percent {
  width: 100%;
  height: 100%;
}
.auto-main {
  padding: 0;
}
</style>