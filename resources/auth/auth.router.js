const express = require('express');
const { GetAPSToken } = require('./auth.controller');

const router = express.Router();

router.get("/get-aps-token" , GetAPSToken)
module.exports = router;