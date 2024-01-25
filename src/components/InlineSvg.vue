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
        as: 'raw',
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
