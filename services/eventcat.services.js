const db= require('../config/mysql');

exports.getCategory = async(userId)=>{
    const result = await db.query(
        'SELECT categoryName FROM eventCategory WHERE userId =? AND isActive = 0', [userId]
    );
    return result[0].length>0 ? result [0]: null;
};

exports.createCategory = async(userId,categoryName)=>{
    const result = await db.query(
        'INSERT INTO `newcalendarDb`.`eventCategory` (`userId`,`categoryName`) VALUES(?,?)', [userId,categoryName]
    );
    return result[0].affectedRows>0 ? true: false;
};

exports.deleteCategory = async(userId,categoryId)=>{
    const result = await db.query(
        'UPDATE eventCategory SET isActive = 1 WHERE userId =? AND categoryId =?', [userId,categoryId]
    );
    return result[0].affectedRows>0 ? true: false;
};

exports.editCategory = async(userId,categoryId,categoryName)=>{
    const result = await db.query(
        'UPDATE eventCategory SET categoryName = ? WHERE userId = ? AND categoryId = ?', [categoryName,userId,categoryId]
    );
    return result[0].affectedRows>0 ? true: false;
};

exports.isExists = async (userId,categoryName)=>{
    const result = await db.query(
        'SELECT categoryId FROM eventCategory WHERE userId =? AND categoryName =?',[userId,categoryName]
    );   
    return result[0].length>0? true: false;
}
