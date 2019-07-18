<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <span v-for="actionName in activeButtons" :key="actionName">
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive[actionName]() }"
            @click="`commands.${actionName}`"
          >
            <icon :name="`${actionName}`" />
          </button>
        </span>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <icon name="italic" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <icon name="strike" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <icon name="underline" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <icon name="code" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <icon name="paragraph" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >H1</button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >H2</button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >H3</button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <icon name="ul" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <icon name="ol" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <icon name="quote" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <icon name="code" />
        </button>

        <button class="menubar__button" @click="commands.horizontal_rule">
          <icon name="hr" />
        </button>

        <button class="menubar__button" @click="commands.undo">
          <icon name="undo" />
        </button>

        <button class="menubar__button" @click="commands.redo">
          <icon name="redo" />
        </button>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import Icon from './Icon'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

export default {
  name: 'editor',
  components: {
    EditorContent,
    EditorMenuBar,
    Icon
  },
  // computed: {
  //   buttons: this.activeButtons
  // },
  props: {
    initialContent: {
      type: String,
      required: true,
      default: '<em>editable text</em>'
    },
    activeButtons: {
      type: Array,
      validator: function(list) {
        for (let el of list) {
          console.log(el)
          // The value must match one of these strings
          if (
            [
              'blockquote',
              'bullet_list',
              'code_block',
              'hard_break',
              'heading',
              'horizontal_rule',
              'list_item',
              'ordered_list',
              'todo_item',
              'todo_list',
              'link',
              'bold',
              'code',
              'italic',
              'strike',
              'underline',
              'history'
            ].indexOf(el) === -1
          ) {
            return -1
          }
        }
        return 1
      },
      default: ['bold', 'italic']
    }
  },

  data() {
    return {
      html: '',
      json: '',
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: this.initialContent
      })
    }
  },

  beforeDestroy() {
    this.editor.destroy()
  },

  created() {
    this.html = this.editor.getHTML()
    this.json = this.editor.getJSON()

    this.editor.on('update', () => {
      this.html = this.editor.getHTML()
      this.json = this.editor.getJSON()
      this.$emit('update', this.html)
    })
  }
}
</script>

<style lang="css" scoped>
</style>
