const express = require('express');
const router = express.Router();
const controller = require('../controllers/calendar.controllers');
const validation = require('../validation/calendar.validation');

//Route to Create user calendar
router.post('/create', validation.validateCreateCalendar,controller.createCalendar);

//Route to fetch a specific user's calendar
router.get('/fetch' ,validation.validateCalendar, controller.getUserCalendar);

// Route to Edit user calendar
router.patch('/edit',validation.validateeditCalendar, controller.editCalendar);

// Route to delete (deactivate) a specific user's calendar
router.delete('/delete', validation.validateDeleteCalendar, controller.deleteUserCalendar);

module.exports = router;