<template>
  <el-tabs class="dropdown-tabs" v-model="activeTab" type="card" closable @tab-click="clickTabItem" @tab-remove="removeTab">
    <el-tab-pane v-for="item in tabsArrayList" :key="item.path" :label="item.title" :name="item.path"></el-tab-pane>
  </el-tabs>
</template>

<script>
import { defineComponent, ref, computed, watch, onMounted } from 'vue'
import store from '@/store';
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  setup () {
    const activeTab = ref("")
    //获取tabs列表
    const tabsArrayList = computed(() => {
      return store.getters['getTabs']
    })

    //获取当前选中
    const route = useRoute()
    const setActiveTab = (() => {
      activeTab.value = route.path;
    })



    // 删除选项卡item
    const removeTab = (targetName) => {
      // 首页不能删除
      if (targetName === '/about') return
      //选项卡列表
      const tabs = tabsArrayList.value
      //当前激活的选项卡
      let activeName = activeTab.value
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.path === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.path
            }
          }
        });
      }
      // 重新设置激活的选项卡
      activeTab.value = activeName
      //重新设置选项卡数据
      store.state.tabsList = tabs.filter((tab) => tab.path != targetName)
      //实现路由跳转
      router.push({ path: activeName })
    }

    //新增选项卡
    const addtabs = () => {
      const { path, meta } = route
      const tab = {
        path: path,
        title: meta.title
      }
      store.commit('addTabs', tab)
    }

    // 监听路由变化
    watch(() => route.path, () => {
      setActiveTab()
      addtabs()
    })

    // 当前选项不消失
    onMounted(() => {
      //解决选项卡数据丢失
      beforeRefrech()
      //激活选项卡
      setActiveTab()
      //把路由添加选项卡
      addtabs()
    })

    // 点击选项卡页面跳转
    const router = useRouter()
    const clickTabItem = (tab) => {
      const { props } = tab
      router.push({ path: props.name })
    }

    //解决刷新数据不丢问题
    const beforeRefrech = () => {

      window.addEventListener('beforeunload', () => {
        //存储
      debugger
       sessionStorage.setItem('tabsView', JSON.stringify(tabsList.value))

      })

      //获取
      // let tabSesson = sessionStorage.setItem('tabsView');
      // if (tabSesson) {
      //   let oldTabs = JSON.parse(tabSesson)
      //   if (oldTabs.length > 0) {
      //     store.state.tabsList = oldTabs
      //   }
      // }
    }

    return {
      activeTab,
      tabsArrayList,
      clickTabItem,
      removeTab
    }
  }
})
</script>


<style lang="scss" scoped>
.dropdown-tabs {
  background-color: #fff;
  box-shadow:none;
  border-radius: 4px;
  border: 1px solid #d8dce5;
  :deep(.el-tabs__header) {
    margin: 0;
  }

  :deep(.el-tabs__nav-scroll) {
    // display: flex;
    // justify-content: center;
  }

  :deep(.el-tabs__item) {
    // display: flex;
    // justify-content: center;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border: 1px solid #d8dce5;
    color: #495060;
    font-size: 12px;
    padding: 0 10px;
  }

  :deep(.is-active) {
    border-bottom: 1px solid transparent;
    border: 1px solid #42b983;
    border-color: #42b983;
    color: #42b983;
  }
  :deep(.el-tabs__item:hover) {
    color: #495060;
  }

  :deep(.el-tabs__nav) {
    border: none;
  }

  :deep(.is-active:hover) {
    color: #fff;
  }
}
</style>
