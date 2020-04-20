const router = require("express").Router();
let User = require("../models/user.model");

router.get("/", function (req, res) {
  User.find()
    .then((users) => res.json(users))
    .catch(console.log("err"));
});

router.post("/", (req, res) => {
  const newUser = new User({
   name:req.body.name,
   email:req.body.email,
   password:req.body.password
  });
  newUser .save().then(item => res.json(item)).catch(console.log("err"));
});

router.delete("/:id", (req, res) => {
   User.findById(req.params.id)
   .then(item=>item.remove().then(()=>res.json({success:true})))
   .catch(err=>res.status(404).json({success:false}))
})

module.exports = router;
