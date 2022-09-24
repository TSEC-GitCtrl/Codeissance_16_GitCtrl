const {Schema, default: mongoose} = require("mongoose");
const AssignmentSubmissionSchema = new Schema({
    assignmentId : {
        type : Schema.Types.ObjectId,
        ref : "assignmentTable"
    },
    studentId : {
        type : Schema.Types.ObjectId,
        ref : "student"
    },
    submissionContent : String,
    submissionDoc : String,
    obtainedMarks : Number
});

module.exports = mongoose.model("assignmentSubmission",AssignmentSubmissionSchema);