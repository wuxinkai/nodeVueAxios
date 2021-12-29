<template>
  <column-list  :list="testData"></column-list>
</template>
<script lang="ts">
import ColumnList,{ColumnProps} from '@/components/columnList/ColumnList.vue'
import { defineComponent } from 'vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: '游戏专栏',
    avatar: '#',
    description: '1`111111111111111111111111111'
  },
  {
    id: 2,
    title: '体育专栏',
    avatar: '#',
    description: '22222222222222222'
  },
  {
    id: 3,
    title: '体育专栏',
    avatar: '#',
    description: '22222222222222222'
  },{
    id: 4,
    title: '体育专栏',
    avatar: '#',
    description: '22222222222222222'
  },{
    id: 5,
    title: '体育专栏',
    avatar: '#',
    description: '22222222222222222'
  }
  
]

export default defineComponent({
  components: { ColumnList },
  name: 'ColumnHome',
  setup() {
    return {
    testData
    }
  }
})
</script>

