const express = require('express')
cors = require('cors')
mongoose = require('mongoose')
config = require('config')
path = require('path')
bp = require('body-parser')
cookieParser = require('cookie-parser')
cookieSecret = config.get('COOKIE_SECRET')
routes = require('./routes/index')
require('dotenv').config()




const app = new express()
app.use(cookieParser(cookieSecret))
// app.use(
//     require('express-session')({
//         resave: false,
//         saveUninitialized: false,
//         secret: cookieSecret,
//     })
// )

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const db = config.get('MONGO_URI')

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on ${port}`))
try {
    mongoose.connect(process.env.MONGODB_URI || db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    console.log('DB Connected!')
} catch (err) {
    console.log(`DB Connection Error: ${err.message}`)
}

app.use('/', routes)

// FOR PRODUCTRION SET UP THIS BLOCK AT THE END OF CODE
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
