<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in tabs ">{{item.meta.title}}</el-breadcrumb-item>

  </el-breadcrumb>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup () {
    const tabs = ref([])
    const route = useRoute()
    console.log(444, route.matched)
    const gerBredcurm = () => {
      let mached = route.matched.filter(item => item.meta && item.meta.title)
      const first = mached[0]
      if (first.path !== '/') {
        mached = [{ path: "/", meta: { title: "首页" } } ].concat(mached)
      }
      tabs.value = mached

    }
    gerBredcurm()
    watch(()=>route.path,()=>gerBredcurm())
    return {
      tabs
    }
  }
})
</script>

<style>
</style>