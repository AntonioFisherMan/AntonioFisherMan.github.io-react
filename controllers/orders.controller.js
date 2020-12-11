const OrdersService = require('../services/orders.service')

class OrdersController {
    async getOrders(req, res) {
        const orders = await OrdersService.getOrders(req.query.id)
        if (orders) return res.json(orders)
        return res.status(500).json('Error getting Orders.')
    }
    async createOrders(req, res) {
        try {
            const order = await OrdersService.createOrders(req.body)
            res.status(200).json({ order, message: 'Orders successfuly added' })
        } catch (err) {
            res.status(404).json(err)
        }
    }
}

module.exports = new OrdersController()
