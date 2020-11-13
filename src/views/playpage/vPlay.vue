<template>
  <div class="play">
    <audio
      :src="
        'https://music.163.com/song/media/outer/url?id=' +
        $route.params.playId +
        '.mp3'
      "
      ref="audioEl"
    ></audio>
    <div class="down">
      <a @click="openapp" class="open" href="javascript:">打开</a>
      <a @click="openapp" class="download" href="javascript:">下载</a>
    </div>
    <div class="playmain">
      <div
        :class="{ active: playState, pause: !playState }"
        class="plus pause"
      ></div>
      <div class="logo">
        <svg
          class="u-svg u-svg-logosong"
          viewBox="0 0 184 34"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#fff">
            <path
              d="m78.74 14.27h14.52v-2.27h-14.52v2.27m-1.44 1.89c-.51-.03-.915-.44-.94-.95v-8.21c-.0001-.53.411-.968.94-1h17.37c.529.032.941.47.939 1v8.22c-.023.51-.43.92-.939.95l-17.37-.001m1.44-6h14.52v-2.23h-14.52v2.23"
            ></path>
            <path
              d="m95.49 18h-18c-.291.002-.563.139-.74.37l-1.86 2.63-1.89 2.55c-.078.108-.053.258.055.335.04.028.087.045.135.045h2.07c.165 0 .32-.078.42-.209l2.72-3.721h3.79l-6.77 9.311c-.077.113-.047.27.067.347.04.026.085.042.133.043h2c.17 0 .33-.082.43-.22l6.95-9.481h3.87l-6.78 9.32c-.077.107-.053.258.055.334.042.031.093.047.145.046h2.08c.155.003.302-.071.39-.2l6.9-9.5h2.41v5.73c0 .889-.721 1.609-1.611 1.609h-1.93c-.153.006-.296.079-.39.2l-1.27 1.76c-.083.11-.061.268.05.351.043.032.096.05.15.05h3.39c2.208 0 4-1.791 4-4v-6.761c0-.519-.42-.939-.939-.939"
            ></path>
            <path
              d="m126.14 15h-23.852c-.139.005-.25.12-.25.26v.62c-.004.762.609 1.385 1.371 1.39.002 0 .006 0 .001 0h6.209l-5.629 10.73c-.305.539-.113 1.222.426 1.525.174.1.373.148.574.145h19c.264.004.52-.08.73-.24.398-.316.535-.863.33-1.33l-3.102-6c-.051-.119-.168-.198-.299-.199h-1.811c-.188.002-.338.156-.336.344 0 .043.001.086.025.126l2.68 5h-15.439l5.381-10.18h13c.658-.019 1.193-.534 1.24-1.19v-.73c0-.144-.117-.26-.26-.26"
            ></path>
            <path
              d="m105.42 9.44h17.641c.725-.005 1.309-.595 1.309-1.32v-.66c0-.156-.123-.285-.279-.29h-19.721c-.166 0-.299.134-.299.3 0 .003 0 .007 0 .001v.6c-.006.746.594 1.354 1.34 1.36.0001 0 .005 0 .009 0"
            ></path>
            <path
              d="m66.69 6.33h-21.34c-.646 0-1.17.524-1.17 1.17 0 .003 0 .007 0 .001v22c0 .149.121.27.27.27h1.81c.149 0 .27-.12.27-.27v-20.82h19v17.12c0 .889-.721 1.609-1.61 1.609h-1.31c-.153-.002-.297.068-.39.189l-1.33 1.841c-.066.089-.048.214.04.28.034.025.077.039.12.039h2.85c2.159.002 3.93-1.711 4-3.869v-18.39c0-.652-.528-1.18-1.18-1.18"
            ></path>
            <path
              d="m61.43 24.63h2.08c.127-.0001.229-.104.228-.231 0-.038-.001-.075-.028-.108l-3.56-6.24 3.56-6.23c.066-.108.032-.25-.076-.316-.037-.023-.08-.035-.124-.034h-2.08c-.083.002-.159.048-.2.12l-2.38 4.17-2.39-4.17c-.042-.072-.117-.117-.2-.12h-2.08c-.127-.002-.232.099-.234.226-.0001.043.011.086.034.124l3.56 6.23-3.54 6.239c-.061.111-.02.251.092.312.033.019.07.028.108.028h2.08c.082.0001.158-.04.2-.11l2.39-4.18 2.38 4.18c.042.07.119.111.2.11"
            ></path>
            <path
              d="m54.47 18.15c.045-.074.045-.166 0-.24l-3.61-6.32c-.046-.072-.125-.117-.21-.12h-2.1c-.127-.002-.231.099-.234.226 0 .043.011.086.034.124l3.56 6.18-3.58 6.26c-.061.111-.02.252.092.313.033.018.07.027.108.027h2.1c.084.002.163-.04.21-.109l3.62-6.35"
            ></path>
            <path
              d="m145.37 13.89h-4.91l-2.539-4.45h10l-2.551 4.45m9.43 0h-6.799l2.539-4.45h1.41c.752 0 1.361-.609 1.361-1.36v-.64c0-.145-.115-.265-.262-.27h-8.729l-1.061-1.84c-.096-.175-.281-.283-.48-.28h-1.859c-.133-.007-.246.095-.252.228-.002.046.008.092.031.133l1 1.76h-8.859c-.152.005-.275.127-.279.28v.63c0 .751.607 1.36 1.359 1.36h1.42l2.539 4.45h-6.878c-.166 0-.301.134-.301.3v.62c0 .746.605 1.35 1.35 1.35h21.701c.729 0 1.32-.591 1.32-1.32v-.65c-.004-.154-.119-.281-.271-.301"
            ></path>
            <path
              d="m151.12 18c.625 0 1.131.506 1.131 1.13v9.47c0 .625-.506 1.131-1.131 1.131h-16.42c-.621-.006-1.125-.509-1.129-1.131v-9.47c.004-.622.508-1.124 1.129-1.13h16.42m-1.219 4.2v-2.11h-14v2.73h14v-.62m-14 5.441h14v-2.73h-14v2.73"
            ></path>
            <path
              d="m183.13 16.64v-.64c0-.132-.107-.24-.238-.24h-9.521v-4.91c-.004-.146-.125-.26-.27-.26h-.74c-.746-.005-1.354.595-1.359 1.34 0 .003 0 .006 0 .001v3.8h-7.85l.849-5.93c6.689-.32 13.51-1.13 16.289-1.49.707-.087 1.211-.73 1.123-1.438 0-.007-.002-.015-.002-.022l-.1-.73c-.016-.121-.127-.206-.246-.19-.002 0-.004 0-.004 0-1.48.2-10 1.32-18.12 1.65-.555.025-1.012.448-1.08 1l-1.049 8.15c-.072.62.371 1.181.99 1.253.029.003.059.006.09.007h9.11v7.76c0 .891-.719 1.615-1.609 1.62h-.391c-.166-.003-.322.076-.42.21l-1.23 1.7c-.088.127-.057.302.07.39.043.031.096.049.15.051h1.84c2.209 0 4-1.791 4-4v-7.731h8.41c.744 0 1.35-.604 1.35-1.35 0-.003 0-.006 0-.001"
            ></path>
            <path
              d="m167.05 20.09h-1.649c-.457 0-.881.229-1.131.61-1.129 1.75-2.73 4.88-4.301 7.38-.094.15-.047.348.102.441.051.031.109.049.17.049h1.5c.453.004.877-.227 1.119-.61 1.781-2.819 3.439-5.91 4.391-7.51.066-.114.027-.262-.088-.328-.035-.02-.072-.03-.113-.032"
            ></path>
            <path
              d="m183.82 28.08c-1.57-2.5-3.16-5.63-4.301-7.38-.246-.38-.668-.608-1.119-.61h-1.65c-.127-.006-.234.093-.24.219-.002.051.012.1.039.142.951 1.61 2.611 4.69 4.381 7.51.244.387.672.618 1.131.61h1.5c.17.004.313-.131.316-.303.002-.067-.018-.133-.057-.188"
            ></path>
          </g>
          <path
            d="M26.26,0H7.74C3.47,0.011,0.011,3.47,0,7.74v18.52C0.011,30.53,3.47,33.988,7.74,34h18.52
c4.271-0.012,7.729-3.47,7.74-7.74V7.74C33.989,3.47,30.53,0.011,26.26,0"
            fill="#dd001b"
          ></path>
          <path
            d="m19.13 19.08c-.297.389-.716.667-1.19.79-.684.202-1.422.077-2-.341-.695-.498-1.137-1.277-1.21-2.129-.041-.43 0-.865.12-1.28.398-1.294 1.373-2.332 2.64-2.81.322-.135.657-.236 1-.3.14.49.28 1 .43 1.51.19.68.39 1.36.55 2 .274.877.13 1.832-.39 2.589m1.32-8.659c-.09-.36-.23-.9-.34-1.3-.085-.308-.085-.632 0-.94.021-.084.055-.166.1-.24.187-.34.518-.575.9-.64.356-.048.716.049 1 .27.144.122.281.252.41.39.229.219.534.34.85.34.696.012 1.27-.542 1.282-1.238 0-.031 0-.062-.0001-.092.0001-.199-.047-.395-.14-.57-.15-.234-.336-.443-.55-.62-.414-.364-.898-.639-1.421-.81-.237-.077-.482-.131-.73-.16-.549-.067-1.105-.012-1.63.16-1.962.59-3.075 2.659-2.485 4.621.014.046.029.093.045.139 0 .21.16.6.21.8-.443.091-.877.219-1.3.38-2 .777-3.533 2.428-4.16 4.48-.191.71-.259 1.447-.2 2.18.136 1.604.97 3.066 2.28 4 2.122 1.465 5.02 1.027 6.61-1 1-1.354 1.326-3.096.87-4.72-.17-.65-.37-1.36-.57-2.06l-.21-.75c.847.217 1.626.639 2.27 1.23 2.236 2.188 2.652 5.634 1 8.29-1.592 2.416-4.296 3.864-7.19 3.85-4.926-.001-8.915-4-8.92-8.93-.0001-.438.032-.876.1-1.31.055-.337.128-.671.22-1 .1-.34.21-.67.34-1 .137-.318.291-.628.46-.93.164-.302.348-.592.55-.87.203-.278.419-.545.65-.8.232-.252.479-.489.74-.71.25-.22.53-.43.81-.63.284-.192.578-.369.88-.53.17-.08.34-.17.51-.24l.28-.12c.654-.273.963-1.026.69-1.68s-1.026-.963-1.68-.69l-.36.15-.66.32c-.392.201-.769.429-1.13.68-.347.249-.681.516-1 .8-.33.289-.644.596-.94.92-.3.313-.578.647-.83 1-.276.36-.53.738-.76 1.13-.217.39-.414.791-.59 1.2-.169.414-.313.838-.43 1.27-.126.439-.223.887-.29 1.34-.088.559-.131 1.124-.13 1.69-.028 6.324 5.076 11.473 11.4 11.5.001 0 .02 0 .03 0 3.753.001 7.26-1.869 9.33-5 2.308-3.669 1.714-8.456-1.42-11.45-1.291-1.192-2.947-1.915-4.7-2.05"
            fill="#fff"
          ></path>
        </svg>
      </div>
      <div class="playbtn">
        <div @click="toggleStat" class="center">
          <div :class="{ active: playState }" class="pauseBtn">></div>
          <img
            :class="{ active: !playState }"
            :src="songdetail.pic"
            alt=""
            ref="img"
          />
        </div>
      </div>
      <div class="lyric">
        <div class="title">
          {{ title1 }} <span>{{ songdetail.author }}</span>
        </div>
        <div class="content"><span>作曲：</span> {{ songdetail.author }}</div>
      </div>
      <div @click="openapp" class="sing">
        <img alt="" src="~@/assets/musicStreet.png"/>
      </div>
    </div>
    <div class="pull-down-btn">
      <span>^</span>
    </div>
    <div class="other-playlist" v-if="playlist.length != 0">
      <h2 class="title">包含这首歌的歌单</h2>
      <div class="content">
        <div
          :key="item.id"
          @click="linkbtn(item.id)"
          class="item"
          v-for="item of playlist"
        >
          <img :src="item.coverImgUrl" alt=""/>
          <div class="tip">{{ item.playCount | unit }}</div>
          <div class="title">{{ item.name }}</div>
          <div class="author">{{ item.nickname }}</div>
        </div>
      </div>
    </div>
    <h2 class="title">喜欢这首歌的人也听</h2>
    <vMusicList>
      <musicItem
        :key="item.id"
        :musicoptions="item"
        @click.native="linkBtn(index)"
        v-for="(item, index) of othersongs"
      >
        <div class="order"><img :src="item.url" alt=""/></div>
      </musicItem>
    </vMusicList>
    <Commend :commentList="commentList"
    ><h2 class="title">精彩评论</h2></Commend
    >
  </div>
</template>

<script>
  import vMusicList from "@/components/musicList";
  import musicItem from "@/components/musicItem";
  import Commend from "./children/vCommend";
  import mixin from "@/util/util.js";

  export default {
    components: {
      vMusicList,
      musicItem,
      Commend,
    },
    mixins: [mixin],
    created() {
      this.getData();
      // // 获取歌曲播放地址
      // //`https://music.163.com/song/media/outer/url?id=${this.$route.params.playId}.mp3`
      // // this.$axios
      // //   .get(
      // //     `http://106.12.77.52:3000/song/url?id=${this.$route.params.playId}`
      // //   )
      // //   .then((res) => {
      // //     this.songdetail.url = res.data.data[0].url
      // //     this.$forceUpdate()
      // //   });
      // //获取歌词
    },
    computed: {
      title1() {
        return this.songdetail.name + " (" + this.songdetail.title + ") - ";
      },
    },
    methods: {
      //歌单详情跳转
      linkbtn(id) {
        this.$router.push({path: "/songslist", query: {id: id}});
      },
      //其他喜欢点击跳转
      linkBtn(index) {
        this.$router.push(
          {name: "play", params: {playId: this.othersongs[index].id}},
          () => {
            this.$nextTick();
          }
        );
      },
      //切换音乐播放状态
      toggleStat() {
        this.playState = !this.playState;
        if (!this.playState) {
          this.$refs.audioEl.play();
        } else {
          this.$refs.audioEl.pause();
        }
      },
      //获取数据函数
      getData() {
        //获取相似音乐
        this.$axios.get(`http://106.12.77.52:3000/simi/song?id=${this.$route.params.playId}`)
          .then((res) => {
            let arr = [];
            res.data.songs.forEach((item) => {
              let obj = {};
              obj.title = item.name;
              obj.id = item.id;
              obj.author = item.album.name;
              obj.url = item.album.blurPicUrl;
              obj.nickname = item.artists[0].name;
              arr.push(obj);
            });
            this.othersongs = arr;
          });
        //获取歌曲详情
        this.$axios.get(`http://106.12.77.52:3000/song/detail?ids=${this.$route.params.playId}`)
          .then((res) => {
            const obj = res.data.songs[0];
            var obj1 = {};
            obj1.name = obj.name;
            obj1.id = obj.id;
            obj1.title = typeof obj.tns == "string" ? obj.tns[0] : "溜了溜了";
            obj1.pic = obj.al.picUrl;
            obj1.author = "";
            obj.ar.forEach((item) => {
              obj1.author += item.name + "/";
            });
            obj1.author = obj1.author.slice(0, -1);
            this.songdetail = obj1;
            this.$forceUpdate();
          });
        //获取相似歌单
        this.$axios
          .get(
            `http://106.12.77.52:3000/simi/playlist?id=${this.$route.params.playId}`
          )
          .then((res) => {
            // console.log(res.data.playlists,'fffffffffffff')
            let arr = [];
            res.data.playlists.forEach((item) => {
              let obj = {};
              obj.name = item.name;
              obj.id = item.id;
              obj.coverImgUrl = item.coverImgUrl;
              obj.playCount = item.playCount;
              obj.nickname = item.creator.nickname;
              arr.push(obj);
            });
            this.playlist = arr;
            this.playlist.length = 3;
            // console.log(this.playlist)
          });
        // 获取歌曲评论
        this.$axios
          .get(
            `http://106.12.77.52:3000/comment/music?id=${this.$route.params.playId}`
          )
          .then((res) => {
            // console.log(res.data.hotComments,2222222);
            // this.songdetail.url = res.data.data[0].url
            let arr = [];
            res.data.hotComments.forEach((item) => {
              let obj = {};
              obj.locationInfo = item.locationInfo;
              obj.nickname = item.user.nickname;
              obj.avatarUrl = item.user.avatarUrl;
              obj.vipType = item.user.vipType;
              obj.userId = item.user.userId;
              obj.commentId = item.commentId;
              obj.content = item.content;
              obj.time = item.time;
              obj.likedCount = item.likedCount;
              arr.push(obj);
            });
            this.commentList = arr;
          });
        console.log(this.$refs.audioEl);
        // this.$refs.audioEl.oncanplay = function(){
        //   this.$refs.audioEl.play()
        // }
      },
    },
    data() {
      return {
        songdetail: {},
        commentList: [],
        playlist: [],
        othersongs: [],
        playState: false,
        playId: "",
      };
    },
    watch: {
      $route: {
        handler() {
          this.getData();
        },
        deep: true,
      },
    },
  };
</script>

<style scoped>
  .down {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #594a3d;
  }

  .down a {
    width: 3.2rem;
    height: 0.8rem;
    border-radius: 30%/100%;
    border: 0.02rem solid #9b443c;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.32rem;
  }

  .down a.open {
    color: red;
  }

  .down a.download {
    color: white;
    background-color: red;
  }

  .play {
    background-color: #646363;
    position: relative;
    color: white;
    height: calc(100vh - 1.2rem);
    overflow: auto;
  }

  .playmain {
    height: 11rem;
    overflow: hidden;
  }

  .playmain .logo {
    position: absolute;
    width: 1.84rem;
    height: 0.34rem;
    left: 0.34rem;
    top: 0.34rem;
    color: white;
    font-size: 0.26rem;
  }

  .logo svg {
    width: 100%;
    height: 100%;
  }

  .playbtn {
    width: 5.92rem;
    height: 5.92rem;
    margin: 1.5rem auto 0.5rem;
    background-image: url("~@/assets/playbg1.png");
    background-size: contain;
    border-radius: 50%;
    overflow: hidden;
  }

  .playbtn .center {
    width: 100%;
    height: 100%;
    background-image: url("~@/assets/playbg.png");
    background-size: contain;
    text-align: center;
    position: relative;
  }

  .center img {
    width: 60%;
    height: 60%;
    margin-top: 1.2rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .center img.active {
    animation: imgrotate 90s linear forwards;
  }

  .center img.pause {
    animation-play-state: paused;
  }

  @keyframes imgrotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(3600deg);
    }
  }

  .playbtn .center .pauseBtn {
    width: 1rem;
    height: 1rem;
    border: 0.02rem solid #aaa;
    border-radius: 50%;
    text-align: center;
    line-height: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  .playbtn .center .pauseBtn.active {
    display: block;
  }

  .plus {
    position: absolute;
    top: 0px;
    left: 60%;
    transform: translateX(-50%);
    width: 1.92rem;
    height: 2.74rem;
    z-index: 100;
    background-color: transparent;
    transform-origin: 10% 0;
  }

  .plus:before {
    content: "";
    height: 100%;
    display: block;
    background-image: url("~@/assets/needle-plus.png");
    background-size: contain;
  }

  .plus.pause {
    transform: rotate(-10deg);
  }

  .lyric {
    margin-top: 0.5rem;
    padding: 0 0.7rem;
    text-align: center;
    color: white;
  }

  .lyric .title {
    font-size: 0.36rem;
    line-height: 1.1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .lyric .title span {
    color: #867d79;
  }

  .content {
    font-size: 0.32rem;
  }

  .lyric .content {
    height: 0.9rem;
  }

  .sing {
    margin: auto;
    width: 2rem;
    border-radius: 40%/100%;
    border: 0.02rem solid #594e49;
    color: #6488d7;
  }

  .sing img {
    width: 100%;
  }

  .pull-down-btn {
    width: 100%;
    height: 0.72rem;
    text-align: center;
    margin-top: 0.4rem;
  }

  .other-playlist {
    padding: 0 0.2rem;
    margin-bottom: 0.2rem;
  }

  .other-playlist .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .other-playlist .content .item {
    position: relative;
    width: 32%;
    overflow: hidden;
  }

  .other-playlist .content .item img {
    width: 100%;
  }

  .other-playlist .content .item .tip {
    position: absolute;
    right: 0.2rem;
    top: 0.1rem;
  }

  .other-playlist .content .item .title {
    font-size: 0.26rem;
    padding: 0 0.1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 0.4rem;
  }

  .other-playlist .content .item .author {
    font-size: 0.24rem;
    color: #b0acab;
    line-height: 0.4rem;
  }

  h2.title {
    color: white;
    font-size: 0.32rem;
    line-height: 0.36rem;
    padding-left: 0.2rem;
    margin-bottom: 0.24rem;
  }

  .order {
    width: 0.8rem;
    margin-right: 0.08rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
  }

  .order img {
    width: 100%;
  }

  /* audio{
      display: none;
    } */
</style>
