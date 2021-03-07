<template>
  <img class="avatar" :src="avatar" alt="头像" />
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatar: {
      type: String,
      default: require('../../assets/img/avatar.png'),
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
}
</style>
