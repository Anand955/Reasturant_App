// GET USER INFO
const getUserController = async (req, res) => {
  res.status(200).send("user Data");
  console.log(req);
};

module.exports = { getUserController };
