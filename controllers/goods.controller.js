const GoodsService = require('../services/goods.service')
const ReviewsService = require('../services/reviews.service')
const {pagination} =require('../utils/paginationService')
class GoodsController {
    async getGoods(req, res) {
        const goodsId = req.query.goodsId
        if (!goodsId) {
            const goods = await GoodsService.getGoods()
            return res.json(goods)
        }
        else if (goodsId) {
            try {
                const good = await GoodsService.getGoods(goodsId)
                const reviewQuantity = await (await ReviewsService.getReviews(goodsId)).length
                const review = await ReviewsService.getReviews(goodsId).limit(2)

                let data = { good, review, reviewQuantity }
                return res.json(data)
            } catch (err) {
                return res.status(500).json('Error getting Good.')
            }
        }
        else {
            return res.status(400).send({ message: 'Bad request.' })
        }
    }
    async createGoods(req, res) {
        let data = req.body.data
        const pageSize = req.query.pageSize
        const page = req.query.page

        if (data && data.length > 0) {
                const goods = await GoodsService.getGoods('',data)
                pagination(pageSize, page, goods, res)
        } else {
            try {
                const resultGoods = await  GoodsService.getGoods()
                pagination(pageSize, page, resultGoods, res)
            } catch (err) {
                res.status(400).json({ message: err.message })
            }
        }
    }
    async updateGoods(req, res) {
        try {
            await GoodsService.updateGoods(req.body, req.query.goodsId)
        } catch (err) {
            res.status(404).json('Error update good')
        }
    }
}

module.exports = new GoodsController()
