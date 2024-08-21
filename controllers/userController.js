// GET USER INFO
const getUserController = async (req ,res) => {
    res.status(200).send('user Data')
};

module.exports = { getUserController }