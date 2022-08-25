const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var Useradmin = new Schema(
  {
    username: {
      type: String,
      default: "",
      unique: true,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

Useradmin.plugin(passportLocalMongoose);

module.exports = mongoose.model("Useradmin", Useradmin);
