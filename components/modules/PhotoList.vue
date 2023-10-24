<template>
  <ul class="photo_list">
    <li v-for="item in value" :key="item.id" class="photo_list__item">
      <img :src="item.thumbnailUrl" :alt="item.name" class="photo_list__item__img" @click="onPhotoItemClick(item)">
    </li>
  </ul>
</template>

<script setup lang="ts">

import type {PhotosQuery} from "~/types/api-gql";
import type {Ref} from "vue";

interface Props {
  value: PhotosQuery['photos']['nodes']
}
withDefaults(defineProps<Props>(), {
  value: () => []
})

const emit =defineEmits<{
  photoClick: [ id: string ]
}>()
function onPhotoItemClick(el :{ id: string }) {
  emit('photoClick', el.id)
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