const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var User = new Schema(
  {
    username: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      unique: true,
    },
    nonce: {
      type: String,
    },
    email: {
      type: String,
    },
    bio: {
      type: String,
    },
    profilepic: {
      type: String,
    },
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    insta: {
      type: String,
    },
    premium: {
      type: Boolean,
      default: false,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", User);
