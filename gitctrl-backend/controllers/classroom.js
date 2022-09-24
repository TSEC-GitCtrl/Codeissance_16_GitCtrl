const classroomModel = require("../schema/classrooms");
const returnMessage = require("./message");
const messages = require("../lang/messages.json");

module.exports = {
  index: async(req,res) => {
    try {
      const classrooms = await classroomModel.find({});
      returnMessage.successMessage(res,messages.successMessages.getAlltudents,classrooms);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const isNameTaken = await classroomModel.findOne({ name });
      if (isNameTaken)
        returnMessage.errorMessage(res,messages.errorMessages.countryAlreadyExists)

      const classroom = await classroomModel.create({ ...req.body });
      returnMessage.successMessage(res,messages.successMessages.addclassroom,classroom);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  edit: async(req,res) => {
    try {
      const classroom = await classroomModel.findOne({_id: req.params['id'] })
      returnMessage.successMessage(res,messages.successMessages.showclassroom, classroom);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  },

  update: async(req,res) => {
    try {
      const classroom = await classroomModel.findByIdAndUpdate(req.params['id'], { ...req.body });
      returnMessage.successMessage(res,messages.successMessages.updateclassroom, classroom);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  delete: async(req,res) => {
    try {
      const classroom = await classroomModel.remove({ '_id': req.params['id'] });
      console.log(classroom)
      returnMessage.successMessage(res,messages.successMessages.deleteclassroom);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },
  
  show: async(req,res) => {
    try {
      const classroom = await classroomModel.findOne({_id: req.params['id'] })
      console.log(classroom)
      returnMessage.successMessage(res,messages.successMessages.showclassroom, classroom);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  }
};
