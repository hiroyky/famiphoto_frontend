import {defineStore} from "pinia";

export const useApiStore = defineStore('api', {
    actions: {
        async login(req: {  userId: string, password: string}) {
            const res = await fetch('/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    userId: req.userId,
                    password: req.password,
                })
            })
            if (!res.ok) {
                throw await ApiError.createInstanceFromRes(res)
            }
        },

        async logout() {
            const res = await  fetch('/auth/logout', { method: 'POST' })
            if (!res.ok) {
                throw await ApiError.createInstanceFromRes(res)
            }
        },
    }
})


export class ApiError extends Error {
    public httpStatus: number
    public errorCode: string
    public errorMessage: string

    private constructor(data: any) {
        super()
        this.httpStatus = data.httpStatus
        this.errorCode = data.errorCode
        this.errorMessage = data.errorMessage
    }

    public toString(): string {
        return `${this.httpStatus} ${this.errorCode}: ${this.errorMessage} ${super.toString()}`
    }
    static async createInstanceFromRes(res: Response): Promise<ApiError> {
        const body = await res.json()

        return new ApiError({
            errorCode: body && body.error_code,
            errorMessage: body && body.error_message,
            httpStatus: res.status,
        })
    }
}