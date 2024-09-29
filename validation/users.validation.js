const Joi = require('joi');
const Boom = require('@hapi/boom');
const {userName,passwordMessage,emailMessage} = require('../utils/constants')

// validation schema

const signIn = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages(emailMessage),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$')).required().messages(passwordMessage)
});
const signUp = Joi.object({
    username: Joi.string().alphanum().min(3).max(50).required().messages(userName),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages(emailMessage),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')).required().messages(passwordMessage)
});


function validateSignup(req,res,next){
  const {error}  = signUp.validate(req.body, { abortEarly: false });
  if (error) {
      throw Boom.badRequest(error.details.map(err => err.message));
    }
    next();
}
function validateSignIn(req,res,next){
    const {error}  = signIn.validate(req.body, { abortEarly: false });
    if (error) {
        throw Boom.badRequest(error.details.map(err => err.message));
      }
      next();
  }

module.exports = { validateSignIn,validateSignup };