<template>
  <div class="commend">
    <slot></slot>
    <CommentItem v-for="item of commentList" :key="item.time" :commentitem="item"></CommentItem>
  </div>
</template>

<script>
  import CommentItem from './vCommentItem'
  export default {
    name: "vCommend",
    components: {
      CommentItem
    },
    props: {
      commentList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .commend{
    /*margin-top: ;*/
  }
</style>
