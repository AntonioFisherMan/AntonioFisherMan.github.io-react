const mongoose = require('mongoose')

const informSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
    },
    inform: {
        type: Object,
    },
    isAddInform: {
        type: Boolean,
    },
})

const Inform = mongoose.model('Inform', informSchema)
module.exports = Inform
