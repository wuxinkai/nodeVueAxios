<template>
  <div class="Tabs">
    <div v-for="(menu, index) in listMenu" :key="index" @click="menuClick(menu.name)" :class="{ 'mactive' : menu.isActive === true ? true : false }">
      {{ menu.name }}
    </div>
  </div>
  <br>
  <br>
  <br>
  <el-button @click="changeName();$emit('aboutEvent', name)">点击这个内容</el-button>

</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Tabs',
  props: {
    listMenu: { // 菜单数据
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  setup (props, context) {
    const listMenu = props.listMenu
    function menuClick (menuName) {

      // 通过自定义事件 子传父页面 回传值
      context.emit('menuClick', { menuName })
    }

    const name = ref('About')
   

    const changeName = () => {
      name.value = 'AboutComponent'
    }

    return {
      listMenu,
      menuClick,
      changeName,
      name
    }
  }
})
</script>
<style lang='scss'>
.Tabs {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  background-color: #0087ac;
  color: black;
}
.mactive {
  color: white;
  font-weight: bold;
}
</style>