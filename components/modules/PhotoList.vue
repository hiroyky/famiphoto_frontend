<template>
  <ul class="photo_list">
    <li v-for="item in modelValue" :key="item.id" class="photo_list__item">
      <img :src="item.thumbnailUrl" :alt="item.name" class="photo_list__item__img" @click="onPhotoItemClick(item)">
    </li>
  </ul>
</template>

<script setup lang="ts">

import {Photo} from "~/types/api-gql";
import {PropType} from "vue";

defineProps({
  modelValue: {
    type: Array as PropType<Photo[]>,
    default: []
  }
})

const emit =defineEmits<{
  photoClick: [ id: string ]
}>()
function onPhotoItemClick(el :{ id: string }) {
  emit('photoClick', el.id)
}

</script>