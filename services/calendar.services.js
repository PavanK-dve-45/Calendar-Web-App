const db=require('../config/mysql');

exports.createCalendar=async(userId,calendarName,startDate,endDate)=>{
    const create = await db.query('INSERT INTO `academiccalendar`.`calendars` (`userId`, `calendarName`, `startDate`, `endDate`) VALUES (?, ?, ?, ?)',[userId, calendarName,startDate,endDate]);
    return create[0].affectedRows>0? true:false;
}

//Checks if the user exists.
exports.checkUser=async (userId)=>{
    const rows=await db.query (
        'SELECT EXISTS (SELECT 1 FROM users WHERE userId = ? AND isActive = 0) AS userExists', [userId]
    );
    return rows[0][0].userExists;
}

// Fetch user's active calendars
exports.getUserCalendar = async(userId)=>{
    const result = await db.query(
        'SELECT * FROM calendars WHERE userId =? AND isActive = 0', [userId]
    );
    return result[0].length>0 ? result [0]: null;
};

//Checks if the user and calendar exists.
exports.checkCalendar=async (userId,calendarId)=>{
    const rows=await db.query (
        'SELECT 1 FROM calendars WHERE userId =? AND calendarId =? AND isActive = 0', [userId,calendarId]
    );
    return rows[0].length>0?true:false;
}

// Deactivate Specific User's Calendar
exports.deleteUserCalendar=async(userId, calendarId)=>{
    const result = await db.query(
        'UPDATE calendars SET isActive = 1 WHERE userId =? AND calendarId = ?',[userId, calendarId]
    );
    return result[0].affectedRows>0? true: false;
};

// Modify Specific user's calendar
exports.editCalendar =async(userId,calendarId,calendarName,startDate,endDate)=>{
    const edit= await db.query('UPDATE calendars SET calendarName =?, startDate = ?, endDate = ? WHERE userId = ? AND calendarId =?',[calendarName,startDate,endDate,userId,calendarId]);
    return edit[0].affectedRows>0? true: false;
}

exports.getCalendar = async(userId,calendarId)=>{
    const result = await db.query(
        'SELECT calendarName, startDate, endDate FROM calendars WHERE userId =? AND calendarId =?', [userId,calendarId]
    );
    return result[0].length>0 ? result [0]: null;
};