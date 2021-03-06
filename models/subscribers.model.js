const mongoose = require('mongoose')

const subscribersSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
)
const Subscribers = mongoose.model('Subscribers', subscribersSchema)
module.exports = Subscribers
