import { truncate } from 'lodash'
import { config, instance } from './api'

export const profileAPI = {
    getInform(id: string) {
        return instance.get(`inform/${id}`).then((res) => res.data)
    },
    updateInform(id: string, inform: any) {
        const data = { inform }
        return instance.put(`inform/${id}`, data).then((res) => res.data)
    },
    setInform(id: string, inform: any) {
        let data = {
            inform: inform,
            isAddInform: true,
        }
        return instance.post(`inform/${id}`, data).then((res) => res.data)
    },
    sendHelpMessage(helpMessage: string, id: string) {
        return instance.post(`users/help`, { helpMessage, userId: id }).then((res) => res.data)
    },
    uploadUserImage(id: string, files: any) {
        return instance.post(`inform/upload/${id}`, files, config).then((res) => res.data)
    },
    uploadCountry() {
        return instance.get('/test').then((res) => res.data)
    },
}
