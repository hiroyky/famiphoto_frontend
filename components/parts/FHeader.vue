<template>
  <v-app-bar>
    <v-btn icon outlined class="mr-2" @click="onMenuClick">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn icon outlined to="/" class="mr-2">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title :text="title" />
    <v-spacer />
    <v-menu>
      <template v-slot:activator="{props}">
        <v-btn icon v-bind="props"><v-icon>mdi-account</v-icon></v-btn>
      </template>
      <v-list>
        <v-list-item to="/auth/logout">
          <v-list-item-title>ログアウト</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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