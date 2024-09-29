const calendarService = require('../services/calendar.services');
const { calendarError, successMessages} = require('../utils/constants');
const Boom = require('@hapi/boom');

// Fetch specific user's active calendar
exports.createCalendar = async(req,res,next)=>{
    try{
        const {userId, calendarName,startDate,endDate}=req.body;
        const exists = await calendarService.checkUser(userId);
        if (!exists){
            throw Boom.notFound(calendarError.userNotFound);
        }
        const create = calendarService.createCalendar(userId,calendarName,startDate,endDate);
        if (create==false){
            throw Boom.notFound(calendarError.userNotFound);
        }
        res.status(201).json({statusCode: 201, success: true, message: successMessages.calendarCreated});
    }
    catch(error){
        next(error);
    }
};

// Get a calendar of a user
exports.getUserCalendar = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const exists = await calendarService.checkUser(userId);
        if (!exists){
            throw Boom.notFound(calendarError.userNotFound);
        }
        const calendar = await calendarService.getUserCalendar(userId);
        if (calendar==null) {
            throw Boom.notFound(calendarError.calendarNotFound);
        }
        res.status(200).json({statusCode: 200, success: true, message: successMessages.calendarFound,body: calendar});
    } catch (error) {
        next(error); 
    }
};

// Delete (deactivate) a specific user's calendar
exports.deleteUserCalendar = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const calendarId = req.body.calendarId;
        const userExists = await calendarService.checkUser(userId);
        if (!userExists){
            throw Boom.notFound(calendarError.userNotFound);
        }
        const calendarExists = await calendarService.checkCalendar(userId,calendarId);
        if (!calendarExists){
            throw Boom.notFound(calendarError.calendarNotFound);
        }
        const result = await calendarService.deleteUserCalendar(userId, calendarId);
        if (!result) {
            throw Boom.notFound(calendarError.calendarInactive);
        }
        res.status(200).json({statusCode: 200, success: true, message: successMessages.calendarDeactivated});
    }  catch (error) {
        next(error);
    }
};

// Modify a specific user's calendar
exports.editCalendar = async (req,res,next)=>{
    try{
        const {userId,calendarId,calendarName,startDate,endDate}=req.body;
        const userExists = await calendarService.checkUser(userId);
        if (!userExists){
            throw Boom.notFound(calendarError.userNotFound);
        }
        const calendarExists = await calendarService.checkCalendar(userId,calendarId);
        if (!calendarExists){
            throw Boom.notFound(calendarError.calendarNotFound);
        }
        const edit = await calendarService.editCalendar(userId,calendarId,calendarName,startDate,endDate);
        if(edit==false){
            throw Boom.badRequest(calendarError.calendarInactive);
        }
        const calendar = await calendarService.getCalendar(userId,calendarId);
        if (calendar==null) {
            throw Boom.notFound(calendarError.calendarInactive);
        }
        res.status(201).json({statusCode: 200, success: true, message: successMessages.calendarFound,body: calendar});
    }
    catch (error){
        next(error);
    }
}



