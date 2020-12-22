import { instance } from './api'

export const ordersAPI = {
    setOrders(data: any) {
        return instance
            .post(
                `orders`,
                { data, userId: data.id },
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
