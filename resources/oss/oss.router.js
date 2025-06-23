const express = require('express');
const { GetBuckets } = require('./oss.controller');
const router = express.Router();


router.get("/buckets", GetBuckets)

module.exports = router;