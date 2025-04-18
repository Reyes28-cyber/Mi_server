const express = require('express');

const { GetProjects } = require('./projects.controller');
const router = express.Router();

router.get('/', GetProjects)

module.exports = router;