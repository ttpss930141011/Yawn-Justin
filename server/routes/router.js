const express = require('express');
const route = express.Router()
const controller = require('../controller/controller');
const services = require('../services/render');
/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

route.get('/api/yawnNum', controller.find);
route.get('/api/yawnTap', controller.update);

module.exports = route