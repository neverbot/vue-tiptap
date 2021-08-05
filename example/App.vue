<template>
  <div id="app">
    <h1>vue-tiptap example</h1>
    <editor
      initial-content="
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
      :active-buttons="[
        'bold',
        'italic',
        'strike',
        'underline',
        'code',
        'paragraph',
        'h1',
        'h2',
        'h3',
        'bulletList',
        'orderedList',
        'blockquote',
        'codeBlock',
        'horizontalRule',
        'undo',
        'redo'
      ]"
      @update="test"
    />
  </div>
</template>

<script>
import Editor from '@/components/Editor.vue';

export default {
  name: 'App',
  components: {
    Editor
  },
  created() {
    document.title = 'vue-tiptap example';
  },
  methods: {
    test(something) {
      // eslint-disable-next-line no-console
      console.log(something);
    }
  }
};
</script>

<style lang="sass">
@import '../src/sass/main.scss'
</style>

<style lang="css">
#app {
  display: flex;
  padding-top: 100px;
  box-sizing: border-box;
  flex-flow: column;
  align-items: center;
  font-family: -apple-system, 'Noto Sans', 'Helvetica Neue', Helvetica,
    'Nimbus Sans L', Arial, 'Liberation Sans', 'PingFang SC',
    'Hiragino Sans GB', 'Noto Sans CJK SC', 'Source Han Sans SC',
    'Source Han Sans CN', 'Microsoft YaHei', 'Wenquanyi Micro Hei',
    'WenQuanYi Zen Hei', 'ST Heiti', SimHei, 'WenQuanYi Zen Hei Sharp',
    sans-serif;
}
</style>
