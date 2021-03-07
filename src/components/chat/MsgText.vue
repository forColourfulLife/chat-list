<template>
  <div class="msg-text" v-html="content">
    <!-- {{ content }} -->
  </div>
</template>

<script>
export default {
  name: 'MsgText',
  props: {
    content: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.msg-text {
  flex-basis: 80%;
  padding: 10px;
  background-color: #fff;
  font-size: 16px;
  word-break: break-all;
}
</style>
