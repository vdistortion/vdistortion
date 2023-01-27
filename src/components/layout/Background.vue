<template>
  <vue-particles v-if="color" class="background" :color="color" :linesColor="color"></vue-particles>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  watch: {
    currentRouteName(name) {
      if (name && ['yulianna-home', 'yulianna-view'].includes(this.$route.name)) {
        this.color = '#ff0000';
      } else {
        this.color = '#99a1b3';
      }
    },
  },
  data() {
    return {
      color: null,
    };
  },
  name: 'the-background',
};
</script>

<style lang="stylus">
.background
  position fixed
  width 100%
  height 100vh
  z-index -1
</style>
