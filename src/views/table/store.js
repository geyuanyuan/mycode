import axios from "axios"
export default {
  namespaced: true,
  state: {
    formInline: {
      user: "",
      region: "",
    },
    address: [],
    tableData: [],
    userId: 123,
    currentPage: 1,
    count: 0,
    pageSize: 20
  },
  getters: {
  },
  mutations: {
    changeAddress(state, address) {
      state.address = address
    },
    changeUserId(state, userId) {
      state.userId = userId
    },
    changeCount(state, count) {
      state.count = count
    },
    changeTableData(state, tableData) {
      state.tableData = tableData
    },
    changePageSize(state, pageSize) {
      state.pageSize = pageSize
    },
    changeCurrentPage(state, currentPage) {
      state.currentPage = currentPage
    }
  },
  actions: {
    async getData(store) {
      let res = await axios.get('https://www.fastmock.site/mock/0cd2e1f3bf31a927c66e550697a4e977/mycode/api/list', {
        params: {
          ...store.state.formInline,
          pageSize: store.state.pageSize,
          currentPage: store.state.currentPage
        }
      })
      res = res.data
      store.commit('changeTableData', res.data.list)
      store.commit('changeCount', res.data.count)
    },
    async getAddress(store) {
      let res = await axios.get('https://www.fastmock.site/mock/0cd2e1f3bf31a927c66e550697a4e977/mycode/api/address')
      let list = res.data.data
      store.commit('changeAddress', list)
    },
    handleSizeChange(store, pageSize) {
      store.commit('changePageSize', pageSize)
      store.dispatch('getData')
    },
    handleCurrentChange(store, currentPage) {
      store.commit('changeCurrentPage', currentPage)
      store.dispatch('getData')
    }
  },
}