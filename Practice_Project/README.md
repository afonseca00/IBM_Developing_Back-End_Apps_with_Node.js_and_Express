# Practice Project

## Description

This project demonstrates the creation of a basic Express.js server and explores essential concepts such as middleware, routing, serving static files, and implementing basic REST APIs. The server uses Express.js, a web application framework for Node.js, and integrates tools like nodemon to streamline development by automatically restarting the server during code changes.

## Objectives

- Build a Node.js and Express.js server from scratch.
- Understand and implement middleware for routing and logging.
- Serve static files from a directory.
- Set up endpoints for different routes and handle HTTP requests.
- Use nodemon for development to improve efficiency.

---

## Features

1. *Static File Serving*:
   - Serve files from a designated directory (cad220_staticfiles).
   - Support for rendering HTML pages and other static assets.

2. *Routing*:
   - Use of Express routers for user and item paths.
   - Custom middleware to log request details for each route.

3. *Basic Endpoints*:
   - Handle HTTP requests (GET) for different resources.
   - Demonstrate dynamic route parameters.

4. *Middleware*:
   - Application-level and router-level middleware examples.
   - Logging timestamps for requests.

5. *Development Tools*:
   - Integration with nodemon for automatic server restarts.
   - Simplified package management using npm.

---

## API Endpoints

### User Routes
- *GET /user/:id*:
  - Returns the user ID and the timestamp of the request.

### Item Routes
- *GET /item/:id*:
  - Returns the item ID and the timestamp of the request.

### Static Files
- Any file in the cad220_staticfiles directory can be accessed directly via its filename in the URL.

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your system.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ibm-developer-skills-network/mxpfu-nodejsLabs.git
   cd Practice_Project