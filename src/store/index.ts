import axios from 'axios'
import { createStore } from 'vuex'

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
  collapse: boolean
}



const store = createStore<GlobalDataProps>({
  state: {
    users: {},
    collapse: false,// 折叠菜单
  },
  getters: {
    getColumns: (state) => {
      return state.users.data
    },
    //获取菜单是折叠还是展开
    getCollapse(state) {
      return state.collapse
    }
  },
  mutations: {
    fetchColumns(state, rawData) {
      state.users.data = rawData
    },
    //设置菜单是折叠还是展开
    setCollapse(state, collapse) {
      state.collapse = collapse
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