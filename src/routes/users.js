const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const registerValidator = require('../validations/registerValidator');

router.get('/', userController.index);

router.post('/', registerValidator, userController.processRegister);

router.get('/confirm', userController.confirm);

module.exports = router;

