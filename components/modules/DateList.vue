<template>
<v-list-group :value="modelValue.year">
  <template v-slot:activator="{ props }">
    <v-list-item v-bind="props">{{ modelValue.year }}年</v-list-item>
  </template>

  <v-list-group v-for="month in modelValue.months">
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props">{{ month.value }}月</v-list-item>
    </template>

    <v-list-item v-for="date in month.dates">
      {{ date }}日
    </v-list-item>
  </v-list-group>
</v-list-group>
</template>

<script setup lang="ts">
interface Prop{
  modelValue: {
    year: number
    months: {
      value: number
      dates: number[]
    }[]
  }
}

defineProps<Prop>()

</script>