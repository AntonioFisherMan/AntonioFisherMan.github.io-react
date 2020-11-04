var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    crypto = require('crypto'),
    sha256 = require('js-sha256')
nodemailer = require('nodemailer')
bcrypt = require('bcryptjs')
async = require('async')

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'tooxa9@gmail.com',
        pass: 'zxcv123580',
    },
})

exports.forgot_password = function (req, res) {
    async.waterfall(
        [
            function (done) {
                User.findOne({
                    email: req.body.forgotEmail,
                }).exec(function (err, user) {
                    if (user) {
                        done(err, user)
                    } else {
                        done('User not found.')
                    }
                })
            },
            function (user, done) {
                // create the random token
                crypto.randomBytes(20, function (err, buffer) {
                    var token = buffer.toString('hex')
                    done(err, user, token)
                })
            },
            function (user, token, done) {
                User.findByIdAndUpdate(
                    { _id: user._id },
                    { reset_password_token: token, reset_password_expires: Date.now() + 86400000 },
                    { upsert: true, new: true }
                ).exec(function (err, new_user) {
                    done(err, token, new_user)
                })
            },
            function (token, user, done) {
                var mailOptions = {
                    from: 'tooxa9@gmail.com', // jsoner address
                    to: user.email, // list of receivers
                    subject: 'Password help has arrived!',
                    text: 'Change pass https://fullstack-shop.herokuapp.com/forgotchangepass/' + token,
                }

                transporter.jsonMail(mailOptions, function (error, info) {
                    if (error) {
                        return done(err)
                    }

                    return res.json({ message: 'Kindly check your email for further instructions' })
                })
            },
        ],
        function (err) {
            return res.status(422).json({ message: err })
        }
    )
}

/**
 * Reset password
 */
exports.reset_password = async (req, res) => {
    const user = await User.findOne({
        reset_password_token: req.body.token,
        reset_password_expires: {
            $gt: Date.now(),
        },
    })
    if (user) {
        if (req.body.newPassword === req.body.verifyPassword) {
            user.password = bcrypt.hashSync(req.body.newPassword, 10)
            user.reset_password_token = undefined
            user.reset_password_expires = undefined
            user.save((err) => {
                if (err) {
                    res.status(422).json({ message: err })
                } else {
                    var data = {
                        to: user.email,
                        from: 'tooxa9@gmail.com',
                        subject: 'Password Reset Confirmation',
                        text: 'Your password succesfuly changed',
                    }

                    transporter.jsonMail(data, (err) => {
                        if (!err) {
                            res.json({ message: 'Password successfuly eset' })
                        } else {
                            res.status(400).json({ message: err })
                        }
                    })
                }
            })
        } else {
            res.status(422).json({ message: 'Passwords do not match' })
        }
        res.status(200).json({ message: 'Password successfuly changed' })
    } else {
        res.status(400).json({ message: 'Password reset token is invalid or has expired.' })
    }
}

//CHANGEUSERPASS

exports.change_password = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const isMatch = bcrypt.compare(req.body.oldPass, user.password)
            if (!isMatch) return res.status(400).json({ message: `Your old password is not valid` })
            if (req.body.newPassword === req.body.verifyPassword) {
                user.password = bcrypt.hashSync(req.body.newPassword, 10)
                user.save((err) => (err ? res.status(422).json({ message: err }) : null))
            } else {
                res.status(422).json({ message: 'Passwords do not match' })
            }
            res.status(200).json({ message: 'Password successfuly changed' })
        } else {
            res.status(400).json({ message: 'Incorect query' })
        }
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
