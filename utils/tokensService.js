const jwt = require('jsonwebtoken')
const config = require('config')
const Tokens = require('../models/tokens.model')

const createAccessToken = (user) => {
    return jwt.sign({ _id: user._id }, config.get('JWT_SECRET'), { expiresIn: '1h' })
}
const createRefreshToken = (user, rememberMe) => {
    if (rememberMe) {
        return jwt.sign({ _id: user._id }, config.get('JWT_SECRET'), { expiresIn: '2h' })
    }
    return jwt.sign({ _id: user._id }, config.get('JWT_SECRET'), { expiresIn: '10m' })
}
exports.issuesPairToken = async (user, rememberMe) => {
    const accessToken = await createAccessToken(user)
    const refreshToken = await createRefreshToken(user, rememberMe)
    const tokens = { accessToken: accessToken, refreshToken: refreshToken }
    try {
        const userDb = await Tokens.findOne({ userId: user._id })
        if (userDb) {
            await userDb.updateOne({ accessToken: accessToken, refreshToken: refreshToken })
        } else {
            const newTokens = new Tokens({ refreshToken: refreshToken, accessToken: accessToken, userId: user._id })
            await newTokens.save()
        }
    } catch (error) {
        throw new Error('Can not save tokens')
    }
    return tokens
}
