const router = require('express').Router()
const GoodsController = require('../controllers/goods.controller')


router.route('/').get(GoodsController.getGoods).post(GoodsController.createGoods).put(GoodsController.updateGoods)


module.exports = router
