const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

class UserModel {
    comparePassword(password) {
        return bcrypt.compareSync(password, this.password)
    }
    static myStatic() {
        return 42
    }
    get myVirtual() {
        return 42
    }
}

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
        resetLink: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)
userSchema.loadClass(UserModel)
const User = mongoose.model('User', userSchema)
module.exports = User
