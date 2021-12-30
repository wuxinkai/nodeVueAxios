<template>
  <div class="header">
    <collapse></collapse>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import collapse from './collapse.vue'
export default defineComponent({
  components: {
    collapse
  },
  setup () {
    return {}
  },
})
</script>

<style>
.header{
  display: flex;
  align-items: center;
}
</style>