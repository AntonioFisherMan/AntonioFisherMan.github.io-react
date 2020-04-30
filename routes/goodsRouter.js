const router = require("express").Router();

let Goods = require("../models/goods.model");
let Reviews = require("../models/reviews.model");

router.get("/", function (req, res) {
  Goods.find()
    .then((goods) => res.json(goods))
    .catch(console.log("err"));
});

router.post("/", function (req, res) {
  const newGoods = new Goods({
    img: req.body.img,
    text: req.body.text,
    slogan: req.body.slogan,
    price: req.body.price,
  });
  newGoods
    .save()
    .then((item) => res.json(item))
    .catch(console.log("err"));
});

router.get("/reviews", function (req, res) {
  Reviews.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(404).json("Reviews is not found"));
});
router.post("/reviews", function (req, res) {
  const newReview = new Reviews({
    name: req.body.name,
    photo: req.body.photo,
    images: req.body.images,
    reviewText: req.body.reviewText,
    rating: req.body.rating,
  });
  newReview
    .save()
    .then((review) => res.json(review))
    .catch((err) => res.status(404).json("not post review"));
});

router.get("/:id", async (req, res) => {
  try {
    const good = await Goods.findById(req.params.id);
    const review = await Reviews.find({ goodsId: req.params.id });

    var data={good,review}
    var payload={}
    var goods = Object.assign({data},payload);
    res.send(goods);

  } catch (error) {
    console.error(error);
    if (error.name === "CastError")
      res.status(404).send("Goods with Given ID not found.");
    else res.status(500).send("Error getting Good.");
  }
});
module.exports = router;
