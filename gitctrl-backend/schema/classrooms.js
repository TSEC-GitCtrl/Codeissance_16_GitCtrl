const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ClassrommSchema = new mongoose.Schema({
  name: String,
  department: {
    type: Schema.Types.ObjectId,
    ref: "department",
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

module.exports = mongoose.model("classroom", ClassrommSchema);
