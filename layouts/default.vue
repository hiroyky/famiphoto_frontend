<template>
  <v-app>
    <alert-snackbar />
    <f-header @drawer-click="onHeadDrawerClick" />
    <v-main>
      <v-navigation-drawer v-model="navigationDrawer">
        <slot name="navigation" />
      </v-navigation-drawer>
      <slot />
    </v-main>
    <f-footer />
  </v-app>
</template>

<script setup lang="ts">

import FHeader from "~/components/parts/FHeader.vue";
import FFooter from "~/components/parts/FFooter.vue";
import AlertSnackbar from "~/components/modules/AlertSnackbar.vue";

const navigationDrawer = ref<boolean | null>(null)

function onHeadDrawerClick() {
  navigationDrawer.value = !navigationDrawer.value
}

</script>
