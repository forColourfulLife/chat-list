<template>
  <div class="msg-system">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'MsgSystem',
  props: {
    content: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.msg-system {
  flex-basis: 100%;
  color: #666;
  font-size: 14px;
  text-align: center;
}
</style>
