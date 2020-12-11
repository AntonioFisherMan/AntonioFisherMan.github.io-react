const mongoose = require('mongoose')

const tokensSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
    },
    accessToken: {
        type: String,
    },
    refreshToken: {
        type: String,
    },
})

const Tokens = mongoose.model('tokens', tokensSchema)

module.exports = Tokens
