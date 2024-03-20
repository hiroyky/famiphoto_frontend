<template>
  <v-list density="compact" :nav="false" @click:open="onExpandCollapse">
    <v-list-item><slot name="title">{{ $t('dateTimeOriginal') }}</slot></v-list-item>

    <v-list-group :value="year.year" v-for="year in years" :key="year.year">
      <template #activator="{ props }">
        <v-list-item v-bind="props">{{ displayYear(year) }} <span>({{year.num}})</span></v-list-item>
      </template>

      <template v-for="month in months" :key="`${month.year}-${month.month}`">
        <v-list-group v-if="month.year === year.year" :value="month.month">
          <template #activator="{ props }">
            <v-list-item v-bind="props">{{ $t('xMonth', { month: month.month }) }} <span>({{month.num}})</span></v-list-item>
          </template>

          <template v-for="date in dates" :key="`${date.year}-${date.month}-${date.date}`">
            <v-list-item v-if="isTheDate(month, date)">{{ t('xMonthDate', { month: date.month, date: date.date }) }} <span>({{date.num}})</span></v-list-item>
          </template>
        </v-list-group>
      </template>

    </v-list-group>

  </v-list>
</template>

<script setup lang="ts">

import type {AggregateDate, AggregateMonth, AggregateYear} from "~/types/api-gql-alias";

const {t} = useI18n({useScope: 'global'})

interface Props {
  years: AggregateYear| null
  months: AggregateMonth | null
  dates: AggregateDate | null
}

interface OpenCloseEvent {
  id: number
  path: number[]
  value: boolean
}

defineProps<Props>()
const emit = defineEmits<{
  expandYear: [number]
  expandMonth: [{ year: number, month: number }]
}>()

function onExpandCollapse({id, path, value}:OpenCloseEvent) {
  if (!value) {
    return
  }
  if (path.length === 1) {
    emit('expandYear', id)
    return
  }
  if (path.length === 2) {
    emit('expandMonth', { year: path[0], month:path[1]} )
    return
  }
}

function displayYear(year: {year: number}) {
  return year.year > 0 ? t('xYear', {year: year.year}) : t('unknown')
}

function isTheDate(a: {year: number, month: number}, b: {year: number, month: number}) {
  return a.year === b.year && a.month === b.month
}

</script>