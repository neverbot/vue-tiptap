<template>
  <div
    class="icon"
    :class="[`icon--${name}`, `icon--${size}`, { 'has-align-fix': fixAlign }]"
  >
    <InlineSvg :name="`${name}`" />
  </div>
</template>

<script>
import InlineSvg from './InlineSvg.vue';

export default {
  // created: function() {}
  components: {
    InlineSvg,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
    modifier: {
      type: Object,
      default: null,
    },
    fixAlign: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
