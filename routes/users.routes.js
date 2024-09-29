const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controllers');
const validation = require('../validation/users.validation');
// const authenticateUser = require('../middlewares/session_authentication');

//Route to Signup
router.post('/signup', validation.validateSignup, userController.singUpUser);

// Route to Singin
router.post('/signin' ,validation.validateSignIn, userController.Signed);

router.patch('/deactivate',validation.validateSignIn, userController.deactiveUser);

module.exports = router;