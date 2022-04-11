<template>
  <div class="project-detail">
    <div v-if="description" class="project-detail__item">
      <div class="project-detail__description">{{ description }}</div>
    </div>
    <video-list class="project-detail__item" :videos="videos"></video-list>
    <picture-list class="project-detail__item" :images="images"></picture-list>
  </div>
</template>

<script>
import VideoList from './multimedia/VideoList.vue';
import PictureList from './multimedia/PictureList.vue';

export default {
  props: {
    description: {
      type: String,
      default: '',
    },
    videos: {
      type: Array,
      default: () => [],
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    VideoList,
    PictureList,
  },
  name: 'project-detail',
};
</script>

<style lang="stylus">
.project-detail
  margin 40px 0
  &__item + &__item
    margin-top 20px
  &__description
    font-size 20px
</style>
