const router = require('express').Router()
const multer = require('multer')

let Inform = require('../models/inform.model')
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Only image files are allowed!'), false)
        }
        cb(null, true)
    },
})

var upload = multer({ storage: storage }).single('file')

router.get('/:id', async (req, res) => {
    try {
        const inform = await Inform.findOne({ userId: req.params.id })
        res.json(inform)
    } catch (err) {
        if (err.name === 'CastError') res.status(404).json('Inform with Given ID not found.')
        else res.status(500).json('Error getting Inform Of User.')
    }
})

router.put('/:id', async (req, res) => {
    try {
        upload(req, res, async (err) => {
            str2 = 'public/'
            var userImg
            if (req.file) {
                userImg = req.file.path.replace(str2, '')
            } else {
                userImg = null
            }
            let informData = {
                name: req.body.name,
                surname: req.body.surname,
                city: req.body.city,
                code: req.body.code,
                country: req.body.country,
                phone: req.body.phone,
                post: req.body.post,
                userImage: userImg,
            }
            try {
                const inform = await Inform.findOneAndUpdate({ userId: req.params.id }, { inform: informData })
                res.status(200).json({ inform, message: 'Your inform successfuly changes' })
            } catch (err) {
                res.status(404).json({ message: 'Your id is not valid', err })
            }
        }).catch((err) => res.status(404).json({ message: err }))
    } catch (err) {
        if (err.name === 'CastError') res.status(404).json({ message: 'Error upload inform' })
        else res.status(500).json({ message: 'Error upload inform' })
    }
})

router.post('/:id', (req, res) => {
    upload(req, res, async (err) => {
        str2 = 'public/'
        var userImg

        if (req.file) {
            userImg = req.file.path.replace(str2, '')
        } else {
            userImg = null
        }
        let informData = {
            name: req.body.name,
            surname: req.body.surname,
            city: req.body.city,
            code: req.body.code,
            country: req.body.country,
            phone: req.body.phone,
            post: req.body.post,
            userImage: userImg,
        }
        if (err) {
            return res.json({ success: false, message: err.message })
        } else {
            const newInform = new Inform({
                userId: req.params.id,
                inform: informData,
                isAddInform: req.body.isAddInform,
            })

            try {
                const inform = await newInform.save()
                res.status(200).json({ inform, message: 'Your inform successfuly saved' })
            } catch (err) {
                res.status(404).json({ message: err })
            }
        }
    })
})
module.exports = router
