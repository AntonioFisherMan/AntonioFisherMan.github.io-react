const router = require('express').Router()
const multer = require('multer')

let Goods = require('../models/goods.model')
let Reviews = require('../models/reviews.model')
let success = true
const pagination = (pageSize, page, resultGoods, res) => {
    const totalCount = Object.keys(resultGoods).length
    const startIndex = (page - 1) * pageSize
    const endIndex = page * pageSize
    const goods = resultGoods.slice(startIndex, endIndex)
    let payload = Object.assign({ totalCount }, { goods })
    res.json({ payload, success })
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
            res.status(400).json({ message: err.message })
        }
    }
})
router.post('/rating/:id', async (req, res) => {
    try {
        console.log(req.body)
        await Goods.findByIdAndUpdate({ _id: req.params.id }, { rating: req.body.rating })
    } catch (err) {
        res.status(404).json('Error')
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
})

let upload = multer({ storage: storage }).array('file', 3)

router.post('/reviews/:goodsId', upload, async (req, res) => {
    const files = req.files
    if (files.length === 0) {
        return res.status(400).json({ message: 'Please choose files' })
    }
    let finalImage = []
    let str2 = 'public/'
    Object.keys(files).forEach((key) => {
        finalImage.push(files[key].path.replace(str2, ''))
    })
    console.log(res.req.body)
    const newReviews = new Reviews({
        name: res.req.body.name,
        userImage: res.req.body.userImage,
        images: finalImage,
        rating: res.req.body.rating,
        reviewText: res.req.body.text,
        goodsId: req.params.goodsId,
    })
    try {
        const data = await newReviews.save()
        return res.json({ data: data, message: 'Your review successfuly added' })
    } catch (error) {
        return res.json({ message: error })
    }
})
module.exports = router
