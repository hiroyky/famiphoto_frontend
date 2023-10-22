import {de} from "vuetify/locale";
import {MeQuery} from "~/types/api-gql";

interface State {
    me: MeQuery['me']
}

const useMeStore = defineStore('me', {
    state: (): State => ({
        me: null
    }),
    getters: {
    },
    actions: {
        async getMe() {
            try {
                const { client } = useGqlStore()
                console.log('getMe')
                const res = await client.me()
                this.me = res.me
            } catch(err){
                console.log('getMe error',err)
                this.me = null
            }
        },
        async isLoggedIn() {
            console.log("a", this.me)
            if (this.me !== null) {
                return true
            }
            await this.getMe()
            return this.me !== null
        },
    }
})

export default useMeStore
