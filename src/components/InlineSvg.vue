<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      icons: import.meta.glob(`../assets/icons/*.svg`, {
        query: '?raw',
        import: 'default',
        eager: true,
      }),
    };
  },

  computed: {
    svg() {
      return this.icons[`../assets/icons/${this.name}.svg`];
    },
  },
};
</script>

<template>
  <i v-html="svg" />
</template>
