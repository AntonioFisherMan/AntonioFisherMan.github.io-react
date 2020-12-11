const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
    },
    inform: {
        type: Object,
    },
    items: {
        type: Array,
    },
})

const Orders = mongoose.model('Orders', ordersSchema)
module.exports = Orders
