# Lab 5 - Express Server with Middleware and Authentication

## Description
This project demonstrates how to create an Express server from scratch, implement middleware, use authentication with JSON Web Tokens (JWT), and serve static pages. The lab focuses on building a secure and flexible server that includes dynamic routing, middleware for validation, and automatic server restarts using Nodemon.

## Objectives
- Create an Express server from scratch.
- Implement middleware for request validation and authentication.
- Use JWT for secure session-based authentication.
- Render static HTML pages from a designated directory.
- Test endpoints using cURL and Postman.

---

## Features

### Express Server
- *Dynamic Routing*: Supports dynamic endpoints for users and items.
- *Static File Rendering*: Serves static HTML files and assets from a specified directory.
- *Nodemon Integration*: Automatically restarts the server when changes are made.

### Middleware
- Validates incoming requests based on custom rules (e.g., query parameters).
- Logs request details such as query time.

### Authentication
- Uses JWT for secure authentication of users.
- Includes session-based login and registration endpoints.
- Protects specific routes for authenticated users only.

---

## API Endpoints

### 1. Root Endpoint
- *Method*: GET
- *Endpoint*: /
- *Description*: Returns a "Hello World!" message.

### 2. Dynamic User Endpoint
- *Method*: GET
- *Endpoint*: /user/:id
- *Description*: Returns the last successful login for the user with the specified ID.

### 3. Dynamic Item Endpoint
- *Method*: GET
- *Endpoint*: /item/:id
- *Description*: Returns the last enquiry date for the item with the specified ID.

### 4. Authentication - Register
- *Method*: POST
- *Endpoint*: /register
- *Request Body*:
  - username (string): The username of the new user.
  - password (string): The password of the new user.
- *Description*: Registers a new user.

### 5. Authentication - Login
- *Method*: POST
- *Endpoint*: /login
- *Request Body*:
  - username (string): The username of the user.
  - password (string): The password of the user.
- *Description*: Logs in an existing user and provides a JWT.

### 6. Protected Route
- *Method*: GET
- *Endpoint*: /auth/get_message
- *Description*: Returns a success message for authenticated users.

---

## Middleware Functionality
- *Password Validation*: Verifies if the correct password (pwd123) is provided in the query parameters before granting access to certain endpoints.
- *Authentication Middleware*: Protects the /auth/get_message endpoint, ensuring only users with a valid JWT can access it.
- *Static File Serving*: Serves files from the cad220_staticfiles directory.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- npm (Node Package Manager).

### Steps to Run the Project

1. *Create the Project Directory*:
   ```bash
   mkdir myexpressapp
   cd myexpressapp