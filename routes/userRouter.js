const router = require('express').Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

let User = require('../models/user.model')
let HelpMessage = require('../models/helpMessage.model')

let userHandlers = require('./controllers/userController')

router.post('/forgot_password', userHandlers.forgot_password)
router.post('/reset_password', userHandlers.reset_password)
router.post('/change_password', userHandlers.change_password)

router.get('/', (req, res) => {
    try {
        const users = Users.find()
        res.json(users)
    } catch (err) {
        res.status(404).json(err)
    }
})

router.post('/help', async (req, res) => {
    const newHelpMessage = new HelpMessage({
        userId: req.body.userId,
        helpMessage: req.body.helpMessage,
    })
    try {
        const item = await newHelpMessage.save()
        res.status(200).json({ item, message: 'Message successfuly added' })
    } catch (err) {
        res.status(404).json(err)
    }
})

router.post('/', async (req, res) => {
    const { name, email, password } = req.body
    //Simple validation
    if (!name || !email || !password) return res.status(400).json({ message: 'Please enter all fields' })

    const nameDB = await User.findOne({ name })
    if (nameDB) return res.status(400).json({ message: `Name already exist` })
    const emailDB = await User.findOne({ email })
    if (emailDB) return res.status(400).json({ message: `Email already exist` })

    const newUser = new User({ name, email, password })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
            if (err) throw err
            newUser.password = hash
            const item = await newUser.save()
            jwt.sign({ id: item.id }, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {
                if (err) throw err
                res.json({ token, user: { id: item.id, name: item.name, email: item.email } })
            })
        })
    })
})

module.exports = router
