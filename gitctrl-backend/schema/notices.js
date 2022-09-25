const Mongoose = require("mongoose");
const {Schema, default: mongoose} = require("mongoose")
const NoticeSchema = new Mongoose.Schema({
    notice: String,
    description: String,
    date : {
        type : Date,
        default : Date.now()
    },
    department :{
        type : Schema.Types.ObjectId,
        ref : "department"
    }
});

module.exports = mongoose.model("notice",NoticeSchema);