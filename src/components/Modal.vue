<template>
  <teleport to="#modal">
    <div class="center" v-if="isOpen">
      <h2>
        <slot>
          这是个弹出框
        </slot>
      </h2>
      <button @click="buttonClick">关闭 </button>
    </div>
  </teleport>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isOpen: Boolean
  },
  //发送给父组件的
  emits: {
    'close-modal': null
  },
  setup (props, context) {
    const buttonClick = () => {
      context.emit('close-modal')
    }
    return {
      buttonClick
    }
  }
})
</script>

<style scoped>
.center {
  width: 200px;
  height: 200px;
  background: #f1f1f1;
  border: 1px solid #ccc;
  position: absolute;
  left: 30%;
  top: 50%;
  margin: -50px 0 0 -50px;
}
</style>