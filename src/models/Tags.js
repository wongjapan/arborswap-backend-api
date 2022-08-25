const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Tags = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Tags", Tags);
