# Lab 4 - CRUD Operations with Node.js and Express.js

## Description
This project implements an API using Node.js and Express.js to manage a list of friends. The application allows you to perform CRUD (Create, Retrieve, Update, and Delete) operations on friend data. It also includes session-based authentication using JSON Web Tokens (JWT).

## Objectives
- Create an API to perform CRUD operations on transient data using an Express server.
- Implement session-based authentication using JWT for authorized access.
- Test endpoints using *cURL* and *Postman*.

---

## Features

### CRUD Operations
1. *Create*:
   - Add a new friend with the following fields:
     - firstName (First Name)
     - lastName (Last Name)
     - email (Email)
     - DOB (Date of Birth)

2. *Retrieve*:
   - List all friends.
   - Retrieve details of a specific friend by their email.
   - Retrieve all friends with a specific last name.
   - Sort friends by their date of birth in ascending order.

3. *Update*:
   - Update the details of a friend by their email.

4. *Delete*:
   - Delete a specific friend by their email.

### Authentication
- Authentication is implemented using JSON Web Tokens (JWT).
- Only authenticated users can access the endpoints.

---

## API Endpoints

### 1. *Retrieve All Friends*
- *Method:* GET
- *Endpoint:* /user
- *Description:* Returns a list of all friends.

### 2. *Retrieve Friend by Email*
- *Method:* GET
- *Endpoint:* /user/:email
- *Description:* Retrieves details of a friend using their email.

### 3. *Add a New Friend*
- *Method:* POST
- *Endpoint:* /user
- *Query Parameters:*
  - firstName
  - lastName
  - email
  - DOB
- *Description:* Adds a new friend to the list.

### 4. *Update Friend by Email*
- *Method:* PUT
- *Endpoint:* /user/:email
- *Query Parameters (optional):*
  - firstName
  - lastName
  - email
  - DOB
- *Description:* Updates the details of a friend by their email.

### 5. *Delete Friend by Email*
- *Method:* DELETE
- *Endpoint:* /user/:email
- *Description:* Deletes a friend from the list by their email.

### 6. *Retrieve Friends by Last Name*
- *Method:* GET
- *Endpoint:* /user/lastName/:lastName
- *Description:* Retrieves all friends with a specific last name.

### 7. *Sort Friends by Date of Birth*
- *Method:* GET
- *Endpoint:* /user/sort
- *Description:* Returns the list of friends sorted by their date of birth in ascending order.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- *npm* (Node Package Manager).

### Steps to Run the Project

1. *Clone the repository:*
   ```bash
   git clone https://github.com/ibm-developer-skills-network/mxpfu-nodejsLabs.git