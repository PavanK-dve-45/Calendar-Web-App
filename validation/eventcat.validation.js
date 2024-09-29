const Joi = require('joi');
const Boom = require('@hapi/boom');
const {userIdMessages,catogoryIdMessages,catogryNameMessages} = require('../utils/constants')

// validation schema
const validUser = Joi.object({
    userId: Joi.number().integer().positive().required().messages(userIdMessages),
});

const createCategory = Joi.object({
    userId: Joi.number().integer().positive().required().messages(userIdMessages),
    categoryName: Joi.string().trim().min(3).max(255).required().messages(catogryNameMessages),
});

const deleteCategory = Joi.object({
    userId: Joi.number().integer().positive().required().messages(userIdMessages),
    categoryId: Joi.number().integer().positive().required().messages(catogoryIdMessages),
});

const editCategory = Joi.object({
    userId: Joi.number().integer().positive().required().messages(userIdMessages),
    categoryId: Joi.number().integer().positive().required().messages(catogoryIdMessages),
    categoryName: Joi.string().trim().min(3).max(255).required().messages(catogryNameMessages),

});

function validateUserId(req, res, next) {
    const {error}  = validUser.validate(req.body, { abortEarly: false });
    if (error) {
        throw Boom.badRequest(error.details.map(err => err.message));
      }
      next();
  }

  function validateCreate(req, res, next) {
    const {error}  = createCategory.validate(req.body, { abortEarly: false });
    if (error) {
        throw Boom.badRequest(error.details.map(err => err.message));
      }
      next();
  }

  
  function validateDelete(req, res, next) {
    const {error}  = deleteCategory.validate(req.body, { abortEarly: false });
    if (error) {
        throw Boom.badRequest(error.details.map(err => err.message));
      }
      next();
  }
  function validateEdit(req, res, next) {
    const {error}  = editCategory.validate(req.body, { abortEarly: false });
    if (error) {
        throw Boom.badRequest(error.details.map(err => err.message));
      }
      next();
  }

  module.exports= {validateUserId,validateCreate,validateDelete, validateEdit};