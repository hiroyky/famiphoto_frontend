<template>
  <v-app-bar>
    <v-btn icon outlined class="mr-2" @click="onDrawerClick">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn icon outlined to="/" class="mr-2">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title :text="title" />

    <progress-nav-button
        :icon="true"
        default-to="/upload"
        loading-to="/upload/progress"
        :loading="photoUploading"
    >
      <v-icon>mdi-upload</v-icon>
    </progress-nav-button>

    <v-menu>
      <template v-slot:activator="{props}">
        <v-btn icon v-bind="props"><v-icon>mdi-account</v-icon></v-btn>
      </template>
      <v-list>
        <v-list-item to="/settings/profile">
          <v-list-item-title>{{ $t('personalSettings') }}</v-list-item-title>
        </v-list-item>
        <v-list-item to="/auth/logout">
          <v-list-item-title>{{ $t('signOut') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<script setup lang="ts">
import ProgressNavButton from "~/components/parts/ProgressNavButton.vue";
import {usePhotoUploadStore} from "~/stores/photo-upload-store";

defineProps({
  title: {
    type: String,
    default: useAppConfig().AppName,
  },
  userId: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  drawerClick: []
}>()
function onDrawerClick() {
  emit('drawerClick')
}

const photoUploadStore = usePhotoUploadStore()

const photoUploading = computed(() => photoUploadStore.progressing)

</script>