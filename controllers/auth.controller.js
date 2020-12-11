const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const fetch = require('node-fetch')
const { OAuth2Client } = require('google-auth-library')

const { getUsers, createUsers, createSubscribers, getSubscribers } = require('../services/users.service')
const { getInform } = require('../services/inform.service')
const { issuesPairToken } = require('../utils/tokensService')

const Tokens = require('../models/tokens.model')

const GOOGLE_ID = config.get('GOOGLE_ID')
const client = new OAuth2Client(GOOGLE_ID)

class AuthController {
    async login(req, res) {
        const { email, password, rememberMe } = req.body
        //Simple validation
        if (!email || !password) return res.status(400).json({ message: 'Please enter all fields' })
        //Check for existing User
        const user = await getUsers(null, email)
        if (!user) return res.status(400).json({ message: `User does not exist` })
        const inform = await getInform(user.id)
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ message: `Invalid password` })

        const tokens = await issuesPairToken(user, rememberMe)
        res.cookie('rememberme', '1', { expires: new Date(Date.now() + 99900000), httpOnly: true })
        res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, signed: true })
        return res.json({ tokens, user: { id: user._id, name: user.name, email: user.email }, inform })
    }

    async register(req, res) {
        const { name, email, password } = req.body
        //Simple validation
        if (!name || !email || !password) return res.status(400).json({ message: 'Please enter all fields' })

        const nameDB = await getUsers('', '', name, '')
        if (nameDB) return res.status(400).json({ message: `Name already exist` })
        const emailDB = await getUsers('', email, '', '')
        if (emailDB) return res.status(400).json({ message: `Email already exist` })

        const newUser = await createUsers(name, email, password)

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, async (err, hash) => {
                if (err) throw err
                newUser.password = hash
                const item = await newUser.save()
                const tokens = await issuesPairToken(item)
                return res.json({ tokens, user: { id: item._id, name: item.name, email: item.email } })
            })
        })
    }

    async refreshToken(req, res) {
        const { refreshToken } = req.body
        const dbToken = await Tokens.findOne({ refreshToken })

        if (!refreshToken) return res.sendStatus(403)
        if (!dbToken) return res.status(401).json({ message: 'TOKEN_EXPIRED/INVALID_REFRESH_SESSION' })

        try {
            const user = await jwt.verify(refreshToken, config.get('JWT_SECRET'))
            const tokens = await issuesPairToken(user)
            await Tokens.findOneAndUpdate({ userId: user._id }, { accessToken: tokens.accessToken, refreshToken: tokens.refreshToken })
            return res.json({ tokens: tokens })
        } catch (error) {
            return res.status(402).json({ message: 'TOKEN_EXPIRED/INVALID_REFRESH_SESSION' })
        }
    }

    async facebookAuth(req, res) {
        const { accessToken, userID } = req.body
        let urlFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`

        try {
            const response = await fetch(urlFacebook, { method: 'GET' }).then((response) => response.json())
            const { email, name } = response
            if (!email) return res.status(400).json({ message: 'Your FB account does not have email' })
            const user = await getUsers('', email, '', '')
            if (user) {
                const tokens = await issuesPairToken(user)
                const inform = await getInform(user.id)
                res.json({ tokens, user: { id: user._id, name: user.name, email: user.email }, inform })
            } else {
                const newUser = await createUsers(name, email, email + config.get('JWT_SECRET'))
                const tokens = await issuesPairToken(newUser)
                res.json({ tokens, user: { id: newUser._id, name: newUser.name, email: newUser.email } })
            }
        } catch (err) {
            return res.status(400).json({ message: err.message })
        }
    }

    async googleAuth(req, res) {
        const { tokenId } = req.body
        const response = await client.verifyIdToken({ idToken: tokenId, audience: GOOGLE_ID })
        const { email_verified, name, email } = response.payload
        try {
            if (email_verified) {
                const user = await getUsers('', email, '', '')
                if (user) {
                    const tokens = await issuesPairToken(user)
                    const inform = await getInform(user.id)
                    res.json({ tokens, user: { id: user._id, name: user.name, email: user.email }, inform })
                } else {
                    const newUser = await createUsers(name, email, email + config.get('JWT_SECRET'))
                    const tokens = await issuesPairToken(newUser)
                    res.json({ tokens, user: { id: newUser._id, name: newUser.name, email: newUser.email } })
                }
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }

    async logout(req, res) {
        const { refreshToken, userId } = req.body
        const refreshTokenDb = await Tokens.findOne({ refreshToken })
        if (!refreshTokenDb) {
            return res.status(403).json({ message: 'TOKEN_EXPIRED/INVALID_SESSION' })
        }
        if (!refreshToken) {
            return res.status(401).json({ message: 'Bad credentials' })
        }
        await Tokens.findOneAndDelete({ userId: userId })
        return res.json({ success: true })
    }
    async subscribe(req, res) {
        const subscriber = await getSubscribers(req.body.email)
        if (subscriber) return res.status(400).json({ message: `You have already first discount` })
        else {
            const Subscriber = await createSubscribers(req.body.email)
            await Subscriber.save()
            return res.status(200).send({ success: true, message: 'Your email successfuly send' })
        }
    }
}

module.exports = new AuthController()
