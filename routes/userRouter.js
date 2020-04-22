const router = require("express").Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

let User = require("../models/user.model");

router.get("/", function (req, res) {
  User.find()
    .then((users) => res.json(users))
    .catch(console.log("err"));
});

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  //Simple validation
  if (!name || !email || !password)
    return res.status(400).json({ message: "Please enter all fields" });
  //Check for existing User
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ message: `User already exist` });
  });
  const newUser = new User({
    name,
    email,
    password,
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;

      newUser.save().then((user) => {
        jwt.sign(
          { id: user.id },
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
              },
            });
          }
        );
      });
    });
  });
});


router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
