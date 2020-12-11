const Goods = require('../models/goods.model')

class GoodsService {
    getGoods(goodsId,data){
        if(goodsId){
            return Goods.findById(goodsId)
        }
        if(data){
            return Goods.aggregate([
                { $match: { $or: [{ style: { $in: data } }, { color: { $in: data } }, { sizes: { $in: data } }] } },
            ])
        }
        return Goods.find()
      
    }
    updateGoods(data, id) {
        return Goods.findByIdAndUpdate({ _id: id }, { rating: data.rating })
    }
}

module.exports = new GoodsService()
