const batchModel = require("../schema/batches");
const returnMessage = require("./message");
const messages = require("../lang/messages.json");

module.exports = {
  index: async(req,res) => {
    try {
      const batches = await batchModel.find({});
      returnMessage.successMessage(res,messages.successMessages.getAlltudents,batches);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const isNameTaken = await batchModel.findOne({ name });
      if (isNameTaken)
        returnMessage.errorMessage(res,messages.errorMessages.countryAlreadyExists)

      const batch = await batchModel.create({ ...req.body });
      returnMessage.successMessage(res,messages.successMessages.addbatch,batch);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  edit: async(req,res) => {
    try {
      const batch = await batchModel.findOne({_id: req.params['id'] })
      returnMessage.successMessage(res,messages.successMessages.showbatch, batch);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  },

  update: async(req,res) => {
    try {
      const batch = await batchModel.findByIdAndUpdate(req.params['id'], { ...req.body });
      returnMessage.successMessage(res,messages.successMessages.updatebatch, batch);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  delete: async(req,res) => {
    try {
      const batch = await batchModel.remove({ '_id': req.params['id'] });
      console.log(batch)
      returnMessage.successMessage(res,messages.successMessages.deletebatch);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },
  
  show: async(req,res) => {
    try {
      const batch = await batchModel.findOne({_id: req.params['id'] })
      console.log(batch)
      returnMessage.successMessage(res,messages.successMessages.showbatch, batch);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  }
};
