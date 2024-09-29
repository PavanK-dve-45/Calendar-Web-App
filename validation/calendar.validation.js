const Joi = require('joi');
const Boom = require('@hapi/boom');
const {intMessages, stringMessages, dateMessages, userIdMessages, calendarIdMessages, endDateMessages} = require('../utils/constants')

// validation schema
const modifyCalendar = Joi.object({
    userId: Joi.number().integer().positive().required().messages(userIdMessages),
    calendarId: Joi.number().integer().positive().required().messages(calendarIdMessages),
    calendarName: Joi.string().trim().min(3).max(255).required().messages(stringMessages),
    startDate: Joi.date().iso().required().messages(dateMessages),
    endDate: Joi.date().iso().greater(Joi.ref('startDate')).required().messages(endDateMessages),
});
const createCalendar = Joi.object({
  userId: Joi.number().integer().positive().required().messages(userIdMessages),
  calendarName: Joi.string().trim().min(3).max(255).required().messages(stringMessages),
  startDate: Joi.date().iso().required().messages(dateMessages),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')).required().messages(endDateMessages),
});

const deleteCalendar = Joi.object({
  userId: Joi.number().integer().positive().required().messages(userIdMessages),
  calendarId: Joi.number().integer().positive().required().messages(calendarIdMessages)
})

const listCalendar = Joi.object({
  userId: Joi.number().integer().positive().required().messages(userIdMessages),
})
// Middleware to validate request body
function validateCreateCalendar(req, res, next) {
  const {error}  = createCalendar.validate(req.body, { abortEarly: false });
  if (error) {
      throw Boom.badRequest(error.details.map(err => err.message));
    }
    next();
}
function validateeditCalendar(req, res, next) {
  const {error}  = modifyCalendar.validate(req.body, { abortEarly: false });
  if (error) {
      throw Boom.badRequest(error.details.map(err => err.message));
    }
    next();
}

function validateDeleteCalendar(req,res,next){
  const {error}= deleteCalendar.validate(req.body,{ abortEarly: false});
  if(error){
    throw Boom.badRequest(error.details.map(err => err.message));
  }
  next();
}

function validateCalendar(req,res,next){
  const {error}  = listCalendar.validate(req.body, { abortEarly: false });
  if (error) {
      throw Boom.badRequest(error.details.map(err => err.message));
    }
    next();
}
module.exports = { validateCreateCalendar,validateeditCalendar, validateDeleteCalendar, validateCalendar };