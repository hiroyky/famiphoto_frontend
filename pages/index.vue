<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <photo-list :value="photos" @photo-click="onPhotoClick" @intersect="onIntersect"></photo-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

import PhotoList from "~/components/modules/PhotoList.vue";
import {usePhotoListStore} from "~/stores/photo-list-store";
import path from "path";

const photoListStore = usePhotoListStore()
const route = useRoute()
const router = useRouter()

const offsetRoute = (): number => {
  const val = route.query.offset
  if (!val || typeof val !== 'string') {
    return 0
  }
  const intVal = Number.parseInt(val)
  if (isNaN(intVal)) {
    return 0
  }
  return intVal
}


const offset = ref(offsetRoute())
const offsetNext = ref(offsetRoute())
const limit = 20

const {data: photos} = useAsyncData(async () => {
  await photoListStore.getPhotos({  limit: 20 , offset: offsetNext.value })
  return photoListStore.photos
}, { watch: [ offsetNext ] })

function onPhotoClick(id: string) {
  navigateTo(path.join('photos', id))
}

function onIntersect() {
  offset.value = offsetNext.value
  offsetNext.value += limit
  router.push({ query: {offset: offset.value} })
}

</script>