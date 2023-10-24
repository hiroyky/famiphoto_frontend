import type {PhotoQuery} from "~/types/api-gql";

interface State {
    photo: PhotoQuery['photo']
}

const usePhotoStore = defineStore('photo', {
    state: (): State => ({
        photo: null
    }),

    actions: {
        async getPhoto(id: string) {
            const { client } = useGqlStore()
            console.log('store get photo', id)
            const res = await client.photo({ id })
            console.log(res)
            this.photo = res.photo
        }
    }
})

export default usePhotoStore