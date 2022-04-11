<template>
  <div v-if="images.length" class="picture-list">
    <div class="picture-list__wrapper">
      <div
        v-for="(image, index) in images"
        :key="image.src"
        class="picture-list__item"
        @click="showImg(index)"
      >
        <picture-card :image="image.src" :description="image.title"></picture-card>
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="images"
      :index="index"
      move-disabled
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';
import PictureCard from './PictureCard.vue';

export default {
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false;
    },
  },
  data() {
    return {
      visible: false,
      index: 0,
    };
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    VueEasyLightbox,
    PictureCard,
  },
  name: 'picture-list',
};
</script>

<style lang="stylus">
@require '~@/assets/smartgrid.styl'

.picture-list
  &__wrapper
    row-flex()
  &__item
    col()
    col-size(24)
    col-size-w500(24)
    col-size-w1000(12)
    col-size-w1200(8)
    margin-bottom $offset
</style>
