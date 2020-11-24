const router = require('express').Router()
const multer = require('multer')

let Inform = require('../models/inform.model')
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
})

let upload = multer({ storage: storage }).single('file')

router.get('/:id', async (req, res) => {
    try {
        const inform = await Inform.findOne({ userId: req.params.id })
        if (inform === null) {
            return res.json({ message: 'Your inform is null' })
        } else {
            return res.json(inform)
        }
    } catch (err) {
        if (err.name === 'CastError') res.status(404).json('Inform with Given ID not found.')
        else res.status(500).json('Error getting Inform Of User.')
    }
})

router.post('/upload/:id', upload, async (req, res) => {
    const file = req.file
    if (file.length === 0) {
        return res.status(400).json({ message: 'Please choose file' })
    }
    let finalImage
    let str2 = 'public/'
    finalImage = file.path.replace(str2, '')

    try {
        const inform = await Inform.findOneAndUpdate({ userId: req.params.id }, { $set: { 'inform.userImage': finalImage } })
        return res.json({ message: 'Your image successfuly saved', inform })
    } catch (err) {
        return res.json({ message: 'Error with uploading file' })
    }
})
router.post('/:id', async (req, res) => {
    try {
        const newInform = new Inform({
            inform: req.body.inform,
            isAddInform: req.body.isAddInform,
            userId: req.params.id,
        })
        const inform = await newInform.save()
        res.json({ inform: inform, message: 'Your inform successfuly saved' })
    } catch (err) {
        res.status(404).json({ message: 'Your id is not valid' })
    }
})

router.put('/:id', async (req, res) => {
    console.log(req.body)
    try {
        const inform = await Inform.findOneAndUpdate({ userId: req.params.id }, { inform: req.body.inform })
        res.json({ inform, message: 'Your inform successfuly changes' })
    } catch (err) {
        res.status(404).json({ message: 'Your id is not valid' })
    }
})

module.exports = router
