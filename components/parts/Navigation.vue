<template>
  <v-navigation-drawer :model-value="draw">
    <v-list density="compact" :nav="false">
      <v-list-item>日付別</v-list-item>
      <date-list :model-value="{ year: 2024, months: [ {value: 1, dates: [1,2,3]} ] }" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

import DateList from "~/components/modules/DateList.vue";

interface Prop {
  draw: boolean
}

withDefaults(defineProps<Prop>(), {
  draw: true
})

</script>