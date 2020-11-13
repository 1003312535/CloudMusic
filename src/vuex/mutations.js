
export default {
  //修改 state count 加一
  add(state,payload) {
    state.count++
    state.name +=payload
  },
  //修改 state中的time
  getTime(state,payload) {
    state.time = payload
  },
  //测试是否能异步执行
  asynTime(state,payload){
    setTimeout(() => {
      state.time = payload
    })
  }
}
