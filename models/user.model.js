const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
        },
        rememberMe: {
            type: Boolean,
        },
        helpMessage: {
            type: Object,
        },
        reset_password_token: {
            type: String,
        },
        reset_password_expires: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
)

userSchema.methods.comparePassword = (password) => {
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema)
module.exports = User
