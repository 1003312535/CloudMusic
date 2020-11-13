<template>
  <div class="item">
    <div class="headImg">
      <img :src="commentitem.avatarUrl" alt="">
    </div>
    <div class="info">
      <div class="user">
        <div class="top"><span class="nickname">{{commentitem.nickname}}</span><span class="like">{{commentitem.likedCount}}赞</span></div>
        <span class="time">昨天: 10:10</span>
      </div>
      <div class="content">{{commentitem.content}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vCommentItem",
    props: {
      commentitem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .item{
    display: flex;
    padding: 0 .2rem;
    margin-top: .4rem;
  }
  .headImg{
    flex: 1;
    margin-right: .1rem;
  }
  .headImg img{
    width: 100%;
    border-radius: 50%;
  }
  .info{
    flex: 9;
  }
  .info .user{

  }
  .info .user .top {
    display: flex;
    justify-content: space-between;
  }
  .info .user .top .nickname{color: #cecccb}
  .info .user .top .like{color: #999999; font-size: .26rem}
  .info .user .time{
    font-size: .24rem;
    color: #7e8c8d;
  }
  .info .content{
    margin-top: .1rem;
    font-size: .28rem;
    line-height: .44rem;
  }
</style>
