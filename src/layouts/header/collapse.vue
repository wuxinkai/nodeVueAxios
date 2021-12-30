<template>
  <el-icon class="icons" @click="changeIcon">
    <component :is="status?'Expand':'Fold'"></component>
  </el-icon>
</template>
<script>
import { computed, ref, defineComponent } from 'vue'
import { Fold, Expand } from '@element-plus/icons'
// import { useStore } from '@/store/index'
import store from '@/store';
export default defineComponent({
  components: {
    Fold,
    Expand,
  },
  setup () {



    // //获取vuex的折叠状态

    const status = computed(() => {
      return store.getters.getCollapse
    })
    // 设置vuex的折叠状态
    const changeIcon = () => {
      console.log(1111,!status.value)
      store.commit('setCollapse', !status.value)
    }

    return {
      status,
      changeIcon
    }
  },
})
</script>
<style scoped>
.icons {
  width: 26px;
  height: 26px;
}
</style>
