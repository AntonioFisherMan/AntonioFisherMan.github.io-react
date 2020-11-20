const router = require('express').Router()

let Orders = require('../models/orders.model')
let UnloginOrders = require('../models/unloginorders.model')

router.get('/:id', async (req, res) => {
    try {
        const orders = await Orders.find({ userId: req.params.id })
        res.json(orders)
    } catch (err) {
        if (err.name === 'CastError') res.status(404).json('Orders with Given ID not found.')
        else res.status(500).json('Error getting Orders.')
    }
})
router.post('/', async (req, res) => {
    try {
        const newOrders = new Orders({
            userId: req.body.userId,
            items: req.body.items.items,
            inform: req.body.items.inform,
        })
        console.log(req.body)
        const order = await newOrders.save()
        res.status(200).json({ order, message: 'Orders successfuly added' })
    } catch (err) {
        res.status(404).json(err)
    }
})
router.post('/unlogin', async (req, res) => {
    const newUnloginOrders = new UnloginOrders({
        items: req.body.data.items,
        inform: req.body.data.formData,
    })
    try {
        const order = await newUnloginOrders.save()
        res.status(200).json({ order, message: 'Orders successfuly added' })
    } catch (err) {
        res.status(404).json(err)
    }
})
module.exports = router
