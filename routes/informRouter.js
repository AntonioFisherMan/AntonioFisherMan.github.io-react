const router = require("express").Router();


let Inform =require("../models/inform.model")

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


  
router.put("/:id", async function (req, res) {
    try {
        const inform= await Inform.findOneAndUpdate({userId:req.params.id},{inform:req.body.inform})
        res.send(inform)
      } catch (error) {
        console.error(error);
        if (error.name === "CastError")
          res.status(404).send("Inform with Given ID not found.");
        else res.status(500).send("Error getting Inform Of User.");
      }
});


module.exports = router;