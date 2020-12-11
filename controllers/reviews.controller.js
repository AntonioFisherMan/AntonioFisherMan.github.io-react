const ReviewsService = require('../services/reviews.service')

class ReviewsController {
    async getReviews(req, res) {
        const reviews = await ReviewsService.getReviews()
        if (reviews) return res.json(reviews)
        return res.status(200).json({ message: 'Reviews not found' })
    }
    async createReviews(req, res) {
        if (res.req.body) {
            const files = req.files
            if (files.length === 0) {
                return res.status(400).json({ message: 'Please choose files' })
            }
            const data = await ReviewsService.createReviews(res.req.body, files, req.query.goodsId)
            if (data) return res.json({ data: data, message: 'Your review successfuly added' })
            return res.status(500).json({ message: 'Unable create reviews.' })
        } else {
            return res.status(400).send({ message: 'Bad request.' })
        }
    }
}

module.exports = new ReviewsController()
