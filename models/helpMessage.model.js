const mongoose = require('mongoose')

const helpMessageSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
    },
    helpMessage: {
        type: String,
    },
})

const helpMessage = mongoose.model('helpMessage', helpMessageSchema)
module.exports = helpMessage
