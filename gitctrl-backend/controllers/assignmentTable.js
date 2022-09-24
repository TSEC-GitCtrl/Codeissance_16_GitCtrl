const assignmentTableModel = require("../schema/assignmentsTable");
const returnMessage = require("./message");
const messages = require("../lang/messages.json");

module.exports = {
  index: async(req,res) => {
    try {
      const assignmentsTable = await assignmentTableModel.find({});
      returnMessage.successMessage(res,messages.successMessages.getAlltudents,assignmentsTable);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const isNameTaken = await assignmentTableModel.findOne({ name });
      if (isNameTaken)
        returnMessage.errorMessage(res,messages.errorMessages.countryAlreadyExists)

      const assignmentTable = await assignmentTableModel.create({ ...req.body });
      returnMessage.successMessage(res,messages.successMessages.addassignmentTable,assignmentTable);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  edit: async(req,res) => {
    try {
      const assignmentTable = await assignmentTableModel.findOne({_id: req.params['id'] })
      returnMessage.successMessage(res,messages.successMessages.showassignmentTable, assignmentTable);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  },

  update: async(req,res) => {
    try {
      const assignmentTable = await assignmentTableModel.findByIdAndUpdate(req.params['id'], { ...req.body });
      returnMessage.successMessage(res,messages.successMessages.updateassignmentTable, assignmentTable);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  delete: async(req,res) => {
    try {
      const assignmentTable = await assignmentTableModel.remove({ '_id': req.params['id'] });
      console.log(assignmentTable)
      returnMessage.successMessage(res,messages.successMessages.deleteassignmentTable);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },
  
  show: async(req,res) => {
    try {
      const assignmentTable = await assignmentTableModel.findOne({_id: req.params['id'] })
      console.log(assignmentTable)
      returnMessage.successMessage(res,messages.successMessages.showassignmentTable, assignmentTable);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  }
};
