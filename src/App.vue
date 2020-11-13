<template>
  <div id="app">
    <test></test>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import test from '@/views/test'
export default {
  name: 'App',
  components: {
    test
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + new Date()
        : this.$route + new Date();
    }
  }
}
</script>

<style>
html,body,#app {
  width: 100%;
  height: 100vh;
}
body{
  font-size: .34rem;

}
</style>
