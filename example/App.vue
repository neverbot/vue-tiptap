<template>
  <div id="app">
    <h1>vue-tiptap example</h1>
    <editor />
  </div>
</template>

<script>
import Editor from '@/Editor.vue'

export default {
  name: 'App',
  components: {
    Editor
  },
  created() {
    document.title = 'vue-tiptap example'
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100vh;
  padding-top: 100px;
  box-sizing: border-box;
  flex-flow: column;
  align-items: center;
  font-family: -apple-system, 'Noto Sans', 'Helvetica Neue', Helvetica, 'Nimbus Sans L', Arial, 'Liberation Sans', 'PingFang SC',
    'Hiragino Sans GB', 'Noto Sans CJK SC', 'Source Han Sans SC', 'Source Han Sans CN', 'Microsoft YaHei', 'Wenquanyi Micro Hei',
    'WenQuanYi Zen Hei', 'ST Heiti', SimHei, 'WenQuanYi Zen Hei Sharp', sans-serif;
}

.component-name {
  flex-grow: 1;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: #333;
}
</style>
