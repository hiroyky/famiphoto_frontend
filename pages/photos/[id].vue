<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-card-actions>
            <photo-download-button :files="photo.files" @download="onDownloadClick"></photo-download-button>
            <v-card-subtitle>{{ photo.name }}</v-card-subtitle>
            <v-card-subtitle>{{ dateTimeOriginal(photo.dateTimeOriginal) }}</v-card-subtitle>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col>
        <v-img :src="photo.previewUrl"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {usePhotoStore} from "~/stores/photo-store";
import {useApiStore} from "~/stores/api-store";
import PhotoDownloadButton from "~/components/parts/PhotoDownloadButton.vue";

const route = useRoute()
const id = route.params.id as string

const photoStore = usePhotoStore()
const apiStore = useApiStore()

const { data: photo } = await useAsyncData(`photo-${id}`, async () => {
  return await photoStore.getPhoto(id)
})
function dateTimeOriginal(dateStr: string) {
  if (isNaN(Date.parse(dateStr))) {
    return ""
  }
  const date = new Date(dateStr)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日${date.getHours()}時${date.getMinutes()}分${date.getSeconds()}秒`
}

function onDownloadClick( id: string, fileName: string ) {
  const link = document.createElement('a')
  link.href=apiStore.downloadUrl(id)
  link.download=fileName
  link.click()
}


</script>