<template>
  <div class="header">
    <h2>
      <slot>推荐歌曲</slot>
    </h2>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header{

  }
  h2{
    padding-left: .2rem;
    font-size: .34rem;
    position: relative;
    margin-bottom: .28rem;
    margin-top: .28rem;
  }
  h2::before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: .04rem;
    height: 100%;
    background-color: red;
  }
</style>