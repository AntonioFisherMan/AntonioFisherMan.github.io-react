let EmailService = require('../utils/emailService')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const UsersService = require('../services/users.service')
const PASS_RESET_KEY = config.get('RESET_PASSWORD_KEY')

class ProfileController {
    async changePassword(req, res) {
        const user = await UsersService.getUsers('', req.body.email, '', '')
        if (user) {
            const isMatch = await bcrypt.compare(req.body.oldPass, user.password)
            if (!isMatch) return res.status(400).json({ message: `Your old password is not valid` })
            if (req.body.newPassword === req.body.verifyPassword) {
                user.password = bcrypt.hashSync(req.body.newPassword, 10)
                user.save((err) => (err ? res.status(422).json({ message: err }) : null))
            } else {
                return res.status(422).json({ message: 'Passwords do not match' })
            }
            return res.status(200).json({ message: 'Password successfuly changed' })
        } else {
            return res.status(400).json({ message: 'Incorect query' })
        }
    }

    async forgotPassword(req, res) {
        const email = req.body.forgotEmail
        const subject = 'Password succesfuly arrived'
        const user = await UsersService.getUsers('', email, '')
        if (!user) {
            return res.status(400).json({ message: `User  with this email:${email} does not exist` })
        }
        const token = await jwt.sign({ _id: user._id }, PASS_RESET_KEY, { expiresIn: '5m' })
        return user.updateOne({ resetLink: token }, (err) => {
            if (err) {
                return res.status(400).json({ message: 'Reset password link error' })
            } else {
                return EmailService.sendMail(email, token, subject, true, res, '')
            }
        })
    }

    async resetPassword(req, res) {
        const { token, newPass, verifyPass } = req.body
        const subject = 'Your password succesfuly changed'

        if (token) {
            if (newPass === verifyPass) {
                jwt.verify(token, PASS_RESET_KEY, async (err) => {
                    if (err) return res.status(401).json({ message: 'Reset token is invalid or has expired.' })
                    const user = await UsersService.getUsers('', '', '', token)
                    if (!user) {
                        return res.status(400).json({ message: `User with this token does not exist` })
                    }
                    try {
                        user.password = bcrypt.hashSync(newPass, 10)
                        await user.save()
                        return EmailService.sendMail(user.email, '', subject, false, res, newPass)
                    } catch (err) {
                        return res.status(400).json({ message: 'Reset password error' })
                    }
                })
            } else {
                return res.status(422).json({ message: 'Passwords do not match' })
            }
        } else {
            return res.status(401).json({ message: 'Auth error' })
        }
    }
}

module.exports = new ProfileController()
