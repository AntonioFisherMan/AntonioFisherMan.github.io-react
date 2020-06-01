const router = require("express").Router();
const multer= require("multer")

let Inform =require("../models/inform.model")
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

var upload = multer({ storage: storage }).single("file");

  

router.get("/:id", async(req, res) => {
  try {
    const inform = await Inform.findOne({userId:req.params.id});
    res.send(inform)
    
  } catch (error) {
    console.error(error);
    if (error.name === "CastError")
      res.status(404).send("Inform with Given ID not found.");
    else res.status(500).send("Error getting Inform Of User.");
  }
});

router.put("/:id", function (req, res) {
 
    try {
      upload(req, res, (err) => {
        str2='public/';
        var userImg;
        if(req.file){
          userImg=req.file.path.replace(str2,'');
        }else{
          userImg=null
        }
        let informData = {     
          name: req.body.name, 
          surname: req.body.surname,
          city:req.body.city,
          code :req.body.code,
          country:req.body.country,   
          phone:req.body.phone,
          post:req.body.post,
          userImage:userImg
        };
        const inform=Inform.findOneAndUpdate({userId:req.params.id},{inform:informData}).then(item=>{
          if(item){
            res.status(200).send({
              inform,
              message: 'Your inform successfuly changes'
            })
          }else{
            res.status(404).send({
             message:"Your id is not valid"
            })
          }
        }).catch((err) => res.status(404).send({message:"Error upload inform"}))
      })
      } catch (error) {
        console.error(error);
        if (error.name === "CastError")
          res.status(404).send({message:"Error upload inform"});
        else res.status(500).send({message:"Error upload inform"});
      }
});


 router.post("/:id", (req, res) => {
 
  upload(req, res, (err) => {
    str2='public/';
    var userImg;
    
    if(req.file){
      userImg=req.file.path.replace(str2,'');
    }else{
      userImg=null
    }
    let informData = {     
      name: req.body.name, 
      surname: req.body.surname,
      city:req.body.city,
      code :req.body.code,
      country:req.body.country,   
      phone:req.body.phone,
      post:req.body.post,
      userImage:userImg
    };
  if (err) {
    return res.json({ success: false, message: err.message});
  }else {
    const newInform = new Inform({
      userId:req.params.id,
      inform:informData,
      isAddInform:req.body.isAddInform
    });
    newInform
    .save()
    .then((inform) =>  res.status(200).send({
      inform,
      message: 'Your inform successfuly saved'
    }))
    .catch((err) => res.status(404).json({message:"not post inform"}));
  }

});
})
module.exports = router;