import { instance } from './api'

export const ordersAPI = {
    setOrders(items: any, inform: any, id: any) {
        return instance
            .post(
                `orders`,
                { items, inform, userId: id },
                {
                    headers: {
                        Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken') as string),
                    },
                }
            )
            .then((res) => res.data)
    },
    setUnloginOrders(items: any, formData: any) {
        return instance.post(`orders/unlogin`, { items, formData }).then((res) => res.data)
    },
    getOrders(id: string) {
        return instance
            .get(`orders?id=${id}`, {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken') as string),
                },
            })
            .then((res) => res.data)
    },
}
