const multer = require('multer')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
})

exports.uploadOne = multer({ storage: storage }).single('file')
exports.uploadMultiply = multer({ storage: storage }).array('file', 3)
