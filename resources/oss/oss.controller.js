const HttpCodes = require("../../const/HttpCode")

const GetBuckets = (req, res) =>{
    return res.status(HttpCodes.OK).json({
        data:[],
        error: false,
        message: "Buckets"
    })
}

module.exports = {
    GetBuckets,
};
