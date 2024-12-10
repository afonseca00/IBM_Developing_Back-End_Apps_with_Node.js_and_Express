const express = require('express');
const axios = require('axios'); // Import Axios
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Task 10: Get the list of books available in the shop using Promises
public_users.get('/', async function (req, res) {
    try {
        const response = await new Promise((resolve, reject) => {
            resolve(books); // Mocking the behavior of fetching data
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch books." });
    }
});

// Task 11: Get book details based on ISBN using Promises
public_users.get('/isbn/:isbn', async function (req, res) {
    const isbn = req.params.isbn;

    try {
        const response = await new Promise((resolve, reject) => {
            const book = books[isbn];
            if (book) resolve(book);
            else reject("Book not found.");
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
});

public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;

  if (books[isbn]) {
      return res.status(200).json(books[isbn].reviews || {});
  } else {
      return res.status(404).json({ message: "Book not found.." });
  }
});

// Task 12: Get book details based on author using Async-Await
public_users.get('/author/:author', async function (req, res) {
    const author = req.params.author;

    try {
        const filteredBooks = await new Promise((resolve) => {
            resolve(Object.values(books).filter(book => book.author === author));
        });

        if (filteredBooks.length > 0) {
            return res.status(200).json(filteredBooks);
        } else {
            throw "No books found for the specified author.";
        }
    } catch (error) {
        return res.status(404).json({ message: error });
    }
});

// Task 13: Get book details based on title using Async-Await
public_users.get('/title/:title', async function (req, res) {
    const title = req.params.title;

    try {
        const filteredBooks = await new Promise((resolve) => {
            resolve(Object.values(books).filter(book => book.title === title));
        });

        if (filteredBooks.length > 0) {
            return res.status(200).json(filteredBooks);
        } else {
            throw "No books found for the specified title.";
        }
    } catch (error) {
        return res.status(404).json({ message: error });
    }
});

module.exports.general = public_users;