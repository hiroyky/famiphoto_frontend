<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <div v-for="photo in photos">
          <nuxt-link :to="`/photos/${photo.id}`">
          <img :src="photo.thumbnailUrl" :alt="photo.name" />
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

import PhotoList from "~/components/modules/PhotoList.vue";
import usePhotoListStore from "~/stores/photo-list-store";
import path from "path";
import type {PhotoQuery, PhotosQuery} from "~/types/api-gql";

const photoListStore = usePhotoListStore()

const {data: photos} = useAsyncData(async () => {
  await photoListStore.getPhotos({  limit: 10 })
  return photoListStore.photos
})



function onPhotoClick(id: string) {
  navigateTo(path.join('photos', id))
}

</script>