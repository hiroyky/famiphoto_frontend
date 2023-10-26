<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <photo-list :value="photos" @photo-click="onPhotoClick" @intersect-next="onIntersectNext"></photo-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

import PhotoList from "~/components/modules/PhotoList.vue";
import {usePhotoListStore} from "~/stores/photo-list-store";
import path from "path";

const photoListStore = usePhotoListStore()

const offset = ref(0)
const limit = 20

const {data: photos} = useAsyncData(async () => {
  await photoListStore.getPhotos({  limit: 20 , offset: offset.value })
  return photoListStore.photos
}, { watch: [ offset ] })

function onPhotoClick(id: string) {
  navigateTo(path.join('photos', id))
}

function onIntersectNext() {
  offset.value += limit
}

</script>