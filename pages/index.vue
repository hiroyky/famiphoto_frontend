<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <div :="hoge"></div>
        <nuxt-link to="./test">to</nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

const hoge = ref('')

const store = useGqlStore()
const headers = useRequestHeaders(['cookie'])
const res = await useAsyncData('val', () => $fetch('/api/status', { headers }))
console.log(res)

</script>