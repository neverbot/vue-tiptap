<template>
  <div id="app">
    <h1>vue-tiptap example</h1>
    <editor
      @update="test"
      initialContent="
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>"
      v-bind:activeButtons="['bold', 'italic']"
    />
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
  },
  methods: {
    test(something) {
      console.log(something)
    }
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

.editor {
  align-items: center;
  color: #333;
}
</style>
