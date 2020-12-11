const Reviews = require('../models/reviews.model')

class ReviewsService {
    getReviews(id){
        if(id){
            return Reviews.find({ goodsId: id })
        }
        return Reviews.find()
    }
    createReviews(data, files, goodsId) {
        let finalImage = []
        let str2 = 'public/'
        Object.keys(files).forEach((key) => {
            finalImage.push(files[key].path.replace(str2, ''))
        })

        const newReviews = new Reviews({
            name: data.name,
            userImage: data.userImage,
            images: finalImage,
            rating: data.rating,
            reviewText: data.text,
            goodsId: goodsId,
        })
        return newReviews.save()
    }
}
module.exports = new ReviewsService()
