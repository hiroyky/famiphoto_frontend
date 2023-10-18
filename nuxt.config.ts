// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";
import {isDebug} from "std-env";

const runtimeConfig = {
  isDebug: process.env.IS_DEBUG === 'true',
  apiBaseUrl: process.env.API_BASE_URL,
  clientId: "famiphoto_web",
  clientSecret: process.env.CLIENT_SECRET,
  public: {}
}

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    }
  },
  runtimeConfig,
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
      '@pinia/nuxt',
      '@sidebase/nuxt-session',
    (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({autoImport: true}))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      }
    }
  },
  session: {
    session: {
      expiryInSeconds: 30 * (3600 * 24), // 30 days
    },
    api: {
      methods: runtimeConfig.isDebug ? [ 'delete', 'get' ] : [ 'delete' ],
    }
  }
})
