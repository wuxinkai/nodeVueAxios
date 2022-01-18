<template>
  <div>
    <p>$store用法</p>
    <p>

      {{$store.state.tabsList}}

      <el-button type="info">点击按钮</el-button>
      <el-button type="success">Success</el-button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
  import { ElButton } from 'element-plus'


export default defineComponent({
  name: '',
  components: {
    ElButton,
  },
});
</script>
