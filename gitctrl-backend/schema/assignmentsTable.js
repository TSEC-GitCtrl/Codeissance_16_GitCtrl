const {Schema, default: mongoose} = require("mongoose");
const AssignmentTableSchema = new Schema({
    title: String,
    description : String,
    startDate : {
        type : Date,
        default : Date.now(),
    },
    endDate : {
        type : Date,
    },
    totalMarks : Number,
    teacherId : {
        type : Schema.Types.ObjectId,
        ref : "teacher"
    },
    bactheIds :  {
        type : [Schema.Types.ObjectId],
        ref : "batch"
    },
});

module.exports = mongoose.model("assignmentTable",AssignmentTableSchema);