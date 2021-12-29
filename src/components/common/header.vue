<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">账号</el-menu-item>
    <el-menu-item index="3">信息</el-menu-item>
    <el-menu-item index="4">关注</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const activeIndex = ref('1')
    const activeIndex2 = ref('1')
    // const handleSelect = (key, keyPath) => {}
    return {
      activeIndex,
      activeIndex2
      // handleSelect
    }
  }
})
</script>