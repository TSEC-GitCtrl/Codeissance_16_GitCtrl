const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,

  studName : String,
  studSurname : String,
  studRollNo : String,
  studBatch:{
    type :mongoose.Schema.Types.ObjectId,
    ref : "batch"
  },

  teachName : String,
  teachSurname : String,
  teachDept:{
    type :mongoose.Schema.Types.ObjectId,
    ref : "department" 
  },
  
  createdAt:{
    type : Date,
    default : Date.now(),
  },
  updatedAt:{
    type : Date,
    default : Date.now(),
  },
  role:{
    type : String,
    ref : "role"
  },
});

module.exports = mongoose.model("user", UserSchema);
