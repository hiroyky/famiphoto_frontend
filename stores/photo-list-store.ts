import {defineStore} from "pinia";
import useMeStore from "~/stores/me-store";
import {useGqlStore} from "~/stores/gql-store";
import type {PaginationInfo, PhotosQuery} from "~/types/api-gql";
import type {PhotoList} from "~/types/api-gql-alias";

interface State {
    photos: PhotoList
    paginationInfo: PaginationInfo
}

interface PhotoGetQuery {
    year?: number
    limit: number
    offset: number
}

async function searchPhotos(q: PhotoGetQuery) {
    const {client} = useGqlStore()

    const res = await client.photos({
        year: q.year,
        limit: q.limit,
        offset: q.offset,
    })
    const photos = res.photos.nodes
        .map(item => item.thumbnailUrl === '' ? {...item, thumbnailUrl: '/no_thumbnail.png'} : item)
        .map(item => item.previewUrl === '' ? {...item, previewUrl: '/no_thumbnail.ong'} : item)

    return {photos, res}
}

export const usePhotoListStore = defineStore('photoList', {
    state: (): State => ({
        photos: [],
        paginationInfo: {
            limit: 0,
            offset: 0,
            page: 0,
            paginationLength: 0,
            count: 0,
            totalCount: 0,
            hasNextPage: false,
            hasPreviousPage: false,
        },
    }),
    actions: {
        async getPhotos(q: PhotoGetQuery) {
            try {
                const {photos, res} = await searchPhotos(q)
                this.photos = photos
                this.paginationInfo = res.photos.pageInfo
            } catch(err) {
                console.error(err)
            }
        },
        async appendPhotos(q: PhotoGetQuery) {
            try {
                const {photos, res} = await searchPhotos(q)
                this.photos.push(...photos)
                this.paginationInfo = res.photos.pageInfo
            } catch(err) {
                console.error(err)
            }
        },

        async aggregateDateTimeOriginalYear() {
            const {client} = useGqlStore()
            const res = await client.aggregateDateTimeOriginalYear()
            return res.aggregateDateTimeOriginal
        },
        async aggregateDateTimeOriginalYearMonth(year: number) {
            const {client} = useGqlStore()
            const res = await client.aggregateDateTimeOriginalMonth({year})
            return res.aggregateDateTimeOriginal
        },
        async aggregateDateTimeOriginalYearMonthDate(year: number, month: number) {
            const {client} = useGqlStore()
            const res = await client.aggregateDateTimeOriginalDate({year, month})
            return res.aggregateDateTimeOriginal
        }
    }
})
