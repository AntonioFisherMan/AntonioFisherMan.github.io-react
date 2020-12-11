const mongoose = require('mongoose')

const unloginOrdersSchema = new mongoose.Schema({
    inform: {
        type: Object,
    },
    items: {
        type: Array,
    },
})

const UnloginOrders = mongoose.model('UnloginOrders', unloginOrdersSchema)
module.exports = UnloginOrders
