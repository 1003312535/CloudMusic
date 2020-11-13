<template>
    <div class="topNav">
      <h1>
        <img src="" alt="网易云音乐" class="" @click="$router.push('/')">
      </h1>
      <div class="download" @click="openapp">下载APP</div>
    </div>
</template>

<script>
import util from '@/util/util'
export default {
  mixins: [util]
};
</script>

<style scoped>
.topNav {
  position: fixed;
  width: 100%;
  z-index:100;
  box-sizing: border-box;
  height: 1.68rem;
  background-color: #d43c33;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.download{
  width: 2rem;
  height: .72rem;
  background-color: #fff;
  color: #d43c33;
  font-size: .32rem;
  line-height: .72rem;
  text-align: center;
  border-radius: 40%/100%;
}
</style>