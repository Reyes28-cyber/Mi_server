const express = require('express');

const { GetProjects, CreateProject, DeleteProject } = require('./projects.controller');


const router = express.Router();

router.get('/', GetProjects)

router.post('/', CreateProject)

router.delete('/', DeleteProject)

module.exports = router;