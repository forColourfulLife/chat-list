<template>
  <div class="msg-box" :class="{ user: isUser === '1' }">
    <!-- 头像 -->
    <Avatar class="avatar" v-if="type !== 'system'" :avatar="avatar" />
    <!-- 不同类型消息组件 -->
    <component class="msg" :is="'Msg-' + type" :content="content" />
  </div>
</template>

<script>
import Avatar from '../common/Avatar'
import MsgText from './MsgText'
import MsgPic from './MsgPic'
import MsgSystem from './MsgSystem'

export default {
  name: 'MsgBox',
  components: {
    Avatar,
    MsgText,
    MsgPic,
    MsgSystem,
  },
  props: {
    id: [String, Number],
    type: String,
    isUser: String,
    avatar: String,
    content: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.msg-box {
  display: flex;
  margin-bottom: 20px;

  transform: rotateX(180deg);

  &.user {
    flex-direction: row-reverse;
  }

  .avatar {
    flex-shrink: 0;
  }
}
</style>
