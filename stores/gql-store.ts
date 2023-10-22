import { defineStore } from 'pinia'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from '~/types/api-gql'
import urlJoin from 'url-join'

export const useGqlStore = defineStore('gql', {
  state: () => {
    const config = useRuntimeConfig()
    const headers = useRequestHeaders(['cookie'])
    return {
      client: getSdk(new GraphQLClient(urlJoin(config.public.baseUrl, "api", "graphql"), {
        headers
      })),
    }
  },
})
