<template>
    <nuxt-layout name="default">
      <nuxt-page />
      <template #navigation>
        <date-tree-list
            :years="dateTimeOriginalYears"
            :months="dateTimeOriginalMonths"
            :dates="dateTimeOriginalDates"
            @expand-year="onExpandYear"
            @expand-month="onExpandMonth"
        ></date-tree-list>
      </template>
    </nuxt-layout>
</template>

<script setup lang="ts">

import DateTreeList from "~/components/parts/DateTreeList.vue";
import type {AggregateDate, AggregateMonth} from "~/types/api-gql-alias";


definePageMeta({
  layout: false,
})

const photoListStore = usePhotoListStore()

const dateTimeOriginalMonths = ref<AggregateMonth>([])
const dateTimeOriginalDates = ref<AggregateDate>([])

const { data: dateTimeOriginalYears } = useAsyncData(async ()=> {
  const years = await photoListStore.aggregateDateTimeOriginalYear()
  return years ? years : []
})

async function onExpandYear(year: number) {
  const res = await photoListStore.aggregateDateTimeOriginalYearMonth(year)
  res.map((i) => {
    const exist = dateTimeOriginalMonths.value.find((v) => v.year == i.year && v.month === i.month)
    if (exist) {
      exist.num = i.num
    } else {
      dateTimeOriginalMonths.value.push(i)
    }
  })

  await photoListStore.getPhotos({ limit: 20, offset: 0, year: year })
}

async function onExpandMonth(val: {year:number, month:number}) {
  const res = await photoListStore.aggregateDateTimeOriginalYearMonthDate(val.year, val.month)
  res.map((i) => {
    const exist = dateTimeOriginalDates.value.find((v) => v.year == i.year && v.month === i.month && v.date === i.date)
    if (exist) {
      exist.num = i.num
    } else {
      dateTimeOriginalDates.value.push(i)
    }
  })
}

</script>
