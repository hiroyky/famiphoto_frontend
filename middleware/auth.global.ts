import {SymbolKind} from "vscode-languageserver-types";
import useMeStore from "~/stores/me-store";
import gql from "graphql-tag";

const exceptPaths: string[] = [
    '/auth/login'
]

export default defineNuxtRouteMiddleware(async (to) => {
    const app = useNuxtApp()

    if (exceptPaths.includes(to.path)) {
        return
    }

    const meStore = useMeStore(app.$pinia)
    console.log("auth me", meStore.me)
    if (await meStore.isLoggedIn()) {
        return
    }

    return navigateTo('/auth/login')
})
