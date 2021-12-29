<template>
  <el-space wrap class="list">
    <el-card class="li-item" v-for="item in list" :key="item.id">
      <img :src="item.avatar" :alt="item.title">
      <h5>{{item.title}}</h5>
      <h5>{{item.description}}</h5>
      <el-button>进入专栏</el-button>
    </el-card>
  </el-space>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number
  title: string
  avatar: string
  description: string
}
// propType 可以将一个构造函数断言成一个类型
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {}
})
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 16px;
}

/deep/.el-space__item {
  width: calc(calc(100% / 5) - 20px);
  background: #fff;
  margin: 10px;
}
.list .li-item {
  padding: 10px;
}
</style>
