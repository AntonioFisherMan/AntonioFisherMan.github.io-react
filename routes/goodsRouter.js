const router = require("express").Router();
const multer= require("multer")



let Goods = require("../models/goods.model");
let Reviews = require("../models/reviews.model");





router.get("/", function (req, res) {
  const page=req.query.page;
  const pageSize=req.query.pageSize;
  
  Goods.find() 
    .then(resultGoods=>{
      const totalCount=Object.keys(resultGoods).length
      const startIndex=(page-1)*pageSize;
      const endIndex=page*pageSize
      const goods=resultGoods.slice(startIndex,endIndex)
      var payload=Object.assign({totalCount},{goods})
      res.json(payload)
    })
    .catch(console.log("err"));
});

router.post("/", function (req, res) {
  const newGoods = new Goods({
    photos: req.body.photos,
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

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Only image files are allowed!'), false);
  }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).array("file",3);

router.post("/reviews/:goodsId", (req, res) => {
  upload(req, res, (err) => {
    var finalImage=[]
    str2='public/';

    Object.keys(req.files).forEach(key => {
      finalImage.push(req.files[key].path.replace(str2, ''))
     
  })
  console.log(finalImage)
    if (err) {
      return res.json({ success: false, message: err.message});
    }else if (!res.req.files) {
      res.status(404).send({
        success: false,
        message: "No files is selected",
      });
    }else {
      const newReviews = new Reviews({
        name: req.body.name,
        photo: req.body.photo,
        images: finalImage,
        rating: req.body.rating,
        reviewText:req.body.reviewText,
        goodsId:req.params.goodsId
      });
      newReviews
        .save()
        .then(review=>{
          res.status(200).send({
            review,
            success: true,
            message: "Your review successfuly upload",
          });
        })
        .catch(console.log("err"));
     
    }
  });
});



module.exports = router;
