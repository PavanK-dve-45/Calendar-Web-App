const express = require('express');
const calendarRoutes= require('./calendar.routes');
const userRoutes= require('./users.routes');
const eventcatRoutes= require('./eventcat.routes');
const router = express.Router();

router.use('/calendars',calendarRoutes);
router.use('/user',userRoutes);
router.use('/category',eventcatRoutes);

module.exports = router;