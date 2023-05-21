<template>
  <div class="page-title">
    <app-icon
      v-if="$route.name !== 'home'"
      class="page-title__back"
      icon="mdiArrowLeft"
      title="На главную"
      @click="$router.push('/')"
    ></app-icon>
    <h1 class="page-title__name">{{ title }}</h1>
  </div>
  <div v-if="links.length" class="page-title__links">
    <a v-for="link in links" :key="link.url" class="page-title__link" :href="link.url" target="_blank">
      <app-icon icon="mdiLinkVariant" :size="16"></app-icon>
      {{ link.name }}
    </a>
  </div>
</template>

<script>
import AppIcon from '../ui/Icon.vue';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    links: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    AppIcon,
  },
  name: 'page-title',
};
</script>

<style lang="stylus">
@require '../../assets/colors.styl'

.page-title
  display flex
  column-gap 20px
  align-items center
  &__back
    cursor pointer
  &__links
    display flex
    column-gap 20px
    margin 10px 0 20px
  &__link
    text-decoration none
    border-bottom 2px solid currentColor
    font-size 20px
    color inherit
  &__name
    color $titleColor
    font-size 40px
    margin 0
</style>
