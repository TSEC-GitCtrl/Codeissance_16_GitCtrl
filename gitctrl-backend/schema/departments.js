const mongoose = require("mongoose");
const DepartmentSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("department", DepartmentSchema);
