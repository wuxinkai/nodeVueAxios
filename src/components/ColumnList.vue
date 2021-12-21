<template>
 <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
export default defineComponent({
  name: 'ColumnList',

})
</script>
<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>
