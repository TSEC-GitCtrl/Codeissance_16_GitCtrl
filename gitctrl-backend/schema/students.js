const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  surname: String,
  rollNo: String,
  sem: Number,
  batch: {
    type: Schema.Types.ObjectId,
    ref: "batch",
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

module.exports = mongoose.model("student", StudentSchema);
