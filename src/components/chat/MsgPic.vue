<template>
  <div class="msg-pic">
    <img class="pic" :src="content" alt="图片" />
  </div>
</template>

<script>
export default {
  name: 'MsgPic',
  props: {
    content: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.msg-pic {
  .pic {
    max-width: 100%;
  }
}
</style>
