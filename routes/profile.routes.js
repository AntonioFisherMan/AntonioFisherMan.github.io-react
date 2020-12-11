const router = require('express').Router()

let HelpMessage = require('../models/helpMessage.model')
const ProfileController = require('../controllers/profile.controller')
const { jwtCheck } = require('../utils/jwtMiddleware')

router.post('/forgot_password', ProfileController.forgotPassword)
router.post('/reset_password', ProfileController.resetPassword)
router.post('/change_password', jwtCheck, ProfileController.changePassword)

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

module.exports = router
