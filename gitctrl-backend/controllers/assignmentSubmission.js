const assignmentSubmissionModel = require("../schema/assignmentSubmissions");
const returnMessage = require("./message");
const messages = require("../lang/messages.json");

module.exports = {
  index: async(req,res) => {
    try {
      const assignmentSubmissions = await assignmentSubmissionModel.find({});
      returnMessage.successMessage(res,messages.successMessages.getAlltudents,assignmentSubmissions);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const isNameTaken = await assignmentSubmissionModel.findOne({ name });
      if (isNameTaken)
        returnMessage.errorMessage(res,messages.errorMessages.countryAlreadyExists)

      const assignmentSubmission = await assignmentSubmissionModel.create({ ...req.body });
      returnMessage.successMessage(res,messages.successMessages.addassignmentSubmission,assignmentSubmission);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  edit: async(req,res) => {
    try {
      const assignmentSubmission = await assignmentSubmissionModel.findOne({_id: req.params['id'] })
      returnMessage.successMessage(res,messages.successMessages.showassignmentSubmission, assignmentSubmission);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  },

  update: async(req,res) => {
    try {
      const assignmentSubmission = await assignmentSubmissionModel.findByIdAndUpdate(req.params['id'], { ...req.body });
      returnMessage.successMessage(res,messages.successMessages.updateassignmentSubmission, assignmentSubmission);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  delete: async(req,res) => {
    try {
      const assignmentSubmission = await assignmentSubmissionModel.remove({ '_id': req.params['id'] });
      console.log(assignmentSubmission)
      returnMessage.successMessage(res,messages.successMessages.deleteassignmentSubmission);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },
  
  show: async(req,res) => {
    try {
      const assignmentSubmission = await assignmentSubmissionModel.findOne({_id: req.params['id'] })
      console.log(assignmentSubmission)
      returnMessage.successMessage(res,messages.successMessages.showassignmentSubmission, assignmentSubmission);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  }
};
