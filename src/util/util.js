// 定义一个混入对象
export default  {
  filters: {
    //格式化播放量
    unit(value) {
      return parseInt(value / 10000) >= 0
        ? parseInt(value / 10000) +
        "." +
        parseInt((value % 10000) / 1000) +
        "万"
        : value;
    },
    //不大于十的补零
    asd(value) {
      if(value < 10) {
        return '0' + value
      }
      return value
    }
  },
  methods: {
    //打开下载页面
    openapp() {
      console.log(123)
      this.$router.push('/applink/download')
    },
    //歌曲作者名字拼接
    forEachAuthor(value) {
      var str = ''
      value.forEach(item => {
        str += item.name + '/'
      })

      return str.slice(0,-1)
    }
  }
}
