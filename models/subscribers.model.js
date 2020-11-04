const mongoose = require('mongoose')

const subscribersSchema = new mongoose.Schema({
    email: {
        type: String,
    },
})

const Subscribers = mongoose.model('Subscribers', subscribersSchema)
module.exports = Subscribers
