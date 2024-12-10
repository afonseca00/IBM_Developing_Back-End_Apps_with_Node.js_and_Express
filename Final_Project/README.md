# Final Project - Node.js and Express.js Web Application

## Description
This project showcases the development of a web application using Node.js and Express.js. It incorporates multiple backend functionalities, including routing, middleware, authentication, and handling static files. The project demonstrates best practices for building scalable and maintainable server-side applications.

## Objectives
- Build a Node.js and Express.js server from scratch.
- Utilize middleware for handling requests, logging, and error handling.
- Implement session-based and token-based authentication.
- Serve static HTML pages and other static assets.
- Explore routing techniques for modular and maintainable code.
- Automate server restarts during development using *nodemon*.

---

## Features

### Server Features
1. *Routing*: 
   - Modular routing using express.Router() for handling different resource paths.
   - Application-level routing for organizing endpoints efficiently.

2. *Middleware*:
   - Application-level middleware for logging request times.
   - Router-level middleware for specific resource handling.
   - Error-handling middleware for managing server errors.

3. *Authentication*:
   - Token-based authentication using JSON Web Tokens (JWT).
   - Session management using express-session.

4. *Static Files*:
   - Serve static HTML, CSS, and JavaScript files.
   - Dynamically render pages with user-provided content.

5. *Server Automation*:
   - Utilize nodemon for automatic server restarts during development.

---

## API Endpoints

### General Endpoints
1. *Root Path*:
   - Method: GET
   - Endpoint: /
   - Description: Returns a "Hello World!" message.

### Authentication Endpoints
2. *Login*:
   - Method: POST
   - Endpoint: /login
   - Body Parameters:
     - username: Username of the user.
     - password: Password of the user.
   - Description: Logs in a user and provides a session token.

3. *Register*:
   - Method: POST
   - Endpoint: /register
   - Body Parameters:
     - username: Desired username.
     - password: Desired password.
   - Description: Registers a new user to the application.

4. *Protected Resource*:
   - Method: GET
   - Endpoint: /auth/resource
   - Description: Requires a valid JWT token to access.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- npm (Node Package Manager).

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/afonseca00/IBM_Developing_Back-End_Apps_with_Node.js_and_Express.git