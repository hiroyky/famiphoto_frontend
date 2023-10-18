import {useQueue} from "@graphql-tools/load/typings/utils/queue";
import {newAuthUseCase} from "~/server/di/registry";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { userId, password } = validateBody(body)

    const useCase = newAuthUseCase()
    try {
        const {
            accessToken,
            refreshToken,
            expireAt,
        } = await useCase.login(userId, password, new Date())
        const session = event.context.session
        session.access_token = accessToken
        session.access_token_expires = expireAt
        session.refresh_token = refreshToken

        return {}
    } catch (err) {
        console.log(err)
        throw createError({
            statusCode: 500,
        })
    }
})

function validateBody(body: any): Body {
    if (body.userId === "") {
        throw createError({
            statusCode: 400,
        })
    }
    if (body.password === "") {
        throw createError({
            statusCode: 400,
        })
    }
    return body
}

interface Body {
    userId: string
    password: string
}