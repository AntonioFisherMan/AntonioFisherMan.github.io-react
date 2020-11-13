import { instance, multiData } from './api'

export const profileAPI = {
    getInform(id: string) {
        return instance.get(`inform/${id}`).then((res) => res.data)
    },
    updateInform(id: string, inform: any) {
        return instance.put(`inform/${id}`, inform, multiData).then((res) => res.data)
    },
    setInform(id: string, inform: any) {
        inform.append('isAddInform', true)
        return instance.post(`inform/${id}`, inform, multiData).then((res) => res.data)
    },
    sendHelpMessage(helpMessage: string, id: string) {
        return instance.post(`users/help`, { helpMessage, userId: id }).then((res) => res.data)
    },
    uploadCountry() {
        return instance.get('/test').then((res) => res.data)
    },
}
