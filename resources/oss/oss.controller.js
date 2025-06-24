const axios = require ("axios");

const HttpCodes = require("../../const/HttpCode");
const { GetAPSTwoToken } = require("../../lib/aps.libs");

const BUCKET_API_URL = "https://developer.api.autodesk.com/oss/v2/buckets";

const GetBuckets = async (req, res) =>{

    // const {authorization} = req.headers;

    // if (!authorization) {
    //     return res.status(HttpCodes.UNAUTHORIZED).json({
    //         data: null,
    //         error: true,
    //         message: "Es necesario tener client id y client secret",
    //     });
    // }

    // if(!authorization.startsWith("Bearer")) {
    //     return res.status(HttpCodes.UNAUTHORIZED).json({
    //         data: null,
    //         error: true,
    //         message: "Es necesario tener client id y client secret",
    //     })
    // }

    // const token = authorization.split(" ")[1];

    const {access_token} = await GetAPSTwoToken();

    // https://developer.api.autodesk.com/oss/v2/buckets
    const {data} = await axios.get(`${BUCKET_API_URL}`, {
        headers:{
            Authorization: `Bearer ${access_token}`
        },
    });

    return res.status(HttpCodes.OK).json({
        data:data,
        error: false,
        message: "Buckets"
    })
};
const CreateBucket = async (req, res) => {

    const {bucket_name, politica_bucket}= req.body
    
    const {authorization} = req.headers

    if (!authorization) {
        return res.status(HttpCodes.UNAUTHORIZED).json({
            data: null,
            error: true,
            message: "Es necesario tener client id y client secret",
        });
    }

    if(!authorization.startsWith("Bearer")) {
        return res.status(HttpCodes.UNAUTHORIZED).json({
            data: null,
            error: true,
            message: "Es necesario tener client id y client secret",
        })
    }

    const token = authorization.split(" ")[1];

    const {data} = await axios.post(
        `${BUCKET_API_URL}`, 
        {
        bucketKey: bucket_name,
        policyKey: politica_bucket,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        },    
    );

    return res.status(HttpCodes.OK).json({
        data: data,
        error: false,
        message: "Buckets",
    });
};

const GetBucket = async (req, res) => {
    // const { nombrebucket }= req.params

    const { nombrebucket} = req.body

    const {authorization} = req.headers

    if (!authorization) {
        return res.status(HttpCodes.UNAUTHORIZED).json({
            data: null,
            error: true,
            message: "Es necesario tener client id y client secret",
        });
    }

    if(!authorization.startsWith("Bearer")) {
        return res.status(HttpCodes.UNAUTHORIZED).json({
            data: null,
            error: true,
            message: "Es necesario tener client id y client secret",
        });
    }

    const token = authorization.split(" ")[1];
    console.log("👉 TOKEN ENVIADO A AUTODESK:", token);

    const url = `${BUCKET_API_URL}/${nombrebucket}/details`;

    const {data} = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.status(HttpCodes.OK).json({
        data: data,
        error: false,
        message: "Buckets",
    });
};

module.exports = {
    GetBuckets,
    CreateBucket,
    GetBucket,
};
