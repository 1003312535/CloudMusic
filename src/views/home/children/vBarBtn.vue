<template>
  <div class="barbtn">
      <router-link :to="'/home' + item.path" tag="div" v-for="(item,index) of btnlist" class="item" :key="index">
        <span class="inner">{{item.name}}</span>
      </router-link>
  </div>
</template>

<script>
export default {
  name:'HomeBar',
  props: {
    btnlist:{
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .barbtn{
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    position: fixed;
    z-index: 100;
    top: 1.68rem;
    display: flex;
    justify-content: center;
    background-color: #eee;
  }
  .item{
    flex: 1;
    text-align: center;
  }
  .inner{
    display: inline-block;
    padding: 0 10px;
    height: 100%;
    border-bottom: .04rem solid transparent;
    box-sizing: border-box;
  }
  .router-link-active .inner{
    color: red;
    border-bottom: .04rem solid red;
  }
  .active .inner{
    color: red;
    border-bottom: .04rem solid red;
  }
</style>
