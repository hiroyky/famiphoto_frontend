<template>
  <v-app>
    <f-header />
    <v-main>
      <slot />
    </v-main>
    <f-footer />
  </v-app>
</template>

<script setup lang="ts">

import FHeader from "~/components/parts/FHeader.vue";
import FFooter from "~/components/parts/FFooter.vue";
</script>

