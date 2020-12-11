let nodemailer = require('nodemailer')
const config = require('config')
require('dotenv').config()
let user = config.get('USER_GMAIL')
let pass = config.get('PASSWORD_GMAIL')

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: user,
        pass: pass,
    },
})

exports.sendMail = (to, token, subject, html, res, password) => {
    let forgotPassHtml =
        '<h1>DresssItBox</h1>\n<p>Спасибо за ваш запрос ' + `<b>Change pass https://full-stack-shop.herokuapp.com/forgotchangepass/${token}</b>`
    let resetHtml = '<h1>DresssItBox</h1>\n<p>Ваш пароль изменен успешно: ' + `<b>${password} </b>`

    var mailOptions = {
        from: user, // jsoner address
        to: to, // list of receivers
        subject: subject,
        generateTextFromHtml: true,
        html: html ? forgotPassHtml : resetHtml,
    }
    return transporter.sendMail(mailOptions, (err) => {
        if (err) {
            return res.status(500).json({ message: err })
        }
        return res.json({ message: html ? message : resetMessage })
    })
}

const message = 'Kindly check your email in order to see your password'
const resetMessage = 'Your password successfuly changed'
