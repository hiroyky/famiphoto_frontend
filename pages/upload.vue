<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ $t('uploadPhotos') }}</h1>

        <v-container>
          <v-row>
            <v-col md="6">
              <v-card>
                <v-form>
                  <v-list>
                    <v-list-item>
                      <template #title>
                        <v-text-field label="保存先ディレクトリ" model-value="/var/xxx/hgoe/fuga" :disabled="true"></v-text-field>
                      </template>
                      <template #subtitle>
                        上記の配下に、撮影日別のディレクトリが作成されます。
                      </template>
                    </v-list-item>
                  </v-list>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>

</script>