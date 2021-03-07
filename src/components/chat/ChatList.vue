<template>
  <div class="chat-list-wrap">
    <div
      class="chat-list"
      ref="chatList"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="300"
    >
      <!-- 消息组件 -->
      <MsgBox v-for="chatObj in chatList" :key="chatObj.id" v-bind="chatObj" />
      <!-- 加载提示 -->
      <div v-if="!isLastPage" class="loading-tips">加载中...</div>
    </div>
    <!-- 新消息提醒 -->
    <div
      v-show="newChatList.length > 0"
      class="new-msg-tips"
      @click="viewNewChat"
    >
      新消息通知
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MsgBox from './MsgBox'

export default {
  name: 'ChatList',
  components: {
    MsgBox,
  },

  data() {
    return {
      // 消息列表
      chatList: [],
      // 是否最后一页
      isLastPage: false,
      // 是否正在加载
      busy: false,
      // 当前页码
      pageNo: 1,
      // 最新消息列表
      newChatList: [],
    }
  },

  mounted() {
    setInterval(() => {
      console.log('获取最新消息列表')
      this.queryNewChatList()
    }, 5000)
  },

  methods: {
    // 加载更多
    loadMore() {
      if (this.isLastPage) return

      // 正在加载
      this.busy = true
      // 获取消息列表
      this.queryChatList()
    },

    // 获取消息列表
    async queryChatList() {
      let { data } = await axios.get('queryChatList', {
        params: {
          pageNo: this.pageNo,
        },
      })

      this.chatList.push(...data.chatList)

      // 是否最后一页
      this.isLastPage = this.pageNo >= data.totalPage

      // 页码加1
      this.pageNo++
      // 加载结束
      this.busy = false

      console.log(
        'pageNo=' + this.pageNo,
        'busy=' + this.busy,
        'isLastPage=' + this.isLastPage,
        data,
      )
    },

    // 获取最新消息列表
    async queryNewChatList() {
      let { data } = await axios.get('queryNewChatList')

      this.newChatList.unshift(...data.chatList)
    },

    // 查看最新消息
    viewNewChat() {
      this.chatList.unshift(...this.newChatList)
      this.newChatList = []

      this.$refs.chatList.scrollTo(0, 0)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chat-list-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;

  .chat-list {
    padding: 20px 10px;
    max-height: 100vh;

    overflow-y: auto;
    transform: rotateX(180deg);
    -webkit-overflow-scrolling: touch;

    .loading-tips {
      line-height: 2;
      color: #666;
      text-align: center;
      font-size: 16px;

      transform: rotateX(180deg);
    }
  }
  // 新消息提醒
  .new-msg-tips {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    background-color: #fff;
    color: green;
  }
}
</style>
