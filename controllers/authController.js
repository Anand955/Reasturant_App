const userModel = require("../models/userModel")

// REGISTER
const registerController = async (req, res) => {
  try {
    const { username, email, password, phone, address } = req.body;

    // Validation
    if (!username || !email || !password || !address || !phone) {
      return res.status(500).send({
        success: false,
        message: "All fields are required",
      });
    }

    //check user

    const exisiting = await userModel.findone({ email })
    if (exisiting) {
      return res.status(500).send({
        success: false,
        message: 'Email Already Registered please login'
      })
    }
    //create new user 
    const newuser = await userModel.create({ username, email, password, address, phone })
    res.status(201).send({
      success: true,
      message: ' Successfully Registered'
    })


  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send({
      success: false,
      message: 'Error in Register API',
      error,
    });
  }
};

module.exports = { registerController };
