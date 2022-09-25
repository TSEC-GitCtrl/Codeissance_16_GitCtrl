const noticeModel = require("../schema/notices");
const returnMessage = require("./message");
const messages = require("../lang/messages.json");

module.exports = {
  index: async (req, res) => {
    try {
      const notices = await noticeModel.find({});
      const noticess = notices.map(async (notice) => {
        return await notice.populate('department')
      });
      console.log(noticess);
      returnMessage.successMessage(
        res,
        messages.successMessages.getAlltudents,
        noticess
      );
    } catch (error) {
      returnMessage.errorMessage(res, error);
    }
  },

  create: async (req, res) => {
    try {
      const { notice } = req.body;
      const isnoticeTaken = await noticeModel.findOne({ notice });
      if (isnoticeTaken)
        return returnMessage.errorMessage(
          res,
          messages.errorMessages.countryAlreadyExists
        );

      const Notice = await noticeModel.create({ ...req.body });
      returnMessage.successMessage(
        res,
        messages.successMessages.addnotice,
        Notice
      );
    } catch (error) {
      returnMessage.errorMessage(res, error);
    }
  },

  edit: async (req, res) => {
    try {
      const notice = await noticeModel.findOne({ _id: req.params["id"] });
      returnMessage.successMessage(
        res,
        messages.successMessages.shownotice,
        notice
      );
    } catch (error) {
      returnMessage.errorMessage(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const notice = await noticeModel.findByIdAndUpdate(req.params["id"], {
        ...req.body,
      });
      returnMessage.successMessage(
        res,
        messages.successMessages.updatenotice,
        notice
      );
    } catch (error) {
      returnMessage.errorMessage(res, error);
    }
  },

  delete: async (req, res) => {
    try {
      const notice = await noticeModel.remove({ _id: req.params["id"] });
      console.log(notice);
      returnMessage.successMessage(res, messages.successMessages.deletenotice);
    } catch (error) {
      returnMessage.errorMessage(res, error);
    }
  },

  show: async (req, res) => {
    try {
      const notice = await noticeModel.findOne({ _id: req.params["id"] });
      console.log(notice);
      returnMessage.successMessage(
        res,
        messages.successMessages.shownotice,
        notice
      );
    } catch (error) {
      returnMessage.errorMessage(res, error);
    }
  },
};
