
const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const sleepController = require('../controller/sleepController');
const connection = require('../models/db')

//get the home page --- every user can access it
router.get('/', userController.home);
router.post('/', userController.homelog);
//home dashboard
//new user sign-up page
router.get('/user', userController.createUser)
router.post('/user', userController.addUser)
//user login page
router.get('/user/login', userController.login)
router.post('/user/login', userController.logged)
//logout rout
router.get('/user/login', userController.logout)
//change password
router.get('/user/change-password', userController.change_pass)
//set sleep entry --- only loged in users
router.get('/setting', sleepController.setTime);
router.post('/setting', sleepController.setSleep);

module.exports = router;