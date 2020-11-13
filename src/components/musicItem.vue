<template>
  <div class="music-item">
    <slot></slot>
    <div class="info">
      <div class="title">{{musicoptions.title}}</div>
      <div class="dec"><span></span> {{musicoptions.nickname + '-' + musicoptions.author}}</div>
    </div>
    <div class="play">a</div>
  </div>
</template>

<script>
export default {
  props: {
    musicoptions: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .music-item{
    width: 100%;
    height: 1.1rem;
    padding-left: .2rem;
    margin: .1rem 0;
    display: flex;
    box-sizing: border-box;
  }
  .info{
    flex: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .info .title{
    width: 3rem;
    font-size: .34rem;
    line-height: .5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .info .dec{
    width: 6rem;
    font-size: .26rem;
    line-height: .36rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .dec span{
    display: inline-block;
    margin-right: .1rem ;
  }
  .play{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
