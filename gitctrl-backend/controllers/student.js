const userModel = require("../schema/users");
const returnMessage = require("./message");
const messages = require("../lang/messages.json");

module.exports = {
  index: async(req,res) => {
    try {
      const students = await userModel.find({});
      returnMessage.successMessage(res,messages.successMessages.getAlltudents,students);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const isNameTaken = await userModel.findOne({ name });
      if (isNameTaken)
        returnMessage.errorMessage(res,messages.errorMessages.countryAlreadyExists)

      const student = await userModel.create({ ...req.body });
      returnMessage.successMessage(res,messages.successMessages.addstudent,student);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  edit: async(req,res) => {
    try {
      const student = await userModel.findOne({_id: req.params['id'] })
      returnMessage.successMessage(res,messages.successMessages.showstudent, student);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  },

  update: async(req,res) => {
    try {
      var email = req.body.email;
      var name = req.body.name;
      var surname = req.body.surname;
      var batch = req.body.batch;
      var rollNo = req.body.rollNo;
      const student = await userModel.findOneAndUpdate(req.params['id'],{$set:{email,name,surname,batch,rollNo}},{new:true});
      returnMessage.successMessage(res,messages.successMessages.updatestudent, student);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  delete: async(req,res) => {
    try {
      const student = await userModel.remove({ '_id': req.params['id'] });
      console.log(student)
      returnMessage.successMessage(res,messages.successMessages.deletestudent);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },
  
  show: async(req,res) => {
    try {
      const student = await userModel.findOne({_id: req.params['id'] })
      console.log(student)
      returnMessage.successMessage(res,messages.successMessages.showstudent, student);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  }
};
