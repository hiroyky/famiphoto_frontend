<template>
  <v-form>
    <v-list>
      <v-list-item>
        <v-list-item-action>
          <v-btn
              @click="onUploadClick"
              color="primary"
              :disabled="loading"
          >{{$t('upload')}}</v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-file-input
            :multiple="true"
            accept="image/*,.arw"
            :label="$t('selectPhotos')"
            :counter="true"
            :disabled="loading"
        ></v-file-input>

      </v-list-item>
    </v-list>
  </v-form>
</template>

<script setup lang="ts">

interface Prop {
  modelValue: string[]
  loading: false
}

defineProps<Prop>()

function onUploadClick() {

}
</script>