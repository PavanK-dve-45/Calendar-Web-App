const db=require('../config/mysql');
exports.checkUserExists=async(email)=>{
    const result = await db.query(
        'SELECT * FROM users WHERE email=? AND isActive = 0',[email]
    );
    return result[0].length>0? true: false;
};
exports.signUp= async(username,email,hashedPassword)=>{
    const result = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)',[username,email,hashedPassword]);
    return result[0].affectedRows>0? true: false;
};

exports.logIn=async(email)=>{
    const result = await db.query('SELECT password FROM users WHERE isActive = 0 AND email =? ', [email]);
    return result[0].length>0? result[0][0]: false;
};

exports.deactiveUser = async(email)=>{
    const result = await db.query('UPDATE users SET isActive = 1 WHERE email = ?',[email]);
    return result[0].affectedRows>0? true: false;
}