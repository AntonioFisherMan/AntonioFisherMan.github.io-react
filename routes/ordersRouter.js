const router = require("express").Router();

let Orders = require("../models/orders.model");
  
  router.get("/:id", async (req, res) => {
    try {
      const orders = await Orders.find({userId:req.params.id});
      res.send(orders);
    } catch (error) {
      console.error(error);
      if (error.name === "CastError")
        res.status(404).send("Orders with Given ID not found.");
      else res.status(500).send("Error getting Orders.");
    }
  });
  router.post("/", function (req, res) {
    const newOrders = new Orders({
      userId: req.body.userId,
      items:req.body.items,
      inform:req.body.inform
    });
    newOrders
    .save()
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json("not post review"));

  });
  module.exports = router;
