<template>
  <div class="header">
    <collapse></collapse>
    <bred-cum></bred-cum>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import collapse from './collapse.vue'
import bredCum from './bredCum.vue'
export default defineComponent({
  components: {
    collapse,
    bredCum
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