const InformService = require('../services/inform.service')

class InformController {
    async getInform(req, res) {
        const id = req.params.id || req.query.id
        if (id) {
            const userInform = await InformService.getInform(id)
            if (userInform) return res.json(userInform)
            return res.status(200).json({ message: 'Inform not found' })
        } else {
            const usersInform = await InformService.getInform()
            return res.json(usersInform)
        }
    }
    async createInform(req, res) {
        if (req.body.inform) {
            const inform = await InformService.createInform({
                inform: req.body.inform,
                isAddInform: req.body.isAddInform,
                id: req.query.id,
            })
            if (inform) return res.json({ inform: inform, message: 'Your inform successfuly saved' })
            return res.status(500).json({ message: 'Unable create user.' })
        } else {
            return res.status(400).send({ message: 'Bad request.' })
        }
    }
    async updateInform(req, res) {
        if (req.body.inform) {
            const inform = await InformService.updateInform(req.query.id, req.body.inform)
            if (inform) return res.json({ inform, message: 'Your inform successfuly changes' })
            return res.status(500).json({ message: 'Unable update user.' })
        } else {
            return res.status(400).send({ message: 'Bad request.' })
        }
    }
    async uploadFile(req, res) {
        const file = req.file
        if (file.length === 0) {
            return res.status(400).json({ message: 'Please choose file' })
        }
        let finalImage
        let str2 = 'public/'
        finalImage = file.path.replace(str2, '')
        try {
            const inform = await InformService.updateInform(req.query.userId, '', finalImage)
            return res.json({ message: 'Your image successfuly saved', inform })
        } catch (err) {
            return res.json({ message: 'Error with uploading file' })
        }
    }
}

module.exports = new InformController()
