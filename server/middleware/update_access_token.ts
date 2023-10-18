import {newAuthUseCase} from "~/server/di/registry";
import { ApiError } from "../drivers/api-driver";

export default defineEventHandler(async (event) => {
    const session = event.context.session

    if (!session || !session.access_token || !session.access_token_expires || !session.refresh_token) {
        return
    }

    const now = new Date()
    const useCase = newAuthUseCase()
    if (!useCase.isExpired(session.access_token_expires, now)) {
        return
    }

    try {
        const {
            accessToken,
            expireAt,
        } = await useCase.refreshToken(session.refresh_token, now)

        session.access_token = accessToken
        session.access_token_expires = expireAt
        await session.savePromisified()

    } catch (err) {
        await session.destroyPromisified()

        if (err instanceof  ApiError) {
            throw createError({
                statusCode: err.httpStatus,
                data: err,
            })
        }

        console.error(err)

        throw createError({
            data: err
        })
    }
})