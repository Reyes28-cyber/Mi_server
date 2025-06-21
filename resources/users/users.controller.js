const HttpCodes = require("../../const/HttpCode");

const GetUsers = (req, res) => {
    console.log("####### Consulatando GET USERS ######")
    res.send('GET USERS');
};

const GetUser = (req, res) => {

    const { id } = req.params;
    // dame el usuario con el id = id


    res.status(HttpCodes.OK).json({
    data: {
        user: { id: id, name: `User ${id}`},
    },
    error: false,
    message: "🎶 Usuario encontrado",
    });
};

module.exports = {
    GetUsers,
    GetUser
}