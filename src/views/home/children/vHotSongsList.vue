<template>
  <div class="hotsongslist">
    <div class="logo">
      <img src="~assets/index_icon_2x.png" alt="">
      <div class="time">
        <span>更新日期</span>
        <span>{{objlist.trackNumberUpdateTime}}</span>
      </div>
    </div>
    <vMusicList>
      <musicItem
        v-for="(item,index) of objlist.hotsongs" :key="item.id" :musicoptions="item" @click.native="linkBtn(index)">
        <div class="order">{{index +1 | asd}}</div>
      </musicItem>
    </vMusicList>
  </div>
</template>

<script>
  import vMusicList from "@/components/musicList";
  import musicItem from "@/components/musicItem";
  import mixin from '@/util/util'
export default {
  mixins: [mixin],
  components: {
    vMusicList,musicItem
  },
  created() {
    console.log(new Date(1604535779746))
    this.$axios.get('http://106.12.77.52:3000/playlist/detail?id=3778678')
      .then(res => {
        let objlist = {}
        let newarr = res.data.playlist.tracks
        objlist.coverImgUrl = res.data.playlist.coverImgUrl
        objlist.hotsongs= []
        console.log(res.data.playlist.trackNumberUpdateTime)
        objlist.trackNumberUpdateTime = this.getdata(parseInt(res.data.playlist.trackNumberUpdateTime))
        newarr.length = 20
        newarr.forEach(item => {
          let obj = {}
          obj.title = item.name
          obj.id =item.id
          obj.other = item.al.name
          obj.nickname = item.ar[0].name
          objlist.hotsongs.push(obj)
        })
        this.objlist = objlist
        console.log(this.objlist)
      })
  },
  data() {
    return {
      hotsongs: [],
      objlist: {}
    }
  },
  methods: {
    linkBtn(index){
      this.$router.push({name:'play', params: {playId: this.objlist.hotsongs[index].id}})
      this.$nextTick()
    },
    getdata(value) {
      var date = new Date(value)
      var month = date.getMonth() + 1
      var day = date.getDate()
      return month + '月' + day + '日'
    }
  }
}
</script>

<style scoped>
  .hotsongslist{
    width: 100%;
  }
  .order{
    width: .8rem;
    color: #e45355;
    margin-right: .08rem;
    font-size: .36rem;
    display: flex;
    align-items: center ;
    justify-content: center;
  }
  .logo{
    padding: .4rem;
    height: 2.9rem;
    background-image: url('~@/assets/hot_music_bg_2x.jpg');
    background-size: contain;
    overflow: hidden;
    box-sizing: border-box;
  }
  .logo img{
    width: 2.54rem;
    height: 1.34rem;
  }
  .time{
    font-size: .26rem;
    color: white;
    margin-top: .1rem;
  }
</style>
