<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ $t('uploadPhotos') }}</h1>

        <v-container>
          <v-row>
            <v-col>
              <v-card>
                <v-list>
                  <v-list-item>
                    <template #title>
                      <v-text-field :label="t('destinationDirectory')" model-value="/var/xxx/hgoe/fuga" :disabled="true"></v-text-field>
                    </template>
                    <template #subtitle>
                      ディレクトリの日付は撮影日時です。撮影日時が不明の場合はアップロード日時です。
                    </template>
                  </v-list-item>
                </v-list>
                <photo-upload-form @update:model-value="onCommit" />

                <v-list>
                  <v-list-item v-for="item in photoUploadStore.queue" :key="item.file">
                    <template #title>{{ item.file.name }}</template>
                    <template #subtitle>{{ item.status }}</template>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {usePhotoUploadStore} from "~/stores/photo-upload-store";

const { t } = useI18n({useScope: 'global'})
import PhotoUploadForm from "~/components/parts/photoUploadForm.vue";

useHead({
  title: `${t("uploadPhotos")} - ${useAppConfig().AppName}`,
})

const photoUploadStore = usePhotoUploadStore()

function onCommit(files: File[]) {
  photoUploadStore.enqueueToUploadFiles(files)
  navigateTo('/upload/progress')
}

</script>