const router = require('express').Router()
const multer = require('multer')

let Goods = require('../models/goods.model')
let Reviews = require('../models/reviews.model')

const pagination = (pageSize, page, resultGoods, res) => {
    const totalCount = Object.keys(resultGoods).length
    const startIndex = (page - 1) * pageSize
    const endIndex = page * pageSize
    const goods = resultGoods.slice(startIndex, endIndex)
    let payload = Object.assign({ totalCount }, { goods })
    res.json(payload)
}

router.post('/', async (req, res) => {
    let data = req.body.data
    const pageSize = req.query.pageSize
    const page = req.query.page

    if (data && data.length > 0) {
        try {
            const goods = await Goods.aggregate([
                { $match: { $or: [{ style: { $in: data } }, { color: { $in: data } }, { sizes: { $in: data } }] } },
            ])
            pagination(pageSize, page, goods, res)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    } else {
        try {
            const resultGoods = await Goods.find()
            pagination(pageSize, page, resultGoods, res)
        } catch (err) {
            console.log(err.message)
            res.status(400).json({ message: err.message })
        }
    }
})

router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Reviews.find()
        res.json(reviews)
    } catch (err) {
        res.status(404).json('Reviews is not found')
    }
})

router.get('/:id', async (req, res) => {
    try {
        const good = await Goods.findById(req.params.id)
        const reviewLength = await Reviews.find({ goodsId: req.params.id })
        const review = await Reviews.find({ goodsId: req.params.id }).limit(2)

        let reviewQuantity = reviewLength.length
        let data = { good, review, reviewQuantity }
        res.json(data)
    } catch (err) {
        if (err.name === 'CastError') res.status(404).json('Goods with Given ID not found.')
        else res.status(500).json('Error getting Good.')
    }
})

let storage = multer.diskStorage({
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

let upload = multer({ storage: storage }).array('file', 3)

router.post('/reviews/:goodsId', (req, res) => {
    upload(req, res, async (err) => {
        let finalImage = []
        let str2 = 'public/'

        Object.keys(req.files).forEach((key) => {
            finalImage.push(req.files[key].path.replace(str2, ''))
        })
        if (err) {
            return res.json({ success: false, message: err.message })
        } else if (!res.req.files) {
            res.status(404).json({ success: false, message: 'No files is selected' })
        } else {
            const newReviews = new Reviews({
                name: req.body.name,
                photo: req.body.photo,
                images: finalImage,
                rating: req.body.rating,
                reviewText: req.body.reviewText,
                goodsId: req.params.goodsId,
            })
            const review = await newReviews.save()
            try {
                res.status(200).json({ review, success: true, message: 'Your review successfuly upload' })
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
        }
    })
})

module.exports = router
