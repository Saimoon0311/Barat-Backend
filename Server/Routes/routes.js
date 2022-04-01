const express = require('express');
const Router = express.Router();
const AreaController = require('../controller/areaController');
Router.get('/', (req, res) => res.send('hello'));
const HallsController = require('../Controller/hallsDetail');

// Area ALL Api
Router.post('/api/area/createArea', AreaController.addAreas);
Router.get('/api/getAreas', AreaController.getAreas);

// HALLS Details Api

Router.post('/api/halls/createHalls', HallsController.createHalls);
Router.get('/api/getHalls/:areaId', HallsController.getHalls);
Router.get('/api/getAllHalls', HallsController.getAllHalls);

module.exports = Router;
