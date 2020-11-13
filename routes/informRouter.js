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

//var upload = multer({ storage: storage }).single('file')
var upload = multer({ storage: storage })
router.get('/:id', async (req, res) => {
    try {
        const inform = await Inform.findOne({ userId: req.params.id })
        res.json(inform)
    } catch (err) {
        if (err.name === 'CastError') res.status(404).json('Inform with Given ID not found.')
        else res.status(500).json('Error getting Inform Of User.')
    }
})
router.post('/uploadimage', upload.single('file'), (req, res, next) => {
    const file = req.file
    // str2 = 'public/'
    // var userImg
    // if (req.file) {
    //     userImg = req.file.path.replace(str2, '')
    // } else {
    //     userImg = null
    // }
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})
router.put('/:id', async (req, res) => {
    try {
        let informData = {
            name: req.body.name,
            surname: req.body.surname,
            city: req.body.city,
            code: req.body.code,
            country: req.body.country,
            phone: req.body.phone,
            post: req.body.post,
        }
        const inform = await Inform.findOneAndUpdate({ userId: req.params.id }, { inform: informData })
        res.status(200).json({ inform, message: 'Your inform successfuly changes' })
    } catch (err) {
        res.status(404).json({ message: 'Your id is not valid', err })
    }
})
router.post('/:id', (req, res) => {
    let informData = {
        name: req.body.name,
        surname: req.body.surname,
        city: req.body.city,
        code: req.body.code,
        country: req.body.country,
        phone: req.body.phone,
        post: req.body.post,
    }
    console.log(req.body)
    const newInform = new Inform({
        userId: req.params.id,
        inform: informData,
        isAddInform: req.body.isAddInform,
    })
    newInform
        .save()
        .then((inform) => {
            res.status(200).json({ inform, message: 'Your inform successfuly saved' })
        })
        .catch((err) => {
            res.status(404).json({ message: err })
        })
})
router.post('/upload/:id', (req, res) => {
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
