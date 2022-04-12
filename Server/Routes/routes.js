const express = require('express');
const Router = express.Router();
const AreaController = require('../controller/areaController');
const HallsController = require('../Controller/hallsDetail');
const HallOrderController = require('../Controller/hallBokkingContoller');
const userController = require('../Controller/userController');

Router.get('/', (req, res) => res.send('hello'));

// Area ALL Api
Router.post('/api/area/createArea', AreaController.addAreas);
Router.get('/api/getAreas', AreaController.getAreas);

// HALLS Details Api

Router.post('/api/halls/createHalls', HallsController.createHalls);
Router.get('/api/getHalls/:areaId', HallsController.getHalls);
Router.get('/api/getAllHalls', HallsController.getAllHalls);

// Hall Booking details

Router.post('/api/hallOrder/bookHalls', HallOrderController.bookHall);
Router.get('/api/getOrder/:userId', HallOrderController.getOrderDetails);

// User all api

Router.post('/api/user/Register', userController.UserSignUp);

module.exports = Router;
