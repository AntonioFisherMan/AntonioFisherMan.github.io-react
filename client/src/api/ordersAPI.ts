import { instance } from './api'

export const ordersAPI = {
    setOrders(items: any, inform: any, id: any) {
        return instance.post(`orders`, { items, inform, userId: id }).then((res) => res.data)
    },
    setUnloginOrders(data: any) {
        return instance.post(`orders/unlogin`, { data }).then((res) => res.data)
    },
    getOrders(id: string) {
        return instance.get(`orders/${id}`).then((res) => res.data)
    },
}
