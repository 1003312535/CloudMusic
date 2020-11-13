<template>
  <div>
    <div class="playlistTop">
      <div
        class="bgimg"
        :style="{ 'background-image': `url(${songsdetail.avatarUrl})` }"
      ></div>
      <section>
        <div class="headImg">
          <div class="playCount">{{ songsdetail.playCount | unit }}</div>
          <!-- <div class="playcount">songsdetail.playCount</div> -->
          <img :src="songsdetail.coverImgUrl" alt="" />
        </div>
        <div class="info">
          <div class="name">{{ songsdetail.name }}</div>
          <div class="author">
            <img :src="songsdetail.avatarUrl" alt="" />
            <span>{{ songsdetail.nickname }}</span>
          </div>
        </div>
      </section>
    </div>

    <div class="title1">歌曲列表</div>
    <vMusicList>
      <musicItem
        v-for="(item, index) of newsongs"
        :key="item.id"
        :musicoptions="item"
        @click.native="linkBtn(index)"
      >
        <div class="order">{{ (index + 1) | asd }}</div>
      </musicItem>
    </vMusicList>
  </div>
</template>

<script>
import vMusicList from "@/components/musicList";
import musicItem from "@/components/musicItem";
import mixin from "@/util/util";
export default {
  mixins: [mixin],
  name: "vSongsList",
  mounted() {
    this.$axios
      .get("http://localhost:3000/playlist/detail?id=" + this.$route.query.id)
      .then((res) => {
        let data = res.data.playlist;
        var obj = {};
        obj.name = data.name;
        obj.playCount = data.playCount;
        obj.avatarUrl = data.creator.avatarUrl;
        obj.coverImgUrl = data.coverImgUrl;
        obj.backgroundUrl = data.creator.backgroundUrl;
        obj.singslist = [];
        obj.nickname = data.creator.nickname;
        data.tracks.forEach((item) => {
          let obj1 = {};
          obj1.title = item.name;
          obj1.id = item.id;
          obj1.nickname = this.forEachAuthor(item.ar);
          obj1.author = item.al.name;
          obj.singslist.push(obj1);
        });
        console.log(obj);
        this.newsongs = obj.singslist;
        this.songsdetail = obj;
      });
  },
  data() {
    return {
      newsongs: [],
      songsdetail: {},
    };
  },
  components: {
    vMusicList,
    musicItem,
  },
  filters: {},
  methods: {
    //歌单详情跳转
    linkBtn(index) {
      this.$router.push({
        name: "play",
        params: { playId: this.newsongs[index].id },
      });
    }
  },
};
</script>

<style scoped>
.playlistTop {
  padding: 0.6rem 0.2rem 0.6rem 0.3rem;
  overflow: hidden;
  position: relative;
}
.bgimg {
  position: absolute;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  background-size: contain;
z-index: 10;
  filter: blur(8px);
}
section {
  position: relative;
  z-index: 100;
  display: flex;
}
.headImg {
  width: 2.53rem;
  position: relative;
  margin-right: 0.32rem;
}
img {
  width: 100%;
}
.headImg .playcount {
  position: relative;
}
.info {
  flex: 1;
  /* display: flex;
  flex-direction: column; */
}
.info .name {
  margin-top: 0.2rem;
  color: white;
  line-height: 0.6rem;
  font-size: 0.34rem;
}
.info .author {
  margin-top: 0.4rem;
  width: 3rem;
  height: 0.6rem;
  font-size: 0.26rem;
  color: white;
}
.info .author img {
  width: 0.6rem;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
}
.order {
  width: 0.6rem;
  color: #e45355;
  margin-right: 0.08rem;
  font-size: 0.36rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.playCount {
  position: absolute;
  top: 0;
  right: 0.2rem;
  color: white;
  line-height: 0.4rem;
  /* padding: 0 0.2rem; */
  /* width: 100%; */
}
.title1 {
  color: black;
  font-size: 0.24rem;
  padding-left: 0.2rem;
  background-color: #eeeff0;
  line-height: 0.44rem;
}
</style>