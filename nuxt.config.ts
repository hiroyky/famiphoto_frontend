// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    }
  },
  runtimeConfig: {
    isDebug: true,
    apiBaseUrl: "http://localhost:7002/",
    clientId: "famiphoto_web",
    clientSecret: "YCNO4PGF9Kocq0V5pavMnLT2JAWwUm3xtiSR1sEzujHd786BkX",
    public: {

    },
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
      'h3-session/nuxt',
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
    secret: process.env.SESSION_SECRET!,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
  },
})
