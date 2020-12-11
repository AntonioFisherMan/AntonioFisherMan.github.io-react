const mongoose = require('mongoose')

const goodsSchema = new mongoose.Schema(
    {
        photos: {
            type: Object,
        },
        text: {
            type: String,
        },
        slogan: {
            type: String,
        },
        rating: {
            type: Number,
        },
        isLoadedToCard: {
            type: Boolean,
        },
        price: {
            type: Number,
        },
        salePrice: {
            type: Number,
        },
        sizes: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
)

const Goods = mongoose.model('Goods', goodsSchema)
module.exports = Goods
