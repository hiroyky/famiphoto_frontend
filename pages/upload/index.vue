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
                      <v-text-field label="保存先ディレクトリ" model-value="/var/xxx/hgoe/fuga" :disabled="true"></v-text-field>
                    </template>
                    <template #subtitle>
                      ディレクトリの日付は撮影日時です。撮影日時が不明の場合はアップロード日時です。
                    </template>
                  </v-list-item>
                </v-list>
                <photo-upload-form />
              </v-card>
            </v-col>
          </v-row>
        </v-container>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const {t } = useI18n({useScope: 'global'})
import PhotoUploadForm from "~/components/parts/photo-upload-form.vue";

useHead({
  title: `${t("uploadPhotos")} - ${useAppConfig().AppName}`,
})

</script>