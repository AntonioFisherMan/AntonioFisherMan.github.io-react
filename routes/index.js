const express = require('express')
const router = express.Router()

const profileRouter = require('./profile.routes')
const goodsRouter = require('./goods.routes')
const authRouter = require('./auth.routes')
const ordersRouter = require('./orders.routes')
const informRouter = require('./inform.routes')
const reviewsRouter = require('./reviews.routes')
const { jwtCheck } = require('../utils/jwtMiddleware')

router.use('/api/profile', profileRouter)
router.use('/api/goods', goodsRouter)
router.use('/api/auth', authRouter)
router.use('/api/orders', ordersRouter)
router.use('/api/inform', jwtCheck, informRouter)
router.use('/api/reviews', jwtCheck, reviewsRouter)

module.exports = router
