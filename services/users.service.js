const User = require('../models/user.model')
const Subscribers = require('../models/subscribers.model')
class UsersService {
    getUsers(id, email, name, resetLink) {
        if (id) {
            return User.findOne({ id })
        } else if (email) {
            return User.findOne({ email })
        } else if (name) {
            return User.findOne({ name })
        } else if (resetLink) {
            return User.findOne({ resetLink })
        }
        return User.find()
    }
    getSubscribers(email) {
        return Subscribers.findOne({ email })
    }
    createUsers(name, email, password) {
        const newUser = new User({ name, email, password })
        return newUser.save()
    }
    createSubscribers(email) {
        return new Subscribers({ email: email })
    }
}

module.exports = new UsersService()
