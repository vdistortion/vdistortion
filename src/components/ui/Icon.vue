<template>
  <svg-icon
    type="mdi"
    :path="path"
    :size="size"
  ></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowLeft, mdiLinkVariant } from '@mdi/js';

export default {
  computed: {
    path() {
      return this.icons[this.icon];
    },
  },
  data() {
    return {
      icons: {
        mdiArrowLeft,
        mdiLinkVariant,
      },
    };
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  components: {
    SvgIcon,
  },
  name: 'app-icon',
};
</script>
