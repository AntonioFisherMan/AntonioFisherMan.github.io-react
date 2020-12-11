const router = require('express').Router()
const { uploadOne } = require('../utils/fileService')
const InformController = require('../controllers/inform.controller')

router.route('/').get(InformController.getInform).post(InformController.createInform).put(InformController.updateInform)

router.post('/upload', uploadOne, InformController.uploadFile)

module.exports = router
