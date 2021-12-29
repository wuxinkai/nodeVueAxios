<template>
  <!--使用子组件，传值并监听子组件自定义事件拿值-->
  <Tabs :listMenu="listMenu" @menuClick="menuClick" @aboutEvent="handleEvent" />
  <user-list :userList="userlist"></user-list>
</template>
<script>
import store from '@/store';
import { defineComponent, ref, onMounted ,computed} from "vue";
import Tabs from '../components/Tabs.vue'
import userList from '../components/userList.vue'
export default defineComponent({
  name: "Index",
  components: {
    Tabs,
    userList
  },
  setup () {

  // const userlist = ref( [{"id":1,"name":"zhufeng1"},{"id":2,"name":"zhufeng2"},{"id":3,"name":"zhufeng3"}])

    const listMenu = ref([
      {
        name: '总部',
        isActive: true
      },
      {
        name: '地球',
        isActive: false
      },
      {
        name: '火星',
        isActive: false
      }
    ])
    //第一种接收参数
    const menuClick = param => {
      console.log('name', param)
      listMenu.value.forEach(item => {
        item.isActive = item.name === param.menuName ? true : false
      })
    }

    //第二种接收参数
    const handleEvent = (param) => {
      console.log(666, param)
    }

    onMounted(() => {
      store.dispatch('fetchColumns')
    })
    
    const userlist = computed(() => store.getters.getColumns)


    return {
      listMenu,
      menuClick,
      handleEvent,
      userlist
    }
  }
});
</script>