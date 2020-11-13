<template>
  <div class="histrySearch" v-if="oldSearch.length > 0">
    <ul>
      <li v-for="(item,index) of oldSearch" :key="index">
        <span class="clock">包</span>
        <div class="wordKey">
          <div class="content" >{{item}}</div>
          <span class="cancal" @click="cancalBtn(index)">x</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "historyorsuggess",
    props: {
      oldSearch: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      //删除记录
      cancalBtn(index) {
        this.oldSearch.splice(index,1)
      }
    }
  }
</script>

<style scoped>
  .histrySearch{}
  .histrySearch ul li {
    line-height: .9rem;
    display: flex;
  }
  .histrySearch ul li span {
    width: .9rem;
    text-align: center;
  }
  .histrySearch ul li .wordKey {
    flex: 1;
    display: flex;
  }
  .histrySearch ul li .wordKey .content {
    flex: 1;
    max-width: 5.7rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
