const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TokenSchema = new Schema(
  {
    name: {
      type: String,
    },
    symbol: {
      type: String,
    },
    address: {
      type: String,
    },
    img: {
      type: String,
    },
    decimals: {
      type: String,
    },
    totalSupply: {
      type: String,
    },
    circulatingSupply: {
      type: String,
    },
    url: {
      type: String,
    },
    usdprice: {
      type: String,
    },
    network: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Token", TokenSchema);
