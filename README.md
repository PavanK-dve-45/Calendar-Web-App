# Calendar Web App

The **Calendar Web App** is a full-stack project designed to help users manage personal events. The app allows users to create, edit, and delete events on personalized calendars. It features user authentication, role-based access control, and a responsive frontend interface, providing a seamless experience across all devices.

## Features

- Access control
- Create, edit, and delete calendars and events
- Responsive design for desktop
- Error handling and data validation

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for server-side logic
- **Express.js**: Web framework for creating RESTful APIs
- **MySQL**: Relational database for storing user and event data
- **@hapi/boom**: Error handling and formatting library
- **JWT (JSON Web Token)**: Authentication for securing API endpoints
- **bcrypt**: Password hashing for user authentication
- **Joi**: Data validation library for incoming requests

### Frontend

- **ReactJS**: Framework for building the user interface

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/PavanK-dve-45/Calendar-Web-App.git
   ```
2. Install dependencies:
   ```
   cd calendar-Web-App
   npm install
   ```
3. Set up environment variables:
   ```
   code .env
   ```
   Update the `.env` file with your database credentials and JWT secret.

4. Run the application:
   ```
   npm start
   ```

## API Endpoints

- **POST** `/api/user/signup` – Register a new user
- **POST** `/api/user/signin` – Authenticate a user and generate a token
- **GET** `/api/calendars/fetch` – Retrieve all user calendar
- **POST** `/api/category/events` – Create a new event
- **PATCH** `/api/category/edit` – Update an existing event
- **DELETE** `/api/calendars/delete` – Delete a calendar

