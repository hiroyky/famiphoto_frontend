
interface State {
    queue: FileItem[]
    processing: boolean
}

type UploadStatus = 'standby' | 'progressing'| 'completed' | 'failed'

interface FileItem {
    file: File
    status: UploadStatus
}

const parallelNum = 2

export const usePhotoUploadStore = defineStore('photoUpload', {
    state: (): State => ({
        queue: [],
        processing: false,
    }),

    actions: {
        enqueueToUploadFiles(files: File[]) {
            const fileItems: FileItem[] = files.map(f => ({
                file: f,
                status: 'standby',
            }))
            this.queue.push(...fileItems)
            this._uploadQueuing()
        },
        clear() {
            this.queue = []
        },
        async _uploadQueuing() {
            const standbyFiles = filterStandbyFiles(this.queue)
            if (standbyFiles.length===0) {
                this.processing = false
                return
            }

            this.processing = true
            const { client } = useGqlStore()
            const apiStore = useApiStore()

            await Promise.all(standbyFiles.slice(0, parallelNum).map(async (i) => {
                try {
                    console.log(i.file.name)
                    const res = await client.uploadPhoto()
                    await apiStore.uploadFile(i.file, res.uploadPhoto.uploadUrl)
                    i.status = 'completed'
                } catch(err) {
                    i.status = 'failed'
                    console.error(err)
                }
            }))

            this._uploadQueuing()
        },
    },
})

function filterStandbyFiles(queue: FileItem[]): FileItem[] {
    return queue.filter(m => m.status === 'standby')
}