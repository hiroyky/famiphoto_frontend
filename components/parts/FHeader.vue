<template>
  <v-app-bar>
    <v-btn icon outlined class="mr-2" @click="onMenuClick">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn icon outlined to="/" class="mr-2">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'FAMIPHOTO',
  },
  userId: {
    type: String,
    default: '',
  },
})
function onMenuClick() {}
</script>