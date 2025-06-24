const express = require('express');
const { GetBuckets, CreateBucket, GetBucket } = require('./oss.controller');
const router = express.Router();


router.get("/buckets", GetBuckets)
router.post("/buckets", CreateBucket)
router.post("/buckets/details", GetBucket)

module.exports = router;