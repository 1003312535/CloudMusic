<template>
  <div class="home">
    <!-- vTopNav -->
    <vTopNav class="top"></vTopNav>
    <vBarBtn :btnlist="barbtnlist"></vBarBtn>
    <div class="content">
      <router-view ></router-view>
      <!-- <router-view  :key="key"></router-view> -->
    </div>
  </div>
</template>

<script>

import vTopNav from "./children/vTopNav";
import vBarBtn from './children/vBarBtn'

export default {
  components: {
    vTopNav,vBarBtn,
  },
  data() {
    return {
      barbtnlist: [
        {name:'推荐音乐', path: '/recommend',state:false},
        {name:'热歌榜', path: '/hotsongslist' ,state:false},
        {name:'搜索', path: '/search',state:false}
      ]
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + new Date()
        : this.$route + new Date();
    }
  }
};
</script>

<style scoped>
.home {
  height: 100%;
}
.top{
  position: relative;
}
.content{
  padding-top: 2.48rem;
}
</style>
