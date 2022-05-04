import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import tableStore from '@/views/table/store.js'
export default new Vuex.Store({
  state: {
    userId: 123,
  },
  getters: {
  },
  mutations: {
    changeUserId(state, userId) {
      state.userId = userId
    },
  },
  actions: {
  },
  modules: {
    tableStore
  }
})
