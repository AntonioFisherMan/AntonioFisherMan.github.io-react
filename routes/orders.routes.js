const router = require('express').Router()
const OrdersController = require('../controllers/orders.controller')
const { jwtCheck } = require('../utils/jwtMiddleware')

router.route('/').get(jwtCheck, OrdersController.getOrders).post(jwtCheck, OrdersController.createOrders)
router.route('/unlogin').post(OrdersController.createOrders)

module.exports = router
