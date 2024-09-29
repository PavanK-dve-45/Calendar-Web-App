const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventcat.controllers');
const validate= require('../validation/eventcat.validation');

// Get event category list API
router.get('/events', validate.validateUserId, eventController.getCategory);

//Create an event category API
router.post('/create',validate.validateCreate, eventController.createCategory);

//Delete an event category API
router.delete('/delete', validate.validateDelete,eventController.deleteCategory);

//Edit an event category API
router.patch('/edit', validate.validateEdit, eventController.editCategory);

module.exports = router;