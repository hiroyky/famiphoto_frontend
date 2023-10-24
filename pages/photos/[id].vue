<template>
  <v-container fluid="">
    <v-row justify="center" align="center">
      <v-col>
        <nuxt-link to="/">return </nuxt-link>
        <v-img v-if="!pending"></v-img>
        {{photo}}
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import usePhotoStore from "~/stores/photo-store";

const route = useRoute()
const id = route.params.id as string

const { pending, data: photo, error, status} = await useAsyncData(`photo-${id}`, async () => {
  const photoStore = usePhotoStore()
  await photoStore.getPhoto(id)
  console.log(photoStore.photo)
  return photoStore.photo
})

</script>