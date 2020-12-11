const { uploadMultiply } = require('../utils/fileService')
const express = require('express')
const ReviewsController = require('../controllers/reviews.controller')
const router = express.Router()

router.route('/').get(ReviewsController.getReviews).post(uploadMultiply, ReviewsController.createReviews)

module.exports = router
