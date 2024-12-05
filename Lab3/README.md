# Lab 3: Async Callback Programming

This lab demonstrates how to use asynchronous callbacks in Node.js to handle various I/O operations efficiently. You'll learn the differences between synchronous and asynchronous operations and explore advanced concepts like Promises and working with JSON data.

## Objectives

- Understand asynchronous callbacks and how they differ from synchronous operations.
- Write Node.js applications utilizing asynchronous callbacks.
- Work with Promises for more structured asynchronous operations.
- Fetch and process JSON data using HTTP requests.

---

## Tasks

### Task 1: Set-up
- Clone the repository containing the lab artifacts.
- Navigate to the directory with the exercise files.

### Task 2: Synchronous I/O
- Use fs.readFileSync to read files in a blocking manner.
- Observe the execution order of console logs to understand synchronous behavior.

### Task 3: Asynchronous I/O
- Use fs.readFile to read files non-blocking.
- Observe how asynchronous operations change the order of execution.

### Task 4: Creating Callback Functions
- Define and use callback functions with setTimeout.
- Explore how callbacks work for delayed execution.

### Task 5: Promises
- Write a Node.js application using Promises to handle file reading.
- Use .then and .catch to manage resolved and rejected states.

### Task 6: Async Axios Requests
- Use the axios library to make HTTP requests.
- Handle both resolved and rejected requests with Promises.

### Task 7: Working with JSON
- Fetch a remote JSON file using axios.
- Parse and format the JSON response for better readability.

---

## Summary

By completing this lab, you will:

- Gain hands-on experience with asynchronous callbacks in Node.js.
- Learn how to handle I/O operations asynchronously using callbacks and Promises.
- Work with JSON data retrieved from remote URLs using HTTP requests.
- Understand how to manage asynchronous flows in Node.js efficiently.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React.git