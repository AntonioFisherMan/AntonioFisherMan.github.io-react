const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const goodsSchema=new Schema({
    goods:{
      img:String,
      text:String,
      slogan:String,
      price:Number,
      button:Number
    },
},{
  timestamps:true,
}); 

const Goods=mongoose.model('Goods',goodsSchema)
module.exports=Goods;