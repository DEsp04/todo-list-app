const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ItemModel = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("items", ItemModel);