// Require Express Router
const routes = require('express').Router();
// Controller
const ControllerTemplate = require('../database/controllers/ControllerTemplate');

// When the endpoint is requested send the function inside the controller
routes.get('/endpointTemplate', ControllerTemplate.index);

// Then export the routes
module.exports = routes;