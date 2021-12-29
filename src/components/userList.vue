<template>
  <div>
    <div v-for="(menu, index) in userList" :key="index">
      {{ menu.name }}
    </div>
  </div>

</template>
<script>
import { defineComponent, PropType, computed, ref } from 'vue'



export default defineComponent({
  name: 'Tabs',
  props: {
    userList: { // 菜单数据
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  setup (props, context) { }
})
</script>
<style>
</style>