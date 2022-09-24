const departmentModel = require("../schema/departments");
const returnMessage = require("./message");
const messages = require("../lang/messages.json");

module.exports = {
  index: async(req,res) => {
    try {
      const departmets = await departmentModel.find({});
      returnMessage.successMessage(res,messages.successMessages.getAlltudents,departmets);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const isNameTaken = await departmentModel.findOne({ name });
      if (isNameTaken)
        returnMessage.errorMessage(res,messages.errorMessages.countryAlreadyExists)

      const department = await departmentModel.create({ ...req.body });
      returnMessage.successMessage(res,messages.successMessages.adddepartment,department);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  edit: async(req,res) => {
    try {
      const department = await departmentModel.findOne({_id: req.params['id'] })
      returnMessage.successMessage(res,messages.successMessages.showdepartment, department);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  },

  update: async(req,res) => {
    try {
      const department = await departmentModel.findByIdAndUpdate(req.params['id'], { ...req.body });
      returnMessage.successMessage(res,messages.successMessages.updatedepartment, department);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  delete: async(req,res) => {
    try {
      const department = await departmentModel.remove({ '_id': req.params['id'] });
      console.log(department)
      returnMessage.successMessage(res,messages.successMessages.deletedepartment);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },
  
  show: async(req,res) => {
    try {
      const department = await departmentModel.findOne({_id: req.params['id'] })
      console.log(department)
      returnMessage.successMessage(res,messages.successMessages.showdepartment, department);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  }
};
