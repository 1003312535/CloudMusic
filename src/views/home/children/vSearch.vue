<template>
  <div class="search">
    <form class="searchinput">
      <div class="wrap">
        <div><span></span></div>
        <input type="text" @input="inputWord" :value="searchWord" />
        <div>
          <span
            :class="{ active: isActive }"
            class="guanbi"
            @click="searchcancal"
            >x</span
          >
        </div>
      </div>
    </form>
    <div class="tiggerContent" v-if="searchWord.trim() == ''">
      <div class="hots">
        <h2>热门搜索</h2>
        <div class="content">
          <div
            class="item"
            v-for="(item, index) of hotSearch"
            :key="item.first + index"
            @click="selectkey(item.first)"
          >
            {{ item.first }}
          </div>
        </div>
      </div>
      <div class="histrySearch" v-if="oldSearch.length > 0">
        <ul>
          <li v-for="(item, index) of oldSearch" :key="item">
            <span class="clock">包</span>
            <div class="wordKey">
              <div class="content">{{ item }}</div>
              <span class="cancal" @click="cancalBtn(index)">x</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      hotSearch: [],
      searchWord: "",
      oldSearch: [],
      isActive: false,
      
    };
  },
  methods: {
    //输入事件
    inputWord($event) {
      this.searchWord = $event.target.value;
      if (this.searchWord.trim() == "") {//查收 关闭按钮状态
        this.isActive = false;
      } else {
        this.isActive = true;
        this.$router.push({name:'suggess', parmas: {suggess: this.searchWord}})
      }
      
    },
    //清空查询内容
    searchcancal() {
      this.searchWord = "";
      //查收 关闭按钮状态
      this.isActive = false;
    },
    selectkey(value) {
      this.searchWord = value;
      //查收 关闭按钮状态
      this.isActive = true;
      //判断是否在old 中存在
      if (!this.oldSearch.includes(value)) {
        console.log(value);
        this.oldSearch.unshift(value);
      }
    },
    //删除记录
    cancalBtn(index) {
      this.oldSearch.splice(index, 1);
    },
  },
  created() {
    //热门关键字
    this.$axios.get("http://127.0.0.1:3000/search/hot").then((res) => {
      console.log(res.data.result.hots);
      this.hotSearch = res.data.result.hots;
    });
    
  },
};
</script>

<style scoped>
.search {
  overflow: hidden;
}
.searchinput {
  display: block;
  width: 100%;
  padding: 0.3rem 0.4rem;
  box-sizing: border-box;
  border-bottom: 0.02rem solid #bbb;
}
.searchinput .wrap {
  border-radius: 10%/100%;
  background-color: #ebecec;
  display: flex;
}
.searchinput .wrap div {
  width: 0.6rem;
  height: 0.6rem;
  text-align: center;
  line-height: 0.6rem;
}
.searchinput .wrap div .guanbi {
  display: none;
}
.searchinput .wrap div .guanbi.active {
  display: block;
}
.searchinput input {
  height: 0.6rem;
  /*width: 100%;*/
  outline: none;
  border: none;
  padding: 0;
  flex: 1;
  background: none;
}
.hots {
  padding: 0.1rem;
}
.hots h2 {
  font-size: 0.26rem;
  line-height: 0.4rem;
}
.hots .content {
  margin-top: 0.3rem;
}
.hots .content div {
  height: 0.64rem;
  font-size: 0.28rem;
  display: inline-block;
  padding: 0 0.28rem;
  line-height: 0.64rem;
  text-align: center;
  border: 0.02rem solid #eee;
  border-radius: 40%/100%;
  margin-right: 0.16rem;
  margin-bottom: 0.16rem;
}
.histrySearch {
}
.histrySearch ul li {
  line-height: 0.9rem;
  display: flex;
}
.histrySearch ul li span {
  width: 0.9rem;
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
