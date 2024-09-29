const eventcatServices = require('../services/eventcat.services');
const {eventCatMessages} = require('../utils/constants');
const Boom = require('@hapi/boom');

//Get event category list
exports.getCategory = async(req,res,next)=>{
    try{
        const{userId}=req.body;
        const result = await eventcatServices.getCategory(userId);
        if(result==null){
            throw Boom.notFound(eventCatMessages.eventFound);
        }
        res.status(200).json({statusCode: 200 , success: true, message: eventCatMessages.eventFound, body: result});
    }
    catch(error){
        next(error);
    }
}

// Creates an event category
exports.createCategory = async(req,res,next)=>{
    try{
        const {userId,categoryName}=req.body;
        console.log(userId,categoryName);
        
        const exists = await eventcatServices.isExists(userId,categoryName);
        console.log("Exists:", exists);
        
        if(exists){
            throw Boom.conflict(eventCatMessages.eventFound);
        }
        const result= await eventcatServices.createCategory(userId,categoryName);
        if(!result){
            throw Boom.expectationFailed(eventCatMessages.eventFailed);
        }
        res.status(201).json({statusCode: 201 , success: true, message: eventCatMessages.eventCreated})
    }
    catch(error){
        next(error);
    }
}

// Deletes an event category
exports.deleteCategory = async(req,res,next)=>{
    try{
        const {userId,categoryId}=req.body;
        const result = await eventcatServices.deleteCategory(userId,categoryId);
        if(!result){
            throw Boom.notFound(eventCatMessages.eventNotFound)
        }
        res.status(201).json({statusCode: 201 , success: true, message: eventCatMessages.eventDeleted});
    }
    catch(error){
        next(error);
    }
}

// Edits and event category
exports.editCategory = async(req,res,next)=>{
    try{
        const {userId,categoryId,categoryName}=req.body;
        const result = await eventcatServices.editCategory(userId,categoryId,categoryName);
        if(!result){
            throw Boom.notFound(eventCatMessages.eventNotFound)
        }
        res.status(201).json({statusCode: 201 , success: true, message: eventCatMessages.eventModified});
    }
    catch(error){
        next(error);
    }
}

