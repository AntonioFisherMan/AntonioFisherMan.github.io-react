const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')

var cookieParser = require('cookie-parser')

const app = new express()
//BODY-PARSER Middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
require('dotenv').config()

app.use(cors())
app.use(express.json())

const db = config.get('mongoURI')

mongoose
    .connect(process.env.MONGODB_URI || db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch((err) => {
        console.log(`DB Connection Error: ${err.message}`)
    })

const port = process.env.PORT || 5001
app.listen(port, () => console.log(`Server started on ${port}`))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const userRouter = require('./routes/userRouter')
app.use('/users', userRouter)
const goodsRouter = require('./routes/goodsRouter')
app.use('/goods', goodsRouter)
const authRouter = require('./routes/authRouter')
app.use('/auth', authRouter)

const ordersRouter = require('./routes/ordersRouter')
app.use('/orders', ordersRouter)

const informRouter = require('./routes/informRouter')
app.use('/inform', informRouter)
