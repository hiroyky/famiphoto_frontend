import {defineStore} from "pinia";
import useMeStore from "~/stores/me-store";
import {useGqlStore} from "~/stores/gql-store";
import type {PaginationInfo, PhotosQuery} from "~/types/api-gql";

interface State {
    photos: PhotosQuery['photos']['nodes']
    paginationInfo: PaginationInfo
}

interface PhotoGetQuery {
    limit: number
    offset: number
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
            console.log('offset', q.offset)
            try {
                const meStore = useMeStore()
                const {client} = useGqlStore()

                const res = await client.photos({
                    limit: q.limit,
                    offset: q.offset,
                })
                const photos = res.photos.nodes
                    .map(item => item.thumbnailUrl === '' ? {...item, thumbnailUrl: '/no_thumbnail.png'} : item)
                    .map(item => item.previewUrl === '' ? {...item, previewUrl: '/no_thumbnail.ong'} : item)
                //if (q.offset < this.paginationInfo.offset) {
                //    this.photos = [ ...photos, ...this.photos ]
                //} else {
                    this.photos.push(...photos)
                //}
                this.paginationInfo = res.photos.pageInfo
            } catch(err) {
                console.log(err)
            }
        }
    }
})
