<template>
  <div class="logo">
    <el-icon class="icon" size="2rem">
      <share />
    </el-icon>
    <span>vue3+typescript实战</span>
  </div>
</template>
<script  lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import { Edit, Share, Delete, Search } from '@element-plus/icons'
export default defineComponent({
  name: 'menuLogo',
  components: {
    Share,
    Edit
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.logo {
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  .icon {
    font-size: 30px;
    margin-right: 10px;
  }
}
</style>

