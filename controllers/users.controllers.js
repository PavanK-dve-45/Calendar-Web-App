const logedInService = require('../services/users.services');
const {signIN,signUp} = require('../utils/constants');
const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

//Sign-Up User

exports.singUpUser = async(req,res,next)=>{
    try{
    const {username,email,password}=req.body;
        
    const exists = await logedInService.checkUserExists(email);
        if (exists){
            throw Boom.badRequest(signUp.userExists);
        }
    const saltRounds =5;
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    const result= await logedInService.signUp(username,email,hashedPassword);
    if(result==false){
        throw Boom.badRequest(signUp.signinFail)
    }
    res.status(201).json({statusCode: 201, success: true, message: signUp.signedUp});
    }
    catch(error){
        next(error);
    }
}

//Sign-In User
exports.Signed = async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const result= await logedInService.logIn(email);
        const isMatch= await bcrypt.compare(password,result.password);
        if (!isMatch){
            throw Boom.unauthorized(signIN.loginFail);
        }
        res.status(201).json({statusCode: 201, success: true, message: signIN.logedIn});
    }
    catch(error){
        next(error);
    }
};

//Deactivate User Account
exports.deactiveUser = async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const result = await logedInService.logIn(email);
        const isMatch = await bcrypt.compare(password,result.password);
        if(!isMatch){
            throw Boom.unauthorized(signIN.loginFail);
        }
        const deactive = await logedInService.deactiveUser(email);
        if(!deactive){
            throw Boom.locked(signIN.invalidMail);
        }
        res.status(201).json({statusCode: 201, success: true, message: signIN.decativated});
    }
    catch(error){
        next(error);
    }
}