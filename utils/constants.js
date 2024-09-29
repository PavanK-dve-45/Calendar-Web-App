module.exports={
    databaseMessages:{
        connectionError:'Database connection error',
        creationError: 'Database creation error',
        selectionError: 'Database selection error',
        tableCreationError: 'Table creation error',
        connected: 'Connected to MySQL Database',
        databaseCreated: 'Database created or already exists',
        tableCreated: 'AcademicCalendarUsers table created or already exists',
        queryError: 'Database query error',
    },
    signIN:{
        logedIn:'Login Successfull',
        loginFail:'Login Failed',
        invalidMail: 'Invalid Email',
        decativated: 'User Account Deactivated Successfully'
    },
    signUp:{
        signedUp:'Signup Successfull',
        signinFail:'SignUpFailed',
        userExists: 'User already Exists'
    },
    validationFail:'Validation Failed',
    internalError: 'Internal Server Error',
    sessionMessages: {
        unauthorized: 'Unauthorized entry',
    },
    calendarError:{
        calendarNotFound:'Calendar not found',
        calendarInactive:'Calendar already deactivated',
        userNotFound:'User not found',
    },
    successMessages:{
        calendarDeactivated:'Calendar Deactivated Successfully',
        calendarFound:"Calendar Found",
        calendarCreated: "Calendar Created Successfully",
        calendarModified:"Calendar Modified Successfully"
    },
    eventCatMessages:{
        eventNotFound: "Event Category Not Found",
        eventModified: "Event Category Modified Successfully",
        eventCreated: "Event Category Created Successfully",
        eventFound: "Event Category Exists",
        eventDeleted: "Event Deleted Successfully",
        eventFailed: "Event Creation Failed"
    },
    userIdMessages:{
        'number.base': 'User ID must be a number.',
        'number.integer': 'User ID must be an integer.',
        'number.positive': 'User ID must be a positive number.',
        'any.required': 'User ID is required.'
    },
    calendarIdMessages:{
        'number.base': 'Calendar ID must be a number.',
        'number.integer': 'Calendar ID must be an integer.',
        'number.positive': 'Calendar ID must be a positive number.',
        'any.required': 'Calendar ID is required.'
    },
    catogoryIdMessages:{
        'number.base': 'category ID must be a number.',
        'number.integer': 'category ID must be an integer.',
        'number.positive': 'category ID must be a positive number.',
        'any.required': 'category ID is required.'
    },
    stringMessages:{
        'string.base': 'Calendar name must be a string.',
        'string.empty': 'Calendar name cannot be empty.',
        'string.min': 'Calendar name must be at least 3 characters long.',
        'string.max': 'Calendar name must be less than 255 characters long.',
        'any.required': 'Calendar name is required.'
    },
    catogryNameMessages:{
        'string.base': 'category name must be a string.',
        'string.empty': 'category name cannot be empty.',
        'string.min': 'category name must be at least 3 characters long.',
        'string.max': 'category name must be less than 255 characters long.',
        'any.required': 'category name is required.'
    },
    dateMessages:{
        'date.base': 'Start date must be a valid date.',
        'date.iso': 'Start date must be in ISO format (YYYY-MM-DD).',
        'any.required': 'Start date is required.'
    },
    endDateMessages:{
        'date.base': 'End date must be a valid date.',
        'date.iso': 'End date must be in ISO format (YYYY-MM-DD).',
        'date.greater': 'End date must be after the start date.',
        'any.required': 'End date is required.'
    },
    userName:{
        'string.alphanum': 'Username must only contain alphanumeric characters.',
        'string.empty': 'Username is required.',
        'string.min': 'Username must be at least 3 characters long.',
        'string.max': 'Username must not exceed 30 characters.'
    },
    emailMessage:{
        'string.email': 'Please provide a valid email address.',
        'string.empty': 'Email is required.'
    },
    passwordMessage:{
        'string.pattern.base': 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.',
        'string.empty': 'Password is required.'
    }

}