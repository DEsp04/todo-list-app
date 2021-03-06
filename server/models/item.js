const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Item = new Schema(
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

module.exports = mongoose.model("items", Item);