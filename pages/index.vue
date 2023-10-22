<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <photo-list />
        <div :="hoge"></div>
        <nuxt-link to="./test">to</nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import PhotoList from "~/components/modules/PhotoList.vue";

const hoge = ref('')

const store = useGqlStore()
const res = await useAsyncData('val', () => store.client.gqlStatus())
console.log(res.data.value?.gqlStatus.status)

</script>