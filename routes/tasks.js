const express = require('express');

const taskscontroller = require('../controllers/tasks.controller');

const routes = express.Router();

routes.get('/', taskscontroller.get);
routes.post('/', taskscontroller.create);
routes.put('/', taskscontroller.update);
routes.delete('/', taskscontroller.remove);

module.exports = routes;