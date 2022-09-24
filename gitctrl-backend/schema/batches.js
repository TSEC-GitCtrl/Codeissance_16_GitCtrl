const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const BatchSchema = new mongoose.Schema({
  name: String,
  classroom: {
    type: Schema.Types.ObjectId,
    ref: "classroom",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("batch", BatchSchema);
