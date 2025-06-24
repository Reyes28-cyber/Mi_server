const HttpCodes = require("../../const/HttpCode");
const { GetAPSTwoToken } = require("../../lib/aps.libs");

const GetAPSToken = async (req, res) => {

    const data = await GetAPSTwoToken();

    return res.status(HttpCodes.OK).json({
        data: data.access_token,    
        error: false,
        message: "GetAPSToken"
    });
};

module.exports = {
    GetAPSToken
};