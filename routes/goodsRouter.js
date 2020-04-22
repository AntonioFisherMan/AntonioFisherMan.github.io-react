const router=require('express').Router();
const auth=require("../middleware/auth")



let Goods=require('../models/goods.model')

router.get('/', auth,function (req, res) {
  Goods.find()
  .then(goods=>res.json(goods))
  .catch(console.log("err"))
})
router.post('/',auth, function (req, res) {
const newGoods=new Goods({
  img:req.body.img,
  text:req.body.text,
  slogan:req.body.slogan,
  price:req.body.price
});
newGoods.save().then(item => res.json(item)).catch(console.log("err"));
})
module.exports=router