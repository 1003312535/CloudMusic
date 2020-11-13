
export default {
  //异步分发 1s后执行commit
  getTime(context,payload) {
    console.log(context)
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        context.commit('getTime', payload)
        resolve('我是异步函数返回出来的结果')
      },1000)
    })

  }
}
