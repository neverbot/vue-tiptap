<template>
  <div class="editor">
    <div class="menubar">
      <span v-for="actionName in activeButtons" :key="actionName">
        <button
          v-if="actions[actionName]"
          class="menubar__button"
          :class="{ 'is-active': isActive(actionName) }"
          @click="run(actionName)"
        >
          <icon
            v-if="actions[actionName].icon"
            :name="actions[actionName].icon"
          />
          <template v-else>{{ actions[actionName].label }}</template>
        </button>
      </span>
    </div>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import Icon from './Icon.vue';
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { actions, actionNames } from '../actions.js';

export default {
  name: 'Editor',
  components: {
    EditorContent,
    Icon,
  },
  props: {
    initialContent: {
      type: String,
      required: false,
      default: '<em>editable text</em>',
    },
    activeButtons: {
      type: Array,
      validator: (list) => list.every((el) => actionNames.includes(el)),
      default: () => ['bold', 'italic'],
    },
  },
  emits: ['update'],
  data() {
    return {
      html: '',
      json: '',
      editor: null,
    };
  },
  computed: {
    // Not in data(): the map is static, so there is nothing to make reactive.
    actions: () => actions,
  },
  created() {
    this.editor = new Editor({
      content: this.initialContent,
      // StarterKit already bundles Underline; listing it again would
      // register the extension twice.
      extensions: [StarterKit],
    });

    this.html = this.editor.getHTML();
    this.json = this.editor.getJSON();

    this.editor.on('update', () => {
      this.html = this.editor.getHTML();
      this.json = this.editor.getJSON();
      this.$emit('update', this.html);
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  },
  methods: {
    isActive(actionName) {
      const action = actions[actionName];
      return action.isActive ? action.isActive(this.editor) : false;
    },
    run(actionName) {
      actions[actionName].run(this.editor.chain().focus()).run();
    },
  },
};
</script>

<style lang="css" scoped></style>
