import {createProxyMiddleware} from "http-proxy-middleware";
import {basicAuthValue} from "~/server/utils/basic-auth";

export default defineEventHandler(async (event) => {
    console.log('gql server', event.method)
    const config = useRuntimeConfig()
    if (event.method !== "POST" && !config.isDebug) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Not found'
        })
    }

    const proxyMid = createProxyMiddleware({
        target: config.apiBaseUrl,
        pathRewrite: {
            '^/api': '',
        },
        changeOrigin: true,
        onProxyReq: (proxyReq) => {
            const session = event.context.session
            console.log("access token", session, session.access_token)
            if (session && session.access_token) {
                proxyReq.setHeader('Authorization', `Bearer ${session.access_token}`)
            } else {
                proxyReq.setHeader('Authorization', basicAuthValue(config.clientId, config.clientSecret))
            }
        },
    })

    await new Promise((resolve, reject) => {
        const next = (err?: unknown) => {
            if (err) {
                reject(err)
            } else {
                resolve(true)
            }
        }

        // @ts-ignore
        proxyMid(event.node.req, event.node.res, next)
    })
})