<template>
  <div id="app">
    <ChatList/>
  </div>
</template>

<script>
import ChatList from './components/chat/ChatList.vue'

export default {
  name: 'App',
  components: {
    ChatList
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
</style>
