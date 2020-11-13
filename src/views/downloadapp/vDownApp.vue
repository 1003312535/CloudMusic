<template>
  <div class="downapp">
    <p class="top">
      若您已安装了网易云音乐<br>
      <span>↑↑</span>
      请下拉并点击"打开"按钮
      <span>↑↑</span>
    </p>
    <p class="middle">
      (若无打开按钮，则 
      <a href="javascript:;">点此打开</a> )
    </p>
    <div class="logo">
      <img src="~@/assets/logo.png" alt="" >
    </div>
    <a href="javascript:;" class="down">立即下载</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .downapp{
    overflow: hidden;
    text-align: center;
    height: 100%;
    background-color: #130908;
  }
  .top{
    margin-top: .32rem;
    color:white;
    font-size: .26rem;
    line-height: .36rem;
  }
  .middle{
    color:#999999;
    margin-top: .32rem;
    font-size: .24rem;
  }
  .logo{
    margin: 1.6rem;
  }
  .down{
    width: 3.8rem;
    height: 1rem;
    border-radius: .1rem;
    color: white;
    font-size: .44rem;
    display: inline-block;
    line-height: 1rem;
    text-align: center;
    border: .02rem solid white;
  }
  img{
    width: 2.16rem;
  }
</style>