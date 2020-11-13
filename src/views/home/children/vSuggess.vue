<template>
  <div class="asdsadsad">
    <HisSug :old-search="suggestlist"></HisSug>
  </div>
</template>

<script>
  import HisSug from './historyorsuggess'
  export default {
    name: "vSuggess",
    methods: {

    },
    components: {
      HisSug
    },
    data() {
      return {
        suggestlist: []
      }
    },
    props: {
      suggess:String,
      default: ''
    },
    created() {
      this.$axios
      .get("http://127.0.0.1:3000/search/suggest?keywords"+this.suggess+"&type=mobile")
      .then((res) => {
        console.log(res.data.result.allMatch,1111111);
        this.suggestlist = res.data.result.allMatch;
      });
      console.log(suggess)
    }
  }
</script>

<style scoped>

</style>
