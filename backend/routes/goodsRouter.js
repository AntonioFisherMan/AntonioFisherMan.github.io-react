const router=require('express').Router();
let Goods=require('../models/goods.model')

router.get('/', function (req, res) {
  Goods.find()
  .then(goods=>res.json(goods))
  .catch(console.log("err"))
})

module.exports=router