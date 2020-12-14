const Orders = require('../models/orders.model')
const UnloginOrders = require('../models/unloginorders.model')

class OrdersService {
    getOrders(id) {
        return Orders.find({ userId: id })
    }
    createOrders(data) {
        if (data.userId) {
            const newOrders = new Orders({
                userId: data.userId,
                items: data.data.items,
                inform: data.data.inform,
            })
            return newOrders.save()
        } else {
            const newUnloginOrders = new UnloginOrders({
                items: data.items,
                inform: data.formData,
            })
            return newUnloginOrders.save()
        }
    }
}

module.exports = new OrdersService()
