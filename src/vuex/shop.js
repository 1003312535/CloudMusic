export default {
  namespaced: true,
  state: {
    name: 'ning',
    count: 1
  },
  mutations: {
    add(state,payload) {
      state.count++
      state.name +=payload
    },
  }
}
