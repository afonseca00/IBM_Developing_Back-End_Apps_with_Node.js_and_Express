const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username) => {
  // Check if the username already exists
  return users.some(user => user.username === username);
};

const authenticatedUser = (username, password) => {
  // Verify that the username and password match
  return users.some(user => user.username === username && user.password === password);
};

// Only registered users can log in
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username or password is missing." });
  }

  if (!authenticatedUser(username, password)) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  // Generate a JWT
  const accessToken = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });

  // Save the token in the session
  req.session.authorization = {
    accessToken,
    username
  };

  return res.status(200).json({ 
    message: "Login successful!", 
    token: accessToken 
  });
});

regd_users.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
      return res.status(400).json({ message: "Missing username or password." });
  }

  if (isValid(username)) {
      return res.status(409).json({ message: "User already exists." });
  }

  users.push({ username, password });
  return res.status(201).json({ message: "User successfully registered!" });
});

// Add or modify a review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const { review } = req.body; // Pegue a review do corpo da requisição
  const username = req.user; // Username já validado pelo middleware

  if (!review) {
      return res.status(400).json({ message: "Review content is required" });
  }

  if (books[isbn]) {
      // Adicione ou atualize a avaliação
      if (!books[isbn].reviews) {
          books[isbn].reviews = {};
      }
      books[isbn].reviews[username] = review;
      return res.status(200).json({ message: "Review added/updated successfully" });
  } else {
      return res.status(404).json({ message: "Book not found" });
  }
});

// Delete a review
regd_users.delete("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params;

  if (!req.session.authorization) {
    return res.status(403).json({ message: "User not authenticated." });
  }

  const username = req.user;

  if (!books[isbn] || !books[isbn].reviews) {
    return res.status(404).json({ message: "Book or review not found." });
  }

  if (!books[isbn].reviews[username]) {
    return res.status(403).json({ message: "You do not have a review for this book." });
  }

  // Delete the user's review
  delete books[isbn].reviews[username];

  return res.status(200).json({
    message: "Review deleted successfully!",
    reviews: books[isbn].reviews
  });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
