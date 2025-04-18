const express = require('express');
const router = express.Router();


const { GetUsers, GetUser } = require("./users.controller")



router.get('/', GetUsers)

router.get('/1', GetUser)

module.exports = router;