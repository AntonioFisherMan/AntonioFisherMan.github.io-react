const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goodsSchema = new Schema(
  {
    img: {
      type: String,
    },
    text: {
      type: String,
    },
    slogan: {
      type: String,
    },
    price: {
      type: Number,
    },
    salePrice: {
      type: Number,
    },
    sizes: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Goods = mongoose.model("Goods", goodsSchema);
module.exports = Goods;
