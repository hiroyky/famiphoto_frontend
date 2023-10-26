<template>
  <div>
    <ul class="photo_list">
      <li v-for="item in value" :key="item.id" class="photo_list__item">
        <img :src="item.thumbnailUrl" :alt="item.name" class="photo_list__item__img" @click="onPhotoItemClick(item)">
      </li>
    </ul>
    <div v-intersect="onIntersectNext">
    </div>
  </div>
</template>

<script setup lang="ts">

import type {PhotosQuery} from "~/types/api-gql";
import type {Ref} from "vue";

interface Props {
  value: PhotosQuery['photos']['nodes']
  loading?: boolean
}
withDefaults(defineProps<Props>(), {
  value: () => [],
  loading: false
})

const emit =defineEmits<{
  photoClick: [ id: string ]
  intersectNext: []
}>()
function onPhotoItemClick(el :{ id: string }) {
  emit('photoClick', el.id)
}

function onIntersectNext(isIntersecting: boolean, _1: IntersectionObserverEntry[], _2: IntersectionObserver,) {
  if (isIntersecting) {
    emit('intersectNext')
  }
}

</script>

<style lang="scss" scoped>
.photo_list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap:10px;

  &__item {
    flex: 1 1 auto;
    height: 300px;
    position: relative;

    &__img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      object-fit: contain;
      cursor: pointer;
    }
  }
}

</style>