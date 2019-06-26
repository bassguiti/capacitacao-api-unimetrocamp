const express = require('express');

const infocontroller = require('../controllers/info.controller');

const routes = express.Router();

routes.get('/', infocontroller.get);

module.exports = routes;