<template>
  <swiper
    ref="mySwiper"
    :options="swiperOption"
  >
    <swiper-slide v-for="(item,index) of recommendList" :key="item.encodeId+index">
      <img :src="item.imageUrl" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>

    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import 'swiper/swiper-bundle.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {

  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // swiperOptions: {
      //   pagination: {
      //     el: ".swiper-pagination",
      //   },
      //   loop: true,
      //   direction: "horizontal",
      //   speed: 600,
      //   prevButton: ".swiper-button-prev", //上一张
      //   nextButton: ".swiper-button-next", //下一张
      //   autoplay: 2000,
      //   // Some Swiper option/callback...
      // },
      swiperOption: {
        loop: true,
        loopAdditionalSlides: 100,
        centeredSlides: true,
        autoplay:true,
        autoplayDisableOnInteraction : false, //鼠标悬浮停止自动轮播
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      },

    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  // mounted() {
  //   console.log("Current Swiper instance object", this.swiper);
  //   this.swiper.slideTo(3, 1000, false);
  // },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
