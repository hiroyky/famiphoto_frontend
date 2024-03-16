<template>
  <v-app>
    <alert-snackbar />
    <f-header />
    <navigation />
    <v-main>
      <slot />
    </v-main>
    <f-footer />
  </v-app>
</template>

<script setup lang="ts">

import FHeader from "~/components/parts/FHeader.vue";
import FFooter from "~/components/parts/FFooter.vue";
import AlertSnackbar from "~/components/modules/AlertSnackbar.vue";
import Navigation from "~/components/parts/Navigation.vue";
</script>

