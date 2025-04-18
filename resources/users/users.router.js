const express = require('express');

const { GetUsers, GetUser } = require("./users.controller")
const router = express.Router();

router.get('/', GetUsers)

router.get('/1', GetUser)

module.exports = router;