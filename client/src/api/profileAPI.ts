import { config, instance } from './api'

export const profileAPI = {
    getInform(id: string) {
        return instance.get(`inform?id=${id}`, {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken') as string),
            },
        } ).then((res) => res.data)
    },
    updateInform(id: string, inform: any) {
        const data = { inform }
        return instance.put(`inform?id=${id}`, data, {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken') as string),
            },
        }).then((res) => res.data)
    },
    setInform(id: string, inform: any) {
        let data = {
            inform: inform,
            isAddInform: true,
        }
        return instance.post(`inform?id=${id}`, data, {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken') as string),
            },
        }).then((res) => res.data)
    },
    sendHelpMessage(helpMessage: string, id: string) {
        return instance.post(`profile/help`, { helpMessage, userId: id }, {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken') as string),
            },
        }).then((res) => res.data)
    },
    uploadUserImage(id: string, files: any) {
        return instance.post(`inform/upload?userId=${id}`, files, { headers: { Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken') as string) } }).then((res) => res.data)
    },
    uploadCountry() {
        return instance.get('/test').then((res) => res.data)
    },
}
