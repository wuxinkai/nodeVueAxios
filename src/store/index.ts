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
  users: ListProps<UsersProps>;
}

const store = createStore<GlobalDataProps>({
  state: {
    users: {}
  },
  getters: {
    getColumns: (state) => {
      return state.users.data
    },
  },
  mutations: {
    fetchColumns(state, rawData) {
      state.users.data = rawData
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