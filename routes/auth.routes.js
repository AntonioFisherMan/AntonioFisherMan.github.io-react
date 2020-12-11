const router = require('express').Router()
const AuthController = require('../controllers/auth.controller')

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.post('/subscribe', AuthController.subscribe)
router.post('/refresh_token', AuthController.refreshToken)
router.post('/logout', AuthController.logout)
router.post('/facebook_auth', AuthController.facebookAuth)
router.post('/google_auth', AuthController.googleAuth)

module.exports = router
