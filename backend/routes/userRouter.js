const router=require('express').Router();
let User=require('../models/user.model')

router.get('/', function (req, res) {
  User.find()
  .then(users=>res.json(users))
  .catch(console.log("err"))
})

router.route('/add').get((req, res)=> {
    const username=req.body.username
    const newUser=new User({username});
    newUser.save()
    .then(()=>res.json('user Added'))
    .catch(console.log("err"))
});
module.exports=router