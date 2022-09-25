const userModel = require("../schema/users");
const { verify } = require("jsonwebtoken");

const checkRole = () => {
  return async (req, res, next) => {

    let token = req.headers.authorization;

    if (token) {
      token = token.split(" ")[1];
      let decoded = verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      req.user = decoded.email;
      
      const user = await userModel.findOne({ email: req.user });
      await user.populate({
        path: "role",
      });

      req.role = user.role.name

    } else {
      return res.status(401).json({ message: "unathorized user" });
    }
  };
};

module.exports = {
  checkRole,
};