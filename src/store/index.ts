import axios from 'axios'
import { createStore } from 'vuex'
import { ITabs } from './type/indedx'

// vue2 用的 new vuex.Store({})
//vue3 用 createStore({})
export interface UsersProps {
  id: number;
  name: string;
}
interface ListProps<P> {
  [id: string]: P;
}

export interface GlobalDataProps {
  users: ListProps<UsersProps>,
  collapse: boolean,
  tabsList: Array<ITabs>
}



const store = createStore<GlobalDataProps>({
  state: {
    users: {},
    collapse: false,// 折叠菜单
    tabsList: [],// 存放选项卡列表
  },
  getters: {
    getColumns: (state) => {
      return state.users.data
    },
    //获取菜单是折叠还是展开
    getCollapse(state) {
      return state.collapse
    },
    //获取
    getTabs(state) {
      return state.tabsList
    }
  },
  mutations: {
    fetchColumns(state, rawData) {
      state.users.data = rawData
    },
    //设置菜单是折叠还是展开
    setCollapse(state, collapse) {
      state.collapse = collapse
    },
    //添加tab
    addTabs(state: GlobalDataProps, tab: ITabs) {
      //判断是否存在，如果不存在才放入
      if (state.tabsList.some(item => item.path == tab.path)) return
      state.tabsList.push(tab)
    }
  },
  actions: {
    fetchColumns(context) {
      axios.get('/api/users').then(resp => {
        context.commit('fetchColumns', resp.data)
      })

    },
  },
  modules: {

  }
})
export default store