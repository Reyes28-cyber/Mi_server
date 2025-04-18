const express = require('express');

const { GetProjects } = require('./projects.controller');
const MessageMiddleware = require("../../middlewares/message.middlewares")

const router = express.Router();

router.get('/', GetProjects)

module.exports = router;