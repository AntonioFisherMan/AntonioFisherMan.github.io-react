const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        photo: {
            type: String,
        },
        images: {
            type: Array,
        },
        reviewText: {
            type: String,
        },
        rating: {
            type: Number,
        },
        goodsId: {
            type: mongoose.Schema.ObjectId,
        },
    },
    {
        timestamps: true,
    }
)

const Reviews = mongoose.model('Reviews', reviewsSchema)
module.exports = Reviews
