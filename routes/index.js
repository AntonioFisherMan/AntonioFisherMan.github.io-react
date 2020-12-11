const express = require('express')
const router = express.Router()

const profileRouter = require('./profile.routes')
const goodsRouter = require('./goods.routes')
const authRouter = require('./auth.routes')
const ordersRouter = require('./orders.routes')
const informRouter = require('./inform.routes')
const reviewsRouter = require('./reviews.routes')
const { jwtCheck } = require('../utils/jwtMiddleware')

router.use('/profile', profileRouter)
router.use('/goods', goodsRouter)
router.use('/auth', authRouter)
router.use('/orders', jwtCheck, ordersRouter)
router.use('/inform', jwtCheck, informRouter)
router.use('/reviews', jwtCheck, reviewsRouter)

module.exports = router
