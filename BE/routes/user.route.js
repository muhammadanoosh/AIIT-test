const express = require('express');
const userController = require('../controller/users.controller');

const router = express.Router();

//ROUTES
router.get('/get-user-by-id', userController.getUserDataById);
router.put('/update-data', userController.updateUserData);


module.exports = router;