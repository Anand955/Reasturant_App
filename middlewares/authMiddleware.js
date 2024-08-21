const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    //get token
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: " Error In  Auth  API",
      error,
    });
  }
};
