const router = require('express').Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

let User = require('../models/user.model')
let Inform = require('../models/inform.model')
let Subscribers = require('../models/subscribers.model')

router.post('/', async (req, res) => {
    const { email, password } = req.body
    //Simple validation
    if (!email || !password) return res.status(400).json({ message: 'Please enter all fields' })
    //Check for existing User
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: `User does not exist` })

    const inform = await Inform.findOne({ userId: user.id })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ message: `Invalid password` })

    jwt.sign({ id: user.id }, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {
        if (err) throw err
        res.json({ token, user: { id: user.id, name: user.name, email: user.email }, inform })
    })
})

router.post('/subscribe', async (req, res) => {
    const subscriber = await Subscribers.findOne({ email: req.body.email })
    if (subscriber) return res.status(400).json({ message: `You have already first discount` })
    else {
        const Subscriber = new Subscribers({ email: req.body.email })
        try {
            await Subscriber.save()
            res.status(200).send({ success: true, message: 'Your email successfuly send' })
        } catch (err) {
            res.status(404).send({ err, success: false })
        }
    }
})

module.exports = router
